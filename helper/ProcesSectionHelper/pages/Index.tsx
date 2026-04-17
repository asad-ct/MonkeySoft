import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import About from '../components/About';
import Process from '../components/Process';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const ParticleBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0B000B);
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 2.5, 28);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;

    const gu = {
      time: { value: 0 }
    };

    let sizes = [];
    let shift = [];
    const pushShift = () => {
      shift.push(
        Math.random() * Math.PI,
        Math.random() * Math.PI * 2,
        (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
        Math.random() * 0.9 + 0.1
      );
    };

    // Fix for .fill() error - create array with values
    let pts = Array.from({ length: 75000 }, () => {
      sizes.push(Math.random() * 1.5 + 0.5);
      pushShift();
      return new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * 0.5 + 9.5);
    });

    for (let i = 0; i < 100000; i++) {
      let r = 10, R = 40;
      let rand = Math.pow(Math.random(), 1.5);
      let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
      pts.push(new THREE.Vector3().setFromCylindricalCoords(radius, Math.random() * 2 * Math.PI, (Math.random() - 0.5) * 2));
      sizes.push(Math.random() * 1.5 + 0.5);
      pushShift();
    }

    const g = new THREE.BufferGeometry().setFromPoints(pts);
    g.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1));
    g.setAttribute("shift", new THREE.Float32BufferAttribute(shift, 4));

    // Create a custom shader material to avoid the onBeforeCompile issue
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        size: { value: 0.125 }
      },
      vertexShader: `
        uniform float time;
        uniform float size;
        attribute float sizes;
        attribute vec4 shift;
        varying vec3 vColor;
        
        void main() {
          vec3 transformed = position.xyz;
          
          // Custom particle movement
          float t = time;
          float moveT = mod(shift.x + shift.z * t, 6.283185307179586);
          float moveS = mod(shift.y + shift.z * t, 6.283185307179586);
          transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;
          
          vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // Color calculation
          float d = length(abs(position) / vec3(40., 10., 40));
          d = clamp(d, 0., 1.);
          vColor = mix(vec3(227., 155., 0.), vec3(100., 50., 255.), d) / 255.;
          
          gl_PointSize = size * sizes * (300.0 / -mvPosition.z);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float d = length(gl_PointCoord.xy - 0.5);
          if (d > 0.5) discard;
          
          gl_FragColor = vec4(vColor, smoothstep(0.5, 0.1, d));
        }
      `,
      transparent: true,
      depthTest: false,
      blending: THREE.AdditiveBlending
    });

    const p = new THREE.Points(g, material);
    p.rotation.order = "ZYX";
    p.rotation.z = 0.2;
    scene.add(p);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      let t = clock.getElapsedTime() * 0.5;
      gu.time.value = t * Math.PI;
      material.uniforms.time.value = t * Math.PI;
      p.rotation.y = t * 0.05;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      g.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Landing Section - Grey Background */}
      <section id="home" className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* 3D Background */}
        <ParticleBackground />

        <div className="container mx-auto max-w-[500px] px-4 md:px-6 pt-4 pb-6 absolute top-40 left-40 z-10 m-4 md:m-8 backdrop-blur-sm">
          <div className="flex flex-col items-start ml-10">
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight my-4 ml-4 text-white">
              ASAD ALI.
            </h1>

            <div className="border-l border-white px-6 py-4 mb-12 mx-16 backdrop-blur-sm rounded-r">
              <div className="uppercase tracking-widest text-xs mb-2 text-white">
                Web Developer
              </div>
              <div className="text-white">
                2022-2025
              </div>
            </div>

            <div className="uppercase tracking-widest text-sm font-medium ml-2 text-white px-4 py-2 rounded">
              Transforming ideas into Reality
            </div>
            <div className="mt-8">
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Black Background */}
      <About />
      {/* Process Section - Black Background */}
      <Process />
      {/* Projects Section - Black Background */}
      <Projects />
      {/* Skills Section - Black Background */}
      <Skills />
      {/* Contact Section - Black Background */}
      <Contact />
    </div>
  );
};

export default Index;