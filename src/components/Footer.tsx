import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import logo from '@/assets/infotechiezz-logo.jpeg';

const footerLinks = {
  courses: [
    { name: 'Java Programming', href: '#courses' },
    { name: 'C Programming', href: '#courses' },
    { name: 'C++ Mastery', href: '#courses' },
    { name: 'Python Development', href: '#courses' },
  ],
  events: [
    { name: 'Coding Contests', href: '#events' },
    { name: 'Webinars', href: '#events' },
    { name: 'Workshops', href: '#events' },
    { name: 'Hackathons', href: '#events' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
  ],
};

const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="InfoTechiezz"
                className="h-12 w-auto rounded-lg"
              />
              <span className="font-display text-2xl font-bold gradient-text">
                InfoTechiezz
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering the next generation of programmers with industry-relevant education and hands-on experience.
            </p>
            <a
              href="mailto:infotechiezz@gmail.com"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              infotechiezz@gmail.com
            </a>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold font-display mb-4">Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="font-bold font-display mb-4">Events</h4>
            <ul className="space-y-3">
              {footerLinks.events.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold font-display mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 InfoTechiezz. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by InfoTechiezz Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
