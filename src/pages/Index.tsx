import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import ContestRegistration from '@/components/ContestRegistration';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <ContestRegistration />
        <Hero />
        <Courses />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
