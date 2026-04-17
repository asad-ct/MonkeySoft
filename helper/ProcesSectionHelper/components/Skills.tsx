import React from 'react';
import { Code, Server, Database, Smartphone, Cpu, Github, Terminal, Monitor } from 'lucide-react';

const Skills = () => {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="bg-[#0A0A0A] min-h-screen pt-24 pb-16 text-white rounded-t-[30px]" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14">
            <div>
              <div className="inline-flex items-center justify-center mb-4">
                <span className="bg-[#111111] text-white text-xs px-4 py-2 rounded-full flex items-center" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
                  ◎ Expertise
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display mb-2">My <span className="text-gray-400">Skills</span></h2>
              <p className="text-gray-400 max-w-2xl">
                Specialized in web and Android development with expertise in creating seamless digital experiences.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium inline-block hover:bg-gray-200 transition-colors">
                Contact Me
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column */}
            <div>
              <div className="bg-[#111111] rounded-2xl p-8 mb-8" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
                <div className="flex items-center mb-6">
                  <Code className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-display">Frontend Development</h3>
                </div>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">HTML & CSS</span>
                      <span className="text-white font-medium">95%</span>
                    </div>
                    <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{
                        width: '95%'
                      }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">JavaScript/TypeScript</span>
                      <span className="text-white font-medium">92%</span>
                    </div>
                    <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{
                        width: '92%'
                      }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">React/Next.js</span>
                      <span className="text-white font-medium">90%</span>
                    </div>
                    <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{
                        width: '90%'
                      }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Responsive Design</span>
                      <span className="text-white font-medium">95%</span>
                    </div>
                    <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{
                        width: '95%'
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#111111] rounded-2xl p-8" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
                <div className="flex items-center mb-6">
                  <Server className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-display">Backend Development</h3>
                </div>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Node.js/Express</span>
                      <span className="text-white font-medium">88%</span>
                    </div>
                    <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{
                        width: '88%'
                      }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">RESTful APIs</span>
                      <span className="text-white font-medium">90%</span>
                    </div>
                    <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{
                        width: '90%'
                      }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Firebase</span>
                      <span className="text-white font-medium">85%</span>
                    </div>
                    <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{
                        width: '85%'
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div>
              <div className="bg-[#111111] rounded-2xl p-8 mb-8" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
                <div className="flex items-center mb-6">
                  <Smartphone className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-display">Android Development</h3>
                </div>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Kotlin</span>
                      <span className="text-white font-medium">92%</span>
                    </div>
                    <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{
                        width: '92%'
                      }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Java</span>
                      <span className="text-white font-medium">85%</span>
                    </div>
                    <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{
                        width: '85%'
                      }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Android SDK</span>
                      <span className="text-white font-medium">88%</span>
                    </div>
                    <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{
                        width: '88%'
                      }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Jetpack Compose</span>
                      <span className="text-white font-medium">85%</span>
                    </div>
                    <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{
                        width: '85%'
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#111111] rounded-2xl p-8" style={{ boxShadow: "16px 24px 20px 8px #0006, inset 0 2px #b8b4b414" }}>
                <div className="flex items-center mb-6">
                  <Database className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-xl font-display">Development Tools</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0D0D0D] rounded-xl p-4 flex flex-col items-center justify-center hover:bg-[#151515] transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-3">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white text-base mb-1">Android Studio</div>
                    <div className="text-gray-400 text-sm">Expert</div>
                  </div>

                  <div className="bg-[#0D0D0D] rounded-xl p-4 flex flex-col items-center justify-center hover:bg-[#151515] transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-3">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white text-base mb-1">VS Code</div>
                    <div className="text-gray-400 text-sm">Expert</div>
                  </div>

                  <div className="bg-[#0D0D0D] rounded-xl p-4 flex flex-col items-center justify-center hover:bg-[#151515] transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-3">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white text-base mb-1">Git/GitHub</div>
                    <div className="text-gray-400 text-sm">Advanced</div>
                  </div>

                  <div className="bg-[#0D0D0D] rounded-xl p-4 flex flex-col items-center justify-center hover:bg-[#151515] transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-3">
                      <Terminal className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white text-base mb-1">CLI Tools</div>
                    <div className="text-gray-400 text-sm">Expert</div>
                  </div>

                  <div className="bg-[#0D0D0D] rounded-xl p-4 flex flex-col items-center justify-center hover:bg-[#151515] transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-3">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white text-base mb-1">Docker</div>
                    <div className="text-gray-400 text-sm">Advanced</div>
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

export default Skills;
