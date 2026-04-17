import React from 'react';
import { Twitter, Instagram, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#0D0D0D] min-h-screen pt-24 pb-16 text-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center">
            <span className="bg-[#111111] text-white text-xs px-4 py-2 rounded-full flex items-center">
              ◎ Expert Designer
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display mt-6 mb-3">Johan Beker, <span className="text-gray-400">Your Designer</span></h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Brief initial presentation of myself and my previous experiences.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 ">
          <div className="md:w-5/12 lg:w-1/3">
            <div className="bg-[#111111] rounded-2xl p-5 pb-3 overflow-hidden" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
              <div className="relative">
                <img
                  src="/lovable-uploads/9c6772cf-ae74-4f6b-a535-49ce239950f6.png"
                  alt="Profile"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                  <span className="flex items-center text-xs bg-black bg-opacity-60 text-white px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Available for work
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="font-display text-xl font-medium">Hello I am Johan Beker</h3>
                <p className="text-gray-400 text-sm mt-1">UI/UX Interaction Designer Based in Berlin.</p>

                <div className="flex justify-start items-center mt-5 border-b border-zinc-800 pb-5">
                  <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center text-gray-300 hover:bg-zinc-700 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <div className="h-4 w-px mx-4 bg-zinc-700"></div>
                  <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center text-gray-300 hover:bg-zinc-700 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <div className="h-4 w-px mx-4 bg-zinc-700"></div>
                  <a href="#" aria-label="Website" className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center text-gray-300 hover:bg-zinc-700 transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>

                <div className="mt-5">
                  <button className="w-full py-3 bg-[#0A0A0A] rounded-xl text-sm font-medium hover:bg-zinc-700 transition-colors">
                    Connect with me
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-7/12 lg:w-2/4">
            <div className="bg-[#111111] rounded-2xl p-8 text-gray-300" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
              <p className="mb-6">
                I'm Johan Beker, a dedicated Web Designer & Developer based in the vibrant city of Berlin, Germany. I specialize in creative design with seamless technical execution to craft exceptional digital experiences.
              </p>

              <div className="flex flex-wrap gap-2 my-6 border-y border-zinc-800 py-5">
                <span className="px-4 py-2 bg-[#0A0A0A] text-lightgrey text-sm rounded-lg">Product Design</span>
                <span className="px-4 py-2 bg-[#0A0A0A] text-lightgrey text-sm rounded-lg">UX Design</span>
                <span className="px-4 py-2 bg-[#0A0A0A] text-lightgrey text-sm rounded-lg">UI Design</span>
                <span className="px-4 py-2 bg-[#0A0A0A] text-lightgrey text-sm rounded-lg">Framer</span>
                <span className="px-4 py-2 bg-[#0A0A0A] text-lightgrey text-sm rounded-lg">Branding</span>
                <span className="px-4 py-2 bg-[#0A0A0A] text-lightgrey text-sm rounded-lg">Webflow</span>
              </div>

              <div className="mt-8">
                <div className="grid grid-cols-3 gap-4 mb-2 px-4 py-4 bg-[#0D0D0D] text-white text-sm rounded-lg" style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}>
                  <div>
                    <h4 className="font-medium">Freelance</h4>
                  </div>
                  <div className="text-gray-400">GreenLeaf Co</div>
                  <div className="text-gray-400 text-right">2021</div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-2 px-4 py-4 bg-[#0D0D0D] text-white text-sm rounded-lg" style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}>
                  <div>
                    <h4 className="font-medium">UX/UI Designer</h4>
                  </div>
                  <div className="text-gray-400">UrbanFit Studio</div>
                  <div className="text-gray-400 text-right relative">
                    2022
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-2 px-4 py-4 bg-[#0D0D0D] text-white text-sm rounded-lg" style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}>
                  <div>
                    <h4 className="font-medium">Product Designer</h4>
                  </div>
                  <div className="text-gray-400">PixelCraft Studios</div>
                  <div className="text-gray-400 text-right">2023</div>
                </div>

                <div className="grid grid-cols-3 gap-4 px-4 py-4 bg-[#0D0D0D] text-white text-sm rounded-lg" style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}>
                  <div>
                    <h4 className="font-medium">Graphic Designer</h4>
                  </div>
                  <div className="text-gray-400">VistaWorks</div>
                  <div className="text-gray-400 text-right">2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
