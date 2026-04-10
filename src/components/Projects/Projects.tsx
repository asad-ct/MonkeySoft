/// <reference path="../../../dotlottie-player.d.ts" />

'use client';

import { useEffect, useRef, useState } from 'react';

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<HTMLDivElement>(null);
    const [playerReady, setPlayerReady] = useState(false);
    const [hasPlayed, setHasPlayed] = useState(false);
    const animationTriggeredRef = useRef(false);

    useEffect(() => {
        // Load dotlottie player script
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
        script.type = 'module';
        document.body.appendChild(script);

        // Wait for player to be ready and stop it immediately
        const checkPlayer = setInterval(() => {
            if (playerRef.current) {
                const player = playerRef.current.querySelector('dotlottie-player') as any;
                if (player && player.getLottie) {
                    // Stop the player and set to frame 0
                    player.stop();
                    const lottie = player.getLottie();
                    if (lottie) {
                        lottie.goToAndStop(0, true);
                    }
                    // Small delay to ensure stop is applied before marking ready
                    setTimeout(() => {
                        setPlayerReady(true);
                    }, 300);
                    clearInterval(checkPlayer);
                }
            }
        }, 100);

        return () => {
            clearInterval(checkPlayer);
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    useEffect(() => {
        if (!playerReady || hasPlayed || animationTriggeredRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Only trigger when at least 80% is visible
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.8 && playerRef.current && !animationTriggeredRef.current) {
                        // Additional check: ensure section is actually in viewport
                        const rect = entry.target.getBoundingClientRect();
                        const isProperlyInView = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.2;

                        if (isProperlyInView) {
                            const player = playerRef.current.querySelector('dotlottie-player') as any;
                            if (player) {
                                try {
                                    animationTriggeredRef.current = true;
                                    player.play();
                                    setHasPlayed(true);
                                } catch (error) {
                                    console.error('Error playing animation:', error);
                                }
                            }
                        }
                    }
                });
            },
            {
                threshold: [0, 0.5, 0.8, 1.0],
                rootMargin: '-150px 0px 0px 0px', // Don't trigger until 150px into viewport
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [playerReady, hasPlayed]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden"
        >
            {/* Projects Content */}
            <div className="relative z-0 text-center text-white">
                <h2 className="text-5xl font-bold mb-4">Projects Catalog</h2>
                <p className="text-lg text-gray-400">Scroll to see the animation</p>
            </div>

            {/* Background Animation */}
            <div
                ref={playerRef}
                className="absolute inset-0 z-50 overflow-hidden"
                style={{ pointerEvents: 'none' }}
            >
                {/* @ts-expect-error - dotlottie-player is a web component */}
                <dotlottie-player
                    src="/AbstractWaves.lottie"
                    loop={false}
                    controls={false}
                    renderer="svg"
                    background="transparent"
                    style={{
                        width: '100vw',
                        height: '100vh',
                        display: 'block',
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%) scale(1.3)',
                        transformOrigin: 'center center',
                    }}
                />
            </div>
        </section>
    );
}
