import React from 'react';
import { MessageSquare, Layout, Rocket, Archive } from 'lucide-react';

const Process = () => {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="bg-[#0A0A0A] min-h-screen pt-24 pb-16 text-white rounded-t-[30px]" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="bg-[#111111] text-white text-xs px-4 py-2 rounded-full flex items-center" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
                ◎ How it works
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display mb-4">Process <span className="text-gray-400">Is Everything</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Simple, streamlined process is what get's your results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-[#111111] rounded-2xl p-6 pb-16 relative" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
              <div className="absolute top-4 right-4 text-xl font-semibold">1</div>
              <div className="mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display mb-3">Let's Get In Touch</h3>
              <div className="h-28">
                <p className="text-gray-400 text-sm">
                  Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas.
                </p>
              </div>
              <div className="w-full h-px bg-zinc-800 mb-4"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-xs text-gray-200 bg-[#111111] px-4 py-2 rounded-full border border-gray-500 border-[1px]">Step 1</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#111111] rounded-2xl p-6 pb-16 relative" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
              <div className="absolute top-4 right-4 text-xl font-semibold">2</div>
              <div className="mb-4">
                <Layout className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display mb-3">Grab Your Designs</h3>
              <div className="h-28">
                <p className="text-gray-400 text-sm">
                  Tell me your unique vision, and I'll create stunning, functional designs that perfectly align with your goals
                </p>
              </div>
              <div className="w-full h-px bg-zinc-800 mb-4"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-xs text-gray-200 bg-[#111111] px-4 py-2 rounded-full border border-gray-500 border-[1px]">Step 2</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#111111] rounded-2xl p-6 pb-16 relative" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
              <div className="absolute top-4 right-4 text-xl font-semibold">3</div>
              <div className="mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display mb-3">Kickstart Development</h3>
              <div className="h-28">
                <p className="text-gray-400 text-sm">
                  I expertly transform your designs into a powerful, scalable solution, fully ready to launch
                </p>
              </div>
              <div className="w-full h-px bg-zinc-800 mb-4"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-xs text-gray-200 bg-[#111111] px-4 py-2 rounded-full border border-gray-500 border-[1px]">Step 3</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#111111] rounded-2xl p-6 pb-16 relative" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
              <div className="absolute top-4 right-4 text-xl font-semibold">4</div>
              <div className="mb-4">
                <Archive className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display mb-3">And Hand Over</h3>
              <div className="h-28">
                <p className="text-gray-400 text-sm">
                  Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support
                </p>
              </div>
              <div className="w-full h-px bg-zinc-800 mb-4"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-xs text-gray-200 bg-[#111111] px-4 py-2 rounded-full border border-gray-500 border-[1px]">Step 4</span>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-[#111111] max-w-3xl mx-auto rounded-2xl p-8 text-start" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
            <div className="flex flex-row items-start gap-4">
              <div>
                <div className="mb-2">
                  <span className="inline-flex text-lg">
                    ◎ I am with you in every step
                  </span>
                </div>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm">
                  alongside you at each step for seamless experience
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#projects" className="px-6 py-3 bg-[#0D0D0D] text-white rounded-full hover:bg-zinc-900 transition-colors" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
                  See All Projects
                </a>
                <a href="#contact" className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
