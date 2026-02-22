import { motion } from 'framer-motion';
import { Mail, Heart, ArrowRight, Youtube, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
const logo = "/Info techiezz logo.png";

const footerLinks = {
  courses: [
    { name: 'Java Programming', href: 'https://www.youtube.com/@infotechiezz' },
    { name: 'C Programming', href: 'https://www.youtube.com/@infotechiezz' },
    { name: 'C++ Mastery', href: 'https://www.youtube.com/@infotechiezz' },
    { name: 'Python Development', href: 'https://www.youtube.com/@infotechiezz' },
    { name: 'Web Development', href: 'https://www.youtube.com/@infotechiezz' },
  ],
  events: [
    { name: 'Coding Contests', href: '/events?tab=contests' },
    { name: 'Webinars', href: '/events?tab=webinars' },
    { name: 'Workshops', href: '/events?tab=workshops' },
    { name: 'Hackathons', href: '/events?tab=hackathons' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
  ],
};

const socialLinks = [
  { name: 'YouTube', href: 'https://www.youtube.com/@infotechiezz', icon: Youtube },
  { name: 'LinkedIn', href: 'http://www.linkedin.com/in/Infotechiezz', icon: Linkedin },
  { name: 'Instagram', href: 'https://www.instagram.com/infotechiezz/', icon: Instagram },
  { name: 'WhatsApp', href: 'https://whatsapp.com/channel/0029Vb7QJZG8fewpER7N8U0V', icon: MessageCircle },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLink = (href: string) => {
    if (href === '#') return;
    if (href.startsWith('http')) { window.open(href, '_blank'); return; }
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      {/* Blue CTA Banner */}
      <div className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 50%, #0284c7 100%)' }}>
        {/* Dot overlay */}
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-3">
              Start Your Free Learning Journey
            </h3>
            <p className="text-blue-200 text-sm mb-8">
              Join 1,000+ students already learning with InfoTechiezz. All courses are free on YouTube.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="https://www.youtube.com/@infotechiezz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <Youtube className="w-4 h-4 text-red-500" />
                Subscribe on YouTube
              </motion.a>
              <motion.button
                onClick={() => handleLink('#courses')}
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center justify-center gap-2 bg-white/15 text-white font-semibold text-sm px-6 py-3 rounded-xl border border-white/30 hover:bg-white/25 transition-colors"
              >
                Browse Courses
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-gray-900 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div
                className="flex items-center gap-2.5 mb-5 cursor-pointer"
                onClick={() => handleLink('#home')}
              >
                <img src={logo} alt="InfoTechiezz" className="h-12 w-12 object-contain mix-blend-multiply" />
                <div>
                  <span className="font-display text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-[#002B5B] to-[#00E5FF] block">InfoTechiezz</span>
                  <span className="text-xs text-gray-500">Skills That Shape Your Future</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-5 max-w-xs leading-relaxed">
                Empowering the next generation of programmers with industry-relevant education, live events, and hands-on experience.
              </p>
              <a href="mailto:admin@infotechiezz.com"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                <Mail className="w-4 h-4" />
                admin@infotechiezz.com
              </a>

              <div className="flex gap-2 mt-5">
                {socialLinks.map((s) => (
                  <motion.a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" title={s.name}
                    className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 hover:border-gray-600 transition-all cursor-pointer"
                    whileHover={{ scale: 1.1, y: -2 }}>
                    <s.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { title: 'Courses', links: footerLinks.courses },
              { title: 'Events', links: footerLinks.events },
              { title: 'Company', links: footerLinks.company },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-display font-bold text-xs text-gray-300 mb-4 uppercase tracking-widest">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLink(link.href)}
                        className="text-sm text-gray-500 hover:text-gray-200 transition-colors cursor-pointer"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-600">© 2025 InfoTechiezz. All rights reserved.</p>
            <p className="text-xs text-gray-600 flex items-center gap-1.5">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by the InfoTechiezz Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
