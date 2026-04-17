import { Hero } from '@/components/Hero';
import Projects from '@/components/Projects';
// import ProjectsShowcase from '@/components/ProjectsShowcase';
// import PhotoGrid from '@/components/PhotoGrid';
import AboutMe from '@/components/AboutMe';
import { RecentWorks } from '@/components/RecentWorks';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { ContactUs } from '@/components/ContactUs';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <AboutMe />
      <RecentWorks />
      <Process />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
