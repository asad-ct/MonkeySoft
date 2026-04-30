'use client';

import styles from './aboutme.module.css';
import { ClientsShowcase } from '@/components/ClientsShowcase';

export default function AboutMe() {
    return (
        <section className={styles.aboutMeSection} id="about-me">
            <ClientsShowcase />
            <div className={styles.container}>
                <div className={styles.moreInfo}>
                    <h2 className={styles.title}>Asad Ali</h2>

                    <section className={styles.about}>
                        <p className={styles.bio}>
                            I&apos;m Asad, a passionate Full Stack Developer based in Pakistan.
                            I specialize in building scalable web applications and clean architectures,
                            blending performance with practical design to deliver reliable digital products.
                        </p>
                    </section>

                    <div className={styles.line}></div>

                    <section className={styles.skills}>
                        <div className={styles.skillTag}>Product Development</div>
                        <div className={styles.skillTag}>Full Stack Development</div>
                        <div className={styles.skillTag}>Backend Architecture</div>
                        <div className={styles.skillTag}>API Design</div>
                        <div className={styles.skillTag}>System Design</div>
                        <div className={styles.skillTag}>NestJS</div>
                        <div className={styles.skillTag}>React</div>
                        <div className={styles.skillTag}>TypeScript</div>
                    </section>

                    <div className={styles.line}></div>

                    <section className={styles.experience}>
                        <div className={styles.experienceItem}>
                            <div className={styles.position}>Full Stack Developer</div>
                            <div className={styles.company}>Freelance</div>
                            <div className={styles.period}>2025–Currently</div>
                        </div>

                        <div className={styles.experienceItem}>
                            <div className={styles.position}>Full Stack Developer</div>
                            <div className={styles.company}>SilverConcepts</div>
                            <div className={styles.period}>2024–2025</div>
                        </div>

                        <div className={styles.experienceItem}>
                            <div className={styles.position}>Backend Developer</div>
                            <div className={styles.company}>Carbonteq</div>
                            <div className={styles.period}>2022–2024</div>
                        </div>
                    </section>
                </div>

                <div className={styles.profileImage}>
                    <img
                        src="/DP/dp.jpeg"
                        alt="Asad - Full Stack Developer"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>

            <div className={styles.projectsText}>
                <p className={styles.projectsLabel}>Recent Works</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={styles.downArrow}>
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z"></path>
                </svg>
            </div>
        </section>
    );
}
