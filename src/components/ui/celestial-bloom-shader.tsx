'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CelestialBloomShader = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // 1) Renderer + Scene + Camera + Clock
        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
            // Cap pixel ratio at 1 to avoid rendering at 2× on retina displays
            renderer.setPixelRatio(1);
            container.appendChild(renderer.domElement);
        } catch (err) {
            console.error('WebGL not supported', err);
            container.innerHTML = '<p style="color:white;text-align:center;">Sorry, WebGL isn\'t available.</p>';
            return;
        }

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const clock = new THREE.Clock();

        // 2) Shaders with Red-Orange theme
        const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

        const fragmentShader = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;

      float noise(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 4; i++) {
          value += amplitude * noise(st);
          st *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) 
                  / min(iResolution.x, iResolution.y);
        float t = iTime * 1.5;
        float radius = length(uv);
        float angle  = atan(uv.y, uv.x);

        float petals     = 5.0;
        float bloomShape = sin(angle * petals + t);
        float distorted  = radius 
                         + bloomShape * 0.1 
                         * fbm(uv * 3.0 + t * 0.1);

        // Red-Orange-White theme for petals
        vec3 deepSpace = vec3(0.02, 0.01, 0.02);     // Very dark purple-black
        vec3 redPetal = vec3(1.0, 0.1, 0.0);         // Bright red (petal edges)
        vec3 orangePetal = vec3(1.0, 0.6, 0.0);      // Bright orange (petal center)
        vec3 whiteStar = vec3(1.0, 1.0, 0.9);        // White (core dot)

        // Gradient from red outside to orange in middle
        float mixVal = smoothstep(0.1, 0.6, distorted);
        vec3 color = mix(redPetal, deepSpace, mixVal);
        color = mix(color, orangePetal, 1.0 - mixVal);

        // Orange petal fill
        float petalGlow = smoothstep(0.35, 0.05, distorted);
        color = mix(color, orangePetal, petalGlow * 0.8);

        // White center dot - gradually gets brighter as radius decreases
        float coreGlow = smoothstep(0.12, 0.0, radius);
        color = mix(color, whiteStar, coreGlow);

        // Twinkle effect with white highlights
        float twinkle = smoothstep(0.98, 0.99, fbm(uv * 10.0));
        color = mix(color, whiteStar, twinkle * (1.0 - coreGlow) * 0.6);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

        // 3) Material, Geometry, Mesh
        const uniforms = {
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2() }
        };
        const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // 4) Resize Handler
        const onResize = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;
            renderer.setSize(w, h);
            uniforms.iResolution.value.set(w, h);
        };
        window.addEventListener('resize', onResize);
        onResize(); // set size before first frame

        // 5) Animation Loop — pause when not in viewport
        const startLoop = () => {
            renderer.setAnimationLoop(() => {
                uniforms.iTime.value = clock.getElapsedTime();
                renderer.render(scene, camera);
            });
        };
        const stopLoop = () => {
            renderer.setAnimationLoop(null);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startLoop();
                    } else {
                        stopLoop();
                    }
                });
            },
            { threshold: 0 }
        );
        observer.observe(container);
        startLoop();

        // 6) Cleanup
        return () => {
            window.removeEventListener('resize', onResize);
            observer.disconnect();

            // stop loop
            renderer.setAnimationLoop(null);

            // remove canvas safely
            const canvas = renderer.domElement;
            if (canvas && canvas.parentNode) {
                canvas.parentNode.removeChild(canvas);
            }

            // dispose
            material.dispose();
            geometry.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '500px',
                height: '500px',
                zIndex: 1,
                pointerEvents: 'none'
            }}
            aria-label="Celestial Bloom animated background"
        />
    );
};

export default CelestialBloomShader;
