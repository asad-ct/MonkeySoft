
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ 
  title, 
  category, 
  description, 
  image, 
  link = "#" 
}: { 
  title: string; 
  category: string; 
  description: string; 
  image: string; 
  link?: string;
}) => {
  return (
    <div className="group">
      <a href={link} className="block overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        <div className="p-6">
          <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">{category}</div>
          <h3 className="text-xl font-display font-medium">{title}</h3>
          <p className="mt-2 text-gray-600 text-sm line-clamp-2">{description}</p>
        </div>
      </a>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Minimalist Portfolio",
      category: "Web Design",
      description: "A clean and minimal portfolio website design for photographers and creative professionals.",
      image: "/lovable-uploads/d9512a80-59dc-4e01-8bc5-48ba5bd6f94e.png",
    },
    {
      title: "Urban Photography",
      category: "Photography",
      description: "A collection of urban landscape photographs showcasing modern architecture and city life.",
      image: "/lovable-uploads/308c7642-ebaa-40f5-b332-ac1580fd004c.png",
    },
    {
      title: "E-commerce Platform",
      category: "UI/UX Design",
      description: "Complete design system for an e-commerce platform with a focus on user experience and conversion optimization.",
      image: "/lovable-uploads/56d535e3-6848-46c7-8045-deaea19bae86.png",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      description: "Comprehensive brand identity design for a tech startup, including logo, color palette, and marketing materials.",
      image: "/lovable-uploads/d9512a80-59dc-4e01-8bc5-48ba5bd6f94e.png",
    },
    {
      title: "Mobile App Design",
      category: "App Design",
      description: "User interface and experience design for a fitness tracking mobile application across iOS and Android platforms.",
      image: "/lovable-uploads/308c7642-ebaa-40f5-b332-ac1580fd004c.png",
    },
    {
      title: "Interactive Website",
      category: "Web Development",
      description: "Development of an interactive website with complex animations and dynamic content for a creative agency.",
      image: "/lovable-uploads/56d535e3-6848-46c7-8045-deaea19bae86.png",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-6 bg-gray-900 mr-3"></div>
            <span className="text-sm uppercase tracking-wider text-gray-600">My Work</span>
          </div>
          
          <h1 className="section-title mb-6">Design Services</h1>
          <p className="text-gray-500">
            Explore a suite of design services to elevate your brand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 text-sm uppercase tracking-wider">
            <span>See All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
