/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../../../dotlottie-player.d.ts" />

'use client';

import { useEffect, useRef, useState } from 'react';
import { ProjectsShowcaseCards } from '@/components/ProjectsShowcaseCards';

export default function Projects() {
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
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

        const handleScroll = () => {
            if (playerRef.current && !animationTriggeredRef.current) {
                const rect = playerRef.current.getBoundingClientRect();
                // Trigger when 30% of the element is in view
                if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
                    const player = playerRef.current.querySelector('dotlottie-player') as unknown as HTMLElement & { play: () => void };
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
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [playerReady, hasPlayed]);

    return (
        <section className="relative w-full">
            {/* Background Animation Container */}
            <div
                ref={playerRef}
                className="absolute inset-0 overflow-hidden z-0"
                style={{ pointerEvents: 'none' }}
            >
                {/* Lottie Player - Base Layer */}
                {/* @ts-expect-error - dotlottie-player is a web component */}
                <dotlottie-player
                    src="/AbstractWaves.lottie"
                    loop={false}
                    controls={false}
                    renderer="svg"
                    background="transparent"
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        inset: 0,
                    }}
                />

                {/* Light overlay to ensure content readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20" />
            </div>

            {/* Projects Content */}
            <div className="relative z-10">
                <ProjectsShowcaseCards />
            </div>
        </section>
    );
}
