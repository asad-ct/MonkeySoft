'use client';

import { useRef, useState, useEffect } from 'react';
import styles from './recentworks.module.css';

interface Project {
    id: number;
    image: string;
    title: string;
}

const projects: Project[] = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    image: `/displayProjects/p${i + 1}.png`,
    title: `Project ${i + 1}`
}));

export const RecentWorks = () => {
    const carouselRef = useRef<HTMLUListElement>(null);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);
    const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

    const handleScroll = () => {
        if (!carouselRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

        setCanScrollPrev(scrollLeft > 0);
        setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 10);
    };

    const scroll = (direction: 'left' | 'right') => {
        if (!carouselRef.current) return;

        // Calculate single item width (33.333% of visible width for 3 items)
        const itemWidth = carouselRef.current.clientWidth / 2.5; // Adjusted for 2.5 items visible
        const newScrollLeft = direction === 'left'
            ? carouselRef.current.scrollLeft - itemWidth
            : carouselRef.current.scrollLeft + itemWidth;

        carouselRef.current.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });

        setTimeout(handleScroll, 600);
    };

    const startAutoScroll = () => {
        if (autoScrollInterval.current) {
            clearInterval(autoScrollInterval.current);
        }

        autoScrollInterval.current = setInterval(() => {
            if (carouselRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

                if (scrollLeft >= scrollWidth - clientWidth - 10) {
                    // Reset to beginning
                    carouselRef.current.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    scroll('right');
                }
            }
        }, 2000); // Scroll every 3 seconds
    };

    useEffect(() => {
        startAutoScroll();

        return () => {
            if (autoScrollInterval.current) {
                clearInterval(autoScrollInterval.current);
            }
        };
    }, []);

    return (
        <section id="recent-works" className={styles.container}>
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
                                        loading="lazy"
                                        decoding="async"
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
