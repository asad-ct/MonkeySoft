'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './projectsShowcaseCards.module.css';

interface Project {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    thumbnail: string;
    images: string[];
    tags: string[];
    link?: string;
    github?: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        id: 'project1',
        title: 'Twin Premium Capital',
        shortDescription: 'Fintech Application, Commercial Premium Financing ',
        description: 'Twin Premium Capital is a financial services company that provides insurance premium financing solutions, helping businesses and individuals spread insurance costs over time to improve cash flow and financial flexibility',
        thumbnail: '/projectPics/twin_login.png',
        images: ['/projectPics/twin_login.png', '/projectPics/twin_home.png', '/projectPics/twin_setting.png'],
        tags: ['React.Js', 'Nest.Js', 'Stripe', 'DocuSign', 'Experian', 'Mailgun', 'Plaid', 'ACHQ', 'Cube.js'],
        link: '#',
        github: '#',
        featured: true,
    },
    {
        id: 'project2',
        title: 'HoneyComb Credit',
        shortDescription: 'Crowd Funding Platform, Invest Local Fund Dreams',
        description: 'HoneyComb Credit is a crowdfunding platform that allows individuals to invest in local projects and fund their dreams, providing a seamless and secure investment experience.',
        thumbnail: '/projectPics/hc_home.png',
        images: ['/projectPics/hc_login.png', '/projectPics/hc_home.png', '/projectPics/hc_detail.png'],
        tags: ['React', 'Express', 'Domain Driven Design', 'Clean Architecture', 'Stripe', 'Plaid', 'Dwolla'],
        link: '#',
        github: '#',
        featured: true,
    },
    {
        id: 'project3',
        title: 'OurPhoneMd',
        shortDescription: 'Medical appointment booking system',
        description: 'OurPhoneMd is a medical appointment booking system that allows patients to schedule and manage their appointments with healthcare providers efficiently.',
        thumbnail: '/projectPics/omd_website.png',
        images: ['/projectPics/omd_website.png', '/projectPics/opmd_home.png', '/projectPics/opmd_appt.png', '/projectPics/opmd_setting.png'],
        tags: ['Next.js', 'Nest.js', 'Stripe', 'twilio', 'live video consultation', 'HIPAA compliant'],
        link: '#',
        github: '#',
    },
    {
        id: 'project4',
        title: 'Gym Dashboard',
        shortDescription: 'Comprehensive gym management system',
        description: 'Complete gym management solution with dashboard, sales tracking, billing, and comprehensive reporting features.',
        thumbnail: '/projectPics/gymDashboard.PNG',
        images: ['/projectPics/gymDashboard.PNG', '/projectPics/gymSales.PNG', '/projectPics/gymBilling.PNG', '/projectPics/gymReports.PNG', '/projectPics/gymReports2.PNG', '/projectPics/gymReports3.PNG'],
        tags: ['Next.js', 'Nest.js', 'Dashboard', 'Sales Tracking', 'Billing', 'Reporting'],
        link: '#',
        github: '#',
    },
];

export default function ProjectsShowcaseCards() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [filter, setFilter] = useState<string>('all');
    const [isInView, setIsInView] = useState(false);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (gridRef.current) {
            observer.observe(gridRef.current);
        }

        return () => {
            if (gridRef.current) {
                observer.unobserve(gridRef.current);
            }
        };
    }, []);

    const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
    const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.tags.includes(filter));

    const handlePrevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
        }
    };

    const handleNextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    return (
        <section className={styles.projectsSection}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Projects Showcase</h2>
                    <p className={styles.subtitle}>Explore a selection of my recent work and creative solutions</p>
                </div>

                {/* Projects Grid */}
                <div className={styles.projectsGrid} ref={gridRef}>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className={`${styles.projectCardWrapper} ${isInView ? styles.animate : ''}`}
                            onClick={() => handleProjectClick(project)}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={styles.projectCard}>
                                {/* Project Image */}
                                <div className={styles.imageContainer}>
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className={styles.projectImage}
                                    />
                                </div>

                                {/* Project Info - Simplified */}
                                <div className={styles.cardContentSimplified}>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* See Projects Button */}
                <div className={styles.buttonContainer}>
                    <a href="#recent-works" className={styles.seeProjectsButton}>
                        View All Projects →
                    </a>
                </div>

                {/* Modal - Project Details */}
                {selectedProject && (
                    <div className={styles.modal} onClick={() => setSelectedProject(null)}>
                        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            {/* Modal Header */}
                            <div className={styles.modalHeader}>
                                <div>
                                    <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                                    <p className={styles.modalSubtitle}>{selectedProject.shortDescription}</p>
                                </div>
                                <button className={styles.closeButton} onClick={() => setSelectedProject(null)}>
                                    ✕
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className={styles.modalBody}>
                                <div className={styles.modalImageContainer}>
                                    <img
                                        src={selectedProject.images[currentImageIndex]}
                                        alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                                        className={styles.modalImage}
                                    />

                                    {/* Image Navigation */}
                                    {selectedProject.images.length > 1 && (
                                        <div className={styles.imageNavigation}>
                                            <button
                                                className={styles.navButton}
                                                onClick={handlePrevImage}
                                                aria-label="Previous image"
                                            >
                                                ←
                                            </button>
                                            <div className={styles.imageCounter}>
                                                {currentImageIndex + 1} / {selectedProject.images.length}
                                            </div>
                                            <button
                                                className={styles.navButton}
                                                onClick={handleNextImage}
                                                aria-label="Next image"
                                            >
                                                →
                                            </button>
                                        </div>
                                    )}

                                    {/* Image Thumbnails */}
                                    {selectedProject.images.length > 1 && (
                                        <div className={styles.imageThumbnails}>
                                            {selectedProject.images.map((img, index) => (
                                                <img
                                                    key={index}
                                                    src={img}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className={`${styles.thumbnail} ${index === currentImageIndex ? styles.activeThumbnail : ''
                                                        }`}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className={styles.modalInfo}>
                                    <h4 className={styles.descriptionTitle}>About this project</h4>
                                    <p className={styles.fullDescription}>{selectedProject.description}</p>

                                    {/* Technologies */}
                                    <div className={styles.technologiesSection}>
                                        <h4 className={styles.technologiesTitle}>Technologies Used</h4>
                                        <div className={styles.technologiesList}>
                                            {selectedProject.tags.map((tag) => (
                                                <span key={tag} className={styles.technologyTag}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
