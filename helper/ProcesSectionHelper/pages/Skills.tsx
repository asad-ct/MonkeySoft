
import React from 'react';

const ProcessCard = ({ 
  number, 
  title, 
  description, 
  icon 
}: { 
  number: number; 
  title: string; 
  description: string; 
  icon: React.ReactNode 
}) => {
  return (
    <div className="bg-gray-900 text-white p-6 lg:p-8 rounded-sm group hover:bg-gray-800 transition-colors">
      <div className="mb-4 text-sm font-medium">{number}</div>
      
      <div className="mb-4 text-gray-400">{icon}</div>
      
      <h3 className="text-xl font-display font-medium mb-3">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
      
      <div className="mt-6 pt-4 border-t border-gray-800">
        <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
          Step {number}
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode 
}) => {
  return (
    <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow group">
      <div className="mb-4 text-gray-800">{icon}</div>
      
      <h3 className="text-xl font-display font-medium mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-6 bg-gray-900 mr-3"></div>
            <span className="text-sm uppercase tracking-wider text-gray-600">How it works</span>
          </div>
          
          <h1 className="section-title mb-6">
            Process <span className="text-gray-400">Is Everything</span>
          </h1>
          <p className="text-gray-500">
            Simple, streamlined process is what get's you results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessCard 
            number={1}
            title="Let's Get In Touch"
            description="Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                <path d="m13 13 6 6"></path>
              </svg>
            }
          />
          
          <ProcessCard 
            number={2}
            title="Grab Your Designs"
            description="Tell me your unique vision, and I'll create stunning, functional designs that perfectly align with your goals"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"></path>
                <path d="M13 15h7a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"></path>
                <path d="m18 15-3-3 3-3"></path>
              </svg>
            }
          />
          
          <ProcessCard 
            number={3}
            title="Kickstart Development"
            description="I expertly transform your designs into a powerful, scalable solution, fully ready to launch"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"></path>
                <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"></path>
              </svg>
            }
          />
          
          <ProcessCard 
            number={4}
            title="And Hand Over"
            description="Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
              </svg>
            }
          />
        </div>
        
        <div className="mt-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title mb-6">
              My Design Skills
            </h2>
            <p className="text-gray-500">
              I specialize in a variety of design disciplines to bring your vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              title="Website Design"
              description="Designing breathtaking, user-centric websites that boost engagement, conversions, and growth, perfectly aligned with your brand"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M3 9h18"></path>
                  <path d="M9 21V9"></path>
                </svg>
              }
            />
            
            <SkillCard 
              title="Logo Design"
              description="Crafting distinctive, scalable, and impactful logos that embody your brand's identity and vision"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 16V8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z"></path>
                  <path d="M6 9h4"></path>
                  <path d="M14 9h4"></path>
                  <path d="M6 12h12"></path>
                  <path d="M6 15h2"></path>
                  <path d="M11 15h2"></path>
                  <path d="M16 15h2"></path>
                </svg>
              }
            />
            
            <SkillCard 
              title="Framer Design"
              description="Bringing ideas to life with interactive, user-centered Framer designs that simplify complexity and elevate user experience"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3v12"></path>
                  <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                  <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                  <path d="M15 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
                  <path d="M6 15h9"></path>
                  <path d="M18 9H9"></path>
                </svg>
              }
            />
            
            <SkillCard 
              title="Graphic Design"
              description="Crafting bold, engaging, and versatile graphic designs that elevate your brand and captivate your audience"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="8" r="2"></circle>
                  <path d="M9.828 14.828A4 4 0 0 0 12 14h4a4 4 0 0 0 0-8h-4a3.95 3.95 0 0 0-2.172.656"></path>
                  <path d="M14.172 14.828A4 4 0 0 1 12 14H8a4 4 0 0 1 0-8h4a3.95 3.95 0 0 1 2.172.656"></path>
                </svg>
              }
            />
            
            <SkillCard 
              title="UI/UX Design"
              description="Creating intuitive and beautiful user interfaces with a focus on usability, accessibility, and conversion optimization"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" x2="9.01" y1="9" y2="9"></line>
                  <line x1="15" x2="15.01" y1="9" y2="9"></line>
                </svg>
              }
            />
            
            <SkillCard 
              title="Frontend Development"
              description="Implementing responsive and performant frontend code that translates design into functional, interactive user experiences"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              }
            />
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="bg-gray-900 text-white p-8 rounded-sm max-w-3xl text-center">
            <div className="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M16 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                <path d="M12 18h.01"></path>
              </svg>
            </div>
            
            <h3 className="text-xl font-display font-medium mb-4">I am with you in every step</h3>
            <p className="text-gray-400 text-sm mb-6">
              Alongside you at each step for seamless experience
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-gray-100 transition-colors">
                See All Projects
              </button>
              <button className="bg-transparent border border-white text-white px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-white/10 transition-colors">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
