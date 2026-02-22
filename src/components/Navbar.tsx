import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Youtube, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const logo = "/Info techiezz logo.png";
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Features', href: '#about' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '#contact' },
];

const socialLinks = [
    { name: 'YouTube', href: 'https://www.youtube.com/@infotechiezz', icon: Youtube, color: 'text-red-500' },
    { name: 'LinkedIn', href: 'http://www.linkedin.com/in/Infotechiezz', icon: Linkedin, color: 'text-blue-600' },
    { name: 'Instagram', href: 'https://www.instagram.com/infotechiezz/', icon: Instagram, color: 'text-pink-600' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        if (href.startsWith('/')) {
            navigate(href);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const el = document.querySelector(href);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 pt-4 pb-2",
            scrolled ? "md:pt-4" : "md:pt-6",
            !scrolled && location.pathname === '/events' && "text-white"
        )}>
            <div className={cn(
                "max-w-5xl mx-auto rounded-2xl transition-all duration-300 border border-transparent",
                scrolled
                    ? "bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg shadow-blue-500/5 py-2 px-4 md:px-6"
                    : "bg-transparent py-2 px-4 md:px-6"
            )}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2.5 cursor-pointer group"
                        onClick={() => handleNavClick('#home')}
                    >
                        <div className="relative">
                            <img
                                src={logo}
                                alt="InfoTechiezz"
                                className={cn(
                                    "h-10 w-10 object-contain transition-all duration-300",
                                    !scrolled && location.pathname === '/events' ? "brightness-0 invert" : "mix-blend-multiply"
                                )}
                            />
                            <div className="absolute -inset-1 bg-blue-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="hidden sm:block">
                            <span className={cn(
                                "font-display text-lg font-black block leading-tight tracking-tight bg-clip-text text-transparent transition-all duration-300",
                                !scrolled && location.pathname === '/events'
                                    ? "bg-gradient-to-r from-blue-200 to-white"
                                    : "bg-gradient-to-r from-[#002B5B] to-[#00E5FF]"
                            )}>
                                InfoTechiezz
                            </span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.href)}
                                className={cn(
                                    "px-4 py-2 rounded-xl text-sm font-semibold transition-all transition-colors",
                                    location.pathname === '/' && location.hash === link.href.replace('/', '')
                                        ? "text-blue-600 bg-blue-50"
                                        : (!scrolled && location.pathname === '/events')
                                            ? "text-white/90 hover:bg-white/10 hover:text-white"
                                            : "text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                                )}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3 border-l border-gray-100 ml-2 pl-5">
                        <div className="flex items-center gap-1.5 mr-2">
                            {socialLinks.map((s) => (
                                <motion.a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -2 }}
                                    className={cn(
                                        "p-1.5 rounded-lg transition-colors",
                                        (!scrolled && location.pathname === '/events')
                                            ? "text-white/80 hover:bg-white/10 hover:text-white"
                                            : cn("hover:bg-gray-100", s.color)
                                    )}
                                >
                                    <s.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleNavClick('#courses')}
                            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-blue-600/20 flex items-center gap-1.5"
                        >
                            Get Started
                            <ArrowRight className="w-3.5 h-3.5" />
                        </motion.button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={cn(
                            "md:hidden p-2 rounded-xl border transition-all",
                            (!scrolled && location.pathname === '/events')
                                ? "bg-white/10 text-white border-white/20"
                                : "bg-gray-50 text-gray-900 border-gray-200"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-gray-200 shadow-2xl overflow-hidden z-50"
                    >
                        {/* Mobile Header Layout: Logo | X (Dark Theme) */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#1A1110] text-white">
                            <div className="flex items-center gap-3">
                                <img src={logo} alt="Logo" className="h-8 w-8 object-contain brightness-110" />
                                <div className="w-px h-6 bg-white/20 mx-1" />
                                <span className="font-display font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 text-sm">InfoTechiezz</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-4 space-y-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.href)}
                                    className="w-full text-left px-5 py-3.5 rounded-2xl text-base font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all active:scale-95 flex items-center justify-between group"
                                >
                                    {link.name}
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </button>
                            ))}

                            <div className="pt-4 pb-2 border-t border-gray-100 mt-2">
                                <p className="px-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Connect With Us</p>
                                <div className="flex gap-4 px-5">
                                    {socialLinks.map((s) => (
                                        <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className={cn("p-2 rounded-2xl bg-gray-50", s.color)}>
                                            <s.icon className="w-6 h-6" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="p-2">
                                <button
                                    onClick={() => handleNavClick('#courses')}
                                    className="w-full py-4 rounded-2xl bg-blue-600 text-white font-black text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
                                >
                                    Explore All Courses
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
