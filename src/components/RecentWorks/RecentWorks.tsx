'use client';

import { useRef, useState } from 'react';
import styles from './recentworks.module.css';

interface Project {
    id: number;
    image: string;
    title: string;
}

const projects: Project[] = [
    {
        id: 1,
        image: 'https://framerusercontent.com/images/bed888CTflXNK3KFX1R7VhRMtE.png',
        title: 'Project 1'
    },
    {
        id: 2,
        image: 'https://framerusercontent.com/images/JGI1jOpxUUfW0IRfPmx7eMGhc.png',
        title: 'Project 2'
    },
    {
        id: 3,
        image: 'https://framerusercontent.com/images/fsFDlU7CKq0E96MXMN9fUXrNw.png',
        title: 'Project 3'
    },
    {
        id: 4,
        image: 'https://framerusercontent.com/images/jlIAaI4caPj3oVLaxetMd2RvY.png',
        title: 'Project 4'
    },
    {
        id: 5,
        image: 'https://framerusercontent.com/images/RYRvZnstUexQMOl8zRyrvDfDT0.png',
        title: 'Project 5'
    }
];

export const RecentWorks = () => {
    const carouselRef = useRef<HTMLUListElement>(null);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const handleScroll = () => {
        if (!carouselRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

        setCanScrollPrev(scrollLeft > 0);
        setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 10);
    };

    const scroll = (direction: 'left' | 'right') => {
        if (!carouselRef.current) return;

        const scrollAmount = carouselRef.current.clientWidth;
        const newScrollLeft = direction === 'left'
            ? carouselRef.current.scrollLeft - scrollAmount
            : carouselRef.current.scrollLeft + scrollAmount;

        carouselRef.current.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });

        setTimeout(handleScroll, 600);
    };

    return (
        <section className={styles.container}>
            <div className={styles.carouselWrapper}>
                <ul
                    ref={carouselRef}
                    className={styles.carousel}
                    onScroll={handleScroll}
                >
                    {projects.map((project) => (
                        <li key={project.id} className={styles.carouselItem}>
                            <div className={styles.projectCard}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={styles.projectImage}
                                    />
                                </div>
                                <div className={styles.overlay}>
                                    <button className={styles.viewButton}>
                                        <span>View Casestudy</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 256 256"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                        >
                                            <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <button
                    className={`${styles.navButton} ${styles.prevButton} ${!canScrollPrev ? styles.disabled : ''}`}
                    onClick={() => scroll('left')}
                    disabled={!canScrollPrev}
                    aria-label="Previous projects"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        width="24"
                        height="24"
                        fill="currentColor"
                    >
                        <path d="M137.66,130.34l18.35-18.35a8,8,0,0,0-11.32-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L137.66,154.69H176a8,8,0,0,0,0-16H137.66m88-90.34H88a56,56,0,0,0-56,56v96a56,56,0,0,0,56,56h32a56,56,0,0,0,56-56V88A56,56,0,0,0,144,16Z" />
                    </svg>
                </button>

                <button
                    className={`${styles.navButton} ${styles.nextButton} ${!canScrollNext ? styles.disabled : ''}`}
                    onClick={() => scroll('right')}
                    disabled={!canScrollNext}
                    aria-label="Next projects"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        width="24"
                        height="24"
                        fill="currentColor"
                    >
                        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                    </svg>
                </button>
            </div>
        </section>
    );
};
