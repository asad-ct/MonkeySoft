'use client';

import { MessageSquare, Layout, Rocket, Archive } from 'lucide-react';
import styles from './process.module.css';

interface ProcessStep {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    step: string;
}

const steps: ProcessStep[] = [
    {
        id: 1,
        icon: <MessageSquare className={styles.icon} />,
        title: "Let's Get In Touch",
        description: 'Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas.',
        step: 'Step 1'
    },
    {
        id: 2,
        icon: <Layout className={styles.icon} />,
        title: 'Grab Your Designs',
        description: "Tell me your unique vision, and I'll create stunning, functional designs that perfectly align with your goals",
        step: 'Step 2'
    },
    {
        id: 3,
        icon: <Rocket className={styles.icon} />,
        title: 'Kickstart Development',
        description: 'I expertly transform your designs into a powerful, scalable solution, fully ready to launch',
        step: 'Step 3'
    },
    {
        id: 4,
        icon: <Archive className={styles.icon} />,
        title: 'And Hand Over',
        description: 'Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support',
        step: 'Step 4'
    }
];

export const Process = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span>◎ How it works</span>
                    </div>

                    <h2 className={styles.title}>
                        Process <span className={styles.subtitle}>Is Everything</span>
                    </h2>
                    <p className={styles.description}>
                        Simple, streamlined process is what get's your results
                    </p>
                </div>

                <div className={styles.grid}>
                    {steps.map((step) => (
                        <div key={step.id} className={styles.card}>
                            <div className={styles.stepNumber}>{step.id}</div>
                            <div className={styles.iconWrapper}>
                                {step.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{step.title}</h3>
                            <div className={styles.descriptionWrapper}>
                                <p className={styles.cardDescription}>{step.description}</p>
                            </div>
                            <div className={styles.divider}></div>
                            <div className={styles.stepBadge}>
                                <span>{step.step}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <div>
                            <div className={styles.ctaLabel}>◎ I am with you in every step</div>
                            <p className={styles.ctaSubtext}>alongside you at each step for seamless experience</p>
                        </div>
                        <div className={styles.ctaButtons}>
                            <a href="#projects" className={styles.buttonSecondary}>
                                See All Projects
                            </a>
                            <a href="#contact" className={styles.buttonPrimary}>
                                Contact Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
