'use client';

import { useState, useEffect } from 'react';

interface Project {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    gradient: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Brand Identity',
        subtitle: 'Creative design solutions',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
        gradient: 'linear-gradient(to top, black, #AB140E, #D04739)',
    },
    {
        id: 2,
        title: 'Web Design',
        subtitle: 'Modern & responsive',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80',
        gradient: 'linear-gradient(to top, black, #EB070E, #F74E40)',
    },
    {
        id: 3,
        title: 'UI/UX Design',
        subtitle: 'User-centered approach',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
        gradient: 'linear-gradient(to top, black, #F63715, #FF8D69)',
    },
    {
        id: 4,
        title: 'App Development',
        subtitle: 'Native & cross-platform',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
        gradient: 'linear-gradient(to top, black, #FD4E0B, #FF9663)',
    },
    {
        id: 5,
        title: 'Digital Marketing',
        subtitle: 'Strategic campaigns',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        gradient: 'linear-gradient(to top, black, #FB5734, #FE806B)',
    },
    {
        id: 6,
        title: 'Digital Marketing',
        subtitle: 'Strategic campaigns',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        gradient: 'linear-gradient(to top, black, #FE806B, #FFA983)',
    },
    {
        id: 7,
        title: 'Digital Marketing',
        subtitle: 'Strategic campaigns',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        gradient: 'linear-gradient(to top, black, #FFA983, #FFE5B5)',
    },
];

export default function ProjectsShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-[#060606] flex items-center justify-center overflow-hidden py-20 px-5">
            {/* Options Container */}
            <div className="flex flex-row items-stretch overflow-hidden min-w-[600px] max-w-[1600px] w-[calc(100%-100px)] h-[600px] gap-6">
                {projects.map((project, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <div
                            key={project.id}
                            onClick={() => setActiveIndex(index)}
                            className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${isActive
                                ? 'flex-grow-[10000] max-w-[8000px] rounded-[40px]'
                                : 'flex-grow min-w-[100px] rounded-[30px]'
                                }`}
                            style={{
                                backgroundImage: isActive ? `url(${project.image})` : project.gradient,
                                backgroundSize: isActive ? 'auto 100%' : 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Shadow Overlay */}
                            <div
                                className={`absolute left-0 right-0 h-[120px] transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${isActive ? 'bottom-0' : 'bottom-[-40px]'
                                    }`}
                                style={{
                                    boxShadow: isActive
                                        ? 'inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black'
                                        : 'inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black'
                                }}
                            />

                            {/* Vertical Title for Closed Images */}
                            {!isActive && (
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
                                    <span className="font-black text-3xl tracking-wider" style={{
                                        background: 'linear-gradient(180deg, #4a4a4a 0%, #000000 50%, #1a1a1a 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        textShadow: 'none',
                                        // filter: 'drop-shadow(2px 2px 3px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
                                    }}>
                                        {project.title}
                                    </span>
                                </div>
                            )}

                            {/* Label */}
                            <div
                                className={`absolute h-[40px] flex transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${isActive ? 'bottom-[20px] left-[20px] right-0' : 'bottom-[10px] left-1/2 -translate-x-1/2'
                                    }`}
                            >
                                {/* Icon */}
                                <div className="flex items-center justify-center min-w-[40px] max-w-[40px] h-[40px] rounded-full bg-[#090909] text-[#ED5565]">
                                    <span className="text-lg">●</span>
                                </div>

                                {/* Info */}
                                <div className={`flex flex-col justify-center ml-[10px] text-white whitespace-pre ${isActive ? '' : 'hidden'}`}>
                                    <div
                                        className={`relative font-bold text-[1.2rem] transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${isActive ? 'left-0 opacity-100' : 'left-[20px] opacity-0'
                                            }`}
                                    >
                                        {project.title}
                                    </div>
                                    <div
                                        className={`relative transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] delay-100 ${isActive ? 'left-0 opacity-100' : 'left-[20px] opacity-0'
                                            }`}
                                    >
                                        {project.subtitle}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
