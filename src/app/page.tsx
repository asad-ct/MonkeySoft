import { Hero } from '@/components/Hero';
import Projects from '@/components/Projects';
// import ProjectsShowcase from '@/components/ProjectsShowcase';
// import PhotoGrid from '@/components/PhotoGrid';
import AboutMe from '@/components/AboutMe';
import { RecentWorks } from '@/components/RecentWorks';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      {/* <ProjectsShowcase />
      <PhotoGrid /> */}
      <AboutMe />
      <RecentWorks />
      <Process />
      <Testimonials />
      {/* Additional sections will be added as modular components */}
    </main>
  );
}
