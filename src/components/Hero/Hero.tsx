'use client';

import { useEffect } from 'react';
import styles from './hero.module.css';

interface HeroProps {
    splineUrl?: string;
}

export default function Hero({
    splineUrl = 'https://prod.spline.design/SkHTgNHwnkRsGpjy/scene.splinecode',
}: HeroProps) {
    useEffect(() => {
        // Load Spline viewer script
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.12.51/build/spline-viewer.js';
        document.body.appendChild(script);

        return () => {
            // Cleanup if needed
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <section className={styles.hero} id="hero">
            {/* Text Content - Floats above animation */}
            <div className={styles.heroContent}>
                <div className={styles.tag}>
                    <span>Crafting Unique Brand Identities</span>
                </div>

                <h1 className={styles.title}>
                    Branding that you need Indeed
                </h1>

                <p className={styles.subtitle}>
                    Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.
                </p>

                <div className={styles.buttonGroup}>
                    <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                        <span>Get Started Now</span>
                    </a>
                    <a href="#recent-works" className={`${styles.btn} ${styles.btnSecondary}`}>
                        <span>See Projects</span>
                    </a>
                </div>
            </div>

            {/* @ts-expect-error - spline-viewer is a web component */}
            <spline-viewer url={splineUrl} />
        </section>
    );
}
