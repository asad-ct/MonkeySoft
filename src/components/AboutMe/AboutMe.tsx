'use client';

import styles from './aboutme.module.css';

export default function AboutMe() {
    return (
        <section className={styles.aboutMeSection} id="about-me">
            <div className={styles.container}>
                <div className={styles.moreInfo}>
                    <h2 className={styles.title}>Meet Meily</h2>

                    <section className={styles.about}>
                        <p className={styles.bio}>
                            I'm Meily, a passionate Brand Identity & Package Designer based in tokyo.
                            I specialize in crafting bold visual identities and packaging that captivate and inspire,
                            blending creativity with strategy to elevate brands.
                        </p>
                    </section>

                    <div className={styles.line}></div>

                    <section className={styles.skills}>
                        <div className={styles.skillTag}>Product Design</div>
                        <div className={styles.skillTag}>Brand Identity Design</div>
                        <div className={styles.skillTag}>UX Design</div>
                        <div className={styles.skillTag}>Branding</div>
                        <div className={styles.skillTag}>Packaging Design</div>
                        <div className={styles.skillTag}>Figma</div>
                        <div className={styles.skillTag}>Photoshop</div>
                    </section>

                    <div className={styles.line}></div>

                    <section className={styles.experience}>
                        <div className={styles.experienceItem}>
                            <div className={styles.position}>Freelance</div>
                            <div className={styles.company}>GreenLeaf Co</div>
                            <div className={styles.period}>Currently</div>
                        </div>

                        <div className={styles.experienceItem}>
                            <div className={styles.position}>Brand Designer</div>
                            <div className={styles.company}>UrbanFit Studio</div>
                            <div className={styles.period}>2023-24</div>
                        </div>

                        <div className={styles.experienceItem}>
                            <div className={styles.position}>Package Designer</div>
                            <div className={styles.company}>GreenK Studio</div>
                            <div className={styles.period}>2020-22</div>
                        </div>
                    </section>
                </div>

                <div className={styles.profileImage}>
                    <img
                        src="https://framerusercontent.com/images/roWFLkzHAotwSx5UxGPxpxMeA.jpg"
                        alt="profile pic"
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
