import React from 'react';
import { Globe, Layers, Code, Database } from 'lucide-react';

const Projects = () => {
  return (
    <div className="bg-[#0D0D0D]">
      <div className="bg-[#0D0D0D] min-h-screen pt-24 pb-16 text-white rounded-t-[30px]" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <div className="inline-flex items-center justify-center mb-4">
                <span className="bg-[#111111] text-white text-xs px-4 py-2 rounded-full flex items-center" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
                  ◎ Project showcase
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display mb-2 text-white">Project <span className="text-gray-400">Showcase</span></h2>
              <p className="text-gray-400 max-w-2xl">
                Explore a collection of my latest work and successful client projects.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium inline-block hover:bg-gray-200 transition-colors">
                View All Projects
              </a>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
          <div className="gap-6 flex flex-row">
            <div>
              {/* Web Application Project */}
              <div className="bg-[#111111] rounded-2xl p-6 overflow-hidden mb-5" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
                <div className="flex mb-4 items-center">
                  <Globe className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-display">Web Application Development</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Developing breathtaking, user-centric websites that boost engagement, conversions, and growth, perfectly aligned with your brand
                </p>
                <div className="rounded-lg overflow-hidden h-64 relative">
                  <img
                    src="/lovable-uploads/2.png"
                    alt="Web project screenshot"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/600x400/111111/333333?text=Web+Project";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full">HoneyComb Credit</span>
                  </div>
                </div>
              </div>

              {/* Third Party Integration */}
              <div className="bg-[#111111] rounded-2xl p-6 max-h-[200px]" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
                <div className="flex mb-4 items-center">
                  <Layers className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-display">Third Party Api Integration</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Integrating third-party APIs to enhance functionality and streamline operations, ensuring seamless integration with your existing systems
                </p>
              </div>
            </div>

            <div>
              {/* Mobile App Project */}
              <div className="bg-[#111111] rounded-2xl p-6 max-h-[200px] mb-5" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
                <div className="flex mb-4 items-center">
                  <Code className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-display">Mobile App Development</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Bringing ideas to life with interactive, user-centered mobile designs that simplify complexity and elevate user experience
                </p>
              </div>

              {/* Dashboard Project */}
              <div className="bg-[#111111] rounded-2xl p-6 overflow-hidden" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
                <div className="flex mb-4 items-center">
                  <Database className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-display">Dashboard Development</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Crafting bold, engaging, and versatile dashboards that elevate your brand and captivate your audience
                </p>
                <div className="rounded-lg overflow-hidden h-64 relative">
                  <img
                    src="/lovable-uploads/dashboard.png"
                    alt="Dashboard design"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/600x400/111111/333333?text=Dashboard";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full">Twin Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
