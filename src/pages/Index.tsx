import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import Features from '@/components/Features';
import Community from '@/components/Community';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import EventPopupModal from '@/components/EventPopupModal';
import EventHighlight from '@/components/EventHighlight';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <EventHighlight />
        <Courses />
        <Features />
        <Community />
        <Contact />
      </main>
      <Footer />
      <EventPopupModal />
    </div>
  );
};

export default Index;
