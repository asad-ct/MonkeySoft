'use client';

import { useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import type { DotLottie } from '@lottiefiles/dotlottie-react';
import { ProjectsShowcaseCards } from '@/components/ProjectsShowcaseCards';

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const dotLottieRef = useRef<DotLottie | null>(null);
    const hasPlayedRef = useRef(false);

    const dotLottieRefCallback = (instance: DotLottie) => {
        dotLottieRef.current = instance;
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasPlayedRef.current && dotLottieRef.current) {
                        hasPlayedRef.current = true;
                        dotLottieRef.current.play();
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative w-full" ref={sectionRef}>
            {/* Background Animation Container */}
            <div
                className="absolute inset-0 overflow-hidden z-0"
                style={{ pointerEvents: 'none' }}
            >
                {/* Lottie Player - Base Layer */}
                <DotLottieReact
                    src="/AbstractWaves.lottie"
                    loop={false}
                    autoplay={false}
                    dotLottieRefCallback={dotLottieRefCallback}
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
