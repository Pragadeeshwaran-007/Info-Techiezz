import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import {
    ArrowRight, Star, Users, BookOpen, Trophy, GraduationCap,
    Award, Clock, Layout, Settings, FileCode, Play, Terminal
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

/* ============================================================
   TYPEWRITER CODE SNIPPETS
   ============================================================ */
const codeSnippets = [
    {
        lang: 'Python',
        file: 'learn.py',
        output: 'AI Ready! ✓',
        lines: [
            { tokens: [{ t: 'import ', c: '#60a5fa' }, { t: 'numpy', c: '#fde047' }, { t: ' as np', c: '#e2e8f0' }] },
            { tokens: [{ t: 'import ', c: '#60a5fa' }, { t: 'pandas', c: '#fde047' }, { t: ' as pd', c: '#e2e8f0' }] },
            { tokens: [{ t: 'def ', c: '#60a5fa' }, { t: 'train', c: '#4ade80' }, { t: '(data):', c: '#e2e8f0' }] },
            { tokens: [{ t: '    model ', c: '#df9bfe' }, { t: '=', c: '#fb923c' }, { t: ' LinearRegression()', c: '#86efac' }] },
            { tokens: [{ t: '    model.', c: '#e2e8f0' }, { t: 'fit', c: '#4ade80' }, { t: '(data)', c: '#e2e8f0' }] },
        ],
    },
    {
        lang: 'Java',
        file: 'Main.java',
        output: 'Hello InfoTechiezz! ✓',
        lines: [
            { tokens: [{ t: 'public', c: '#60a5fa' }, { t: ' class ', c: '#a78bfa' }, { t: 'Main', c: '#fde047' }, { t: ' {', c: '#e2e8f0' }] },
            { tokens: [{ t: '  void ', c: '#60a5fa' }, { t: 'learn', c: '#4ade80' }, { t: '() {', c: '#e2e8f0' }] },
            { tokens: [{ t: '    System', c: '#fb923c' }, { t: '.out.', c: '#e2e8f0' }, { t: 'println', c: '#86efac' }, { t: '(', c: '#e2e8f0' }] },
            { tokens: [{ t: '      "InfoTechiezz!"', c: '#34d399' }] },
        ],
    },
    {
        lang: 'HTML',
        file: 'index.html',
        output: 'Web Live! ✓',
        lines: [
            { tokens: [{ t: '<!DOCTYPE ', c: '#fb923c' }, { t: 'html', c: '#60a5fa' }, { t: '>', c: '#fb923c' }] },
            { tokens: [{ t: '<html>', c: '#60a5fa' }] },
            { tokens: [{ t: '  <body>', c: '#60a5fa' }] },
            { tokens: [{ t: '    <h1>', c: '#60a5fa' }, { t: 'Code the Future', c: '#fde047' }, { t: '</h1>', c: '#60a5fa' }] },
        ],
    },
];

const TypewriterEditor = ({ isMobile }: { isMobile?: boolean }) => {
    const [snippetIdx, setSnippetIdx] = useState(0);
    const [visibleLines, setVisibleLines] = useState(0);
    const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing');
    const [showOutput, setShowOutput] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const snippet = codeSnippets[snippetIdx];
    const totalLines = snippet.lines.length;

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        if (phase === 'typing') {
            if (visibleLines < totalLines) {
                timeoutRef.current = setTimeout(() => setVisibleLines(v => v + 1), 220);
            } else {
                setShowOutput(true);
                timeoutRef.current = setTimeout(() => setPhase('pause'), 2500);
            }
        } else if (phase === 'pause') {
            timeoutRef.current = setTimeout(() => {
                setShowOutput(false);
                setPhase('deleting');
            }, 1200);
        } else if (phase === 'deleting') {
            if (visibleLines > 0) {
                timeoutRef.current = setTimeout(() => setVisibleLines(v => v - 1), 80);
            } else {
                timeoutRef.current = setTimeout(() => {
                    setSnippetIdx(i => (i + 1) % codeSnippets.length);
                    setPhase('typing');
                }, 400);
            }
        }
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }, [visibleLines, phase, totalLines]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full bg-[#0F172A] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        >
            {/* Toolbar */}
            <div className="bg-[#1E293B] px-3 md:px-4 py-2 md:py-2.5 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-1 md:gap-1.5">
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-[8px] md:text-[10px] text-gray-400 font-mono tracking-wider flex items-center gap-1.5 md:gap-2">
                    <Terminal className="w-2.5 h-2.5 md:w-3 md:h-3" />
                    {snippet.file}
                </div>
                <div className="px-1.5 md:px-2 py-0.5 rounded bg-blue-500/10 text-[7px] md:text-[9px] text-blue-400 font-bold border border-blue-500/20 uppercase tracking-tighter">
                    {snippet.lang}
                </div>
            </div>

            {/* Code Content */}
            <div className={cn(
                "p-3 md:p-5 font-mono leading-relaxed",
                isMobile ? "min-h-[120px] text-[9px]" : "min-h-[160px] text-[11px]"
            )}>
                {snippet.lines.slice(0, visibleLines).map((line, lid) => (
                    <div key={lid} className="flex gap-2 md:gap-4">
                        <span className="text-gray-600 w-2 md:w-3 text-right select-none">{lid + 1}</span>
                        <div className="flex flex-wrap">
                            {line.tokens.map((token, tid) => (
                                <span key={tid} style={{ color: token.c }}>{token.t}</span>
                            ))}
                            {lid === visibleLines - 1 && phase === 'typing' && (
                                <motion.div
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                    className="w-1 md:w-1.5 h-3 md:h-3.5 bg-blue-500 ml-0.5 md:ml-1 inline-block"
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Console Output */}
            <AnimatePresence>
                {showOutput && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="bg-[#064e3b] px-3 md:px-5 py-2 md:py-2.5 flex items-center gap-2 border-t border-white/5"
                    >
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="font-mono text-[8px] md:text-[10px] text-green-300 tracking-wide">{snippet.output}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

/* ============================================================
   ORBITING ICONS DATA
   ============================================================ */
const orbitIcons = [
    { id: 1, emoji: '☕', label: 'Java', color: '#B07219', bg: '#FFF7ED' },
    { id: 2, emoji: '⚙️', label: 'C++', color: '#00599C', bg: '#EFF6FF' },
    { id: 3, emoji: '🐍', label: 'Python', color: '#3776AB', bg: '#F0FDFA' },
    { id: 4, emoji: '📄', label: 'HTML', color: '#E34F26', bg: '#FFF1F2' },
    { id: 5, emoji: '🏆', label: 'Contests', color: '#F59E0B', bg: '#FFFBEB' },
    { id: 6, emoji: '🎓', label: 'Certified', color: '#10B981', bg: '#ECFDF5' },
    { id: 7, emoji: '⚙️', label: 'Core', color: '#6366F1', bg: '#EEF2FF' },
    { id: 8, emoji: '👥', label: '1k+', color: '#EC4899', bg: '#FDF2F8' },
];

const featurePills = [
    { icon: GraduationCap, label: 'Expert Instructors', color: '#2563EB', bg: '#EFF6FF' },
    { icon: Award, label: 'Certified Courses', color: '#06B6D4', bg: '#ECFEFF' },
    { icon: Clock, label: 'Lifetime Access', color: '#14b8a6', bg: '#F0FDFA' },
];

const stats = [
    { icon: Users, value: '1,000+', label: 'Students' },
    { icon: BookOpen, value: '15+', label: 'Courses' },
    { icon: Trophy, value: '98%', label: 'Success Rate' },
];

const Hero = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [shuffledIcons, setShuffledIcons] = useState(orbitIcons);
    const containerRef = useRef<HTMLDivElement>(null);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    // Track window width for responsive scaling
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;

    // Dynamic scaling factors
    const containerSize = isMobile ? 320 : isTablet ? 420 : 480;
    const orbitRadius = (containerSize / 2) - (isMobile ? 20 : 0);

    // Shuffle icons every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setShuffledIcons(prev => [...prev].sort(() => Math.random() - 0.5));
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current || isMobile) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 25;
        const y = (e.clientY - rect.top - rect.height / 2) / 25;
        setMousePos({ x, y });
    };

    const scrollTo = (href: string) => {
        if (href.startsWith('/')) { navigate(href); return; }
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 100);
        } else {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative pt-24 pb-12 overflow-hidden min-h-[90vh] flex items-center"
        >
            {/* Background Grid & Particles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="hidden lg:block absolute inset-0 bg-dot-grid opacity-[0.4]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-white to-sky-50/50" />
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] md:text-xs font-bold mb-6 md:mb-8 uppercase tracking-widest shadow-sm"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                            ✦ Welcome to InfoTechiezz
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-black font-display text-gray-900 leading-[1.1] mb-6 tracking-tight"
                        >
                            Elevate Your Career with{' '}
                            <span className="relative inline-block">
                                <span className="gradient-text">Industry-Level</span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="absolute -bottom-1 left-0 h-3 bg-blue-500/10 -z-10 rounded-full"
                                />
                            </span>{' '}
                            Courses
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-500 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            Master <span className="text-blue-600 font-bold">Java, C++, Python</span> and modern web development. Join 1,000+ learners building the future through live contests.
                        </motion.p>

                        <div className="flex flex-wrap gap-2 md:gap-4 justify-center lg:justify-start mb-8 md:mb-10">
                            {featurePills.map((pill, i) => (
                                <motion.div
                                    key={pill.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="feature-pill text-[10px] md:text-sm neumorphism-soft hover:scale-105 transition-all cursor-default"
                                >
                                    <div className="pill-icon shadow-inner w-7 h-7 md:w-8 md:h-8" style={{ background: pill.bg }}>
                                        <pill.icon className="w-3.5 h-3.5 md:w-4 md:h-4" style={{ color: pill.color }} />
                                    </div>
                                    {pill.label}
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center lg:justify-start mb-10 md:mb-12">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollTo('#courses')}
                                className="btn-primary text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
                            >
                                <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
                                Start Learning Now
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollTo('/events')}
                                className="btn-outline text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
                            >
                                <Play className="w-4 h-4 md:w-5 md:h-5 text-blue-600 fill-blue-600" />
                                Explore Events
                            </motion.button>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 md:gap-10 justify-center lg:justify-start">
                            {stats.map((s, i) => (
                                <motion.div key={s.label}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="flex items-center gap-2.5 md:gap-3"
                                >
                                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-white shadow-md flex items-center justify-center border border-gray-100">
                                        <s.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="text-lg md:text-xl font-black font-display text-gray-900 leading-none">{s.value}</div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">{s.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT ILLUSTRATION - ORBIT SYSTEM - HIDDEN ON MOBILE/TABLET */}
                    <div className="hidden lg:flex relative items-center justify-center min-h-[500px] order-1 lg:order-2">
                        <motion.div
                            style={{
                                x: mousePos.x,
                                y: mousePos.y,
                                width: containerSize,
                                height: containerSize
                            }}
                            className="relative flex items-center justify-center"
                        >
                            <div className="absolute inset-[20%] rounded-full border-[2px] md:border-[3px] border-blue-500/10 shadow-[0_0_80px_rgba(59,130,246,0.1)] bg-white/5" />
                            <div className="absolute inset-0 rounded-full border-[1px] md:border-[1.5px] border-dashed border-blue-200/30" />

                            <div className="absolute inset-0 animate-orbit">
                                <AnimatePresence mode="popLayout">
                                    {shuffledIcons.map((icon, i) => {
                                        const angle = (i * 360) / shuffledIcons.length;
                                        const radian = (angle * Math.PI) / 180;
                                        const x = orbitRadius * Math.cos(radian);
                                        const y = orbitRadius * Math.sin(radian);
                                        const iconSize = isMobile ? 48 : 56;

                                        return (
                                            <motion.div
                                                key={icon.id}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                    left: `calc(50% + ${x}px - ${iconSize / 2}px)`,
                                                    top: `calc(50% + ${y}px - ${iconSize / 2}px)`,
                                                }}
                                                exit={{ opacity: 0, scale: 0 }}
                                                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: i * 0.05 }}
                                                style={{
                                                    position: 'absolute',
                                                    width: iconSize,
                                                    height: iconSize,
                                                }}
                                                className="z-20"
                                            >
                                                <div className="w-full h-full animate-orbit-counter">
                                                    <div className="w-full h-full animate-float-micro" style={{ animationDelay: `${i * 0.4}s` }}>
                                                        <div className="w-full h-full rounded-full neumorphism-soft flex flex-col items-center justify-center gap-0.5 border border-white hover:border-blue-200 hover:scale-110 transition-all group cursor-pointer shadow-lg animate-glow-pulse">
                                                            <span className="text-base md:text-xl group-hover:scale-125 transition-transform">{icon.emoji}</span>
                                                            <span className="text-[6px] md:text-[7px] font-black text-gray-400 uppercase tracking-tighter">{icon.label}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </div>

                            <div className="relative z-30 perspective-1000" style={{ width: isMobile ? 180 : 240 }}>
                                <motion.div whileHover={{ rotateY: 5, rotateX: -5 }} transition={{ type: 'spring', stiffness: 200 }}>
                                    <TypewriterEditor isMobile={isMobile} />
                                </motion.div>
                            </div>

                            {/* FLOATING GLASS CARDS */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: 1, scale: 1,
                                    x: isMobile ? -10 : 0,
                                    y: isMobile ? containerSize / 2 : 60
                                }}
                                className="absolute -bottom-8 -left-12 z-40 glass-premium p-3 md:p-4 rounded-xl md:rounded-2xl w-[140px] md:w-[190px] shadow-xl"
                            >
                                <div className="text-[8px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2 md:mb-3">Skill Progress</div>
                                {[{ l: 'Java', p: 85, c: '#3b82f6' }, { l: 'DSA', p: 72, c: '#06b6d4' }, { l: 'Python', p: 65, c: '#a855f7' }].map(s => (
                                    <div key={s.l} className="mb-2 md:mb-2.5 last:mb-0">
                                        <div className="flex justify-between text-[8px] md:text-[9px] font-bold text-gray-700 mb-0.5 md:mb-1">
                                            <span>{s.l}</span><span>{s.p}%</span>
                                        </div>
                                        <div className="h-0.5 md:h-1 rounded-full bg-gray-200/50 overflow-hidden">
                                            <motion.div initial={{ width: 0 }} animate={{ width: `${s.p}%` }} transition={{ duration: 1.5, delay: 1.5 }}
                                                className="h-full rounded-full" style={{ background: s.c }} />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: 1, scale: 1,
                                    x: isMobile ? 10 : 0,
                                    y: isMobile ? -containerSize / 2 : -60
                                }}
                                className="absolute -top-10 -right-8 z-40 glass-premium px-4 md:px-5 py-2.5 md:py-3 rounded-xl md:rounded-2xl min-w-[120px] md:min-w-[160px] shadow-xl"
                            >
                                <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-1.5">
                                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[8px] md:text-[9px] font-black text-green-500 tracking-widest uppercase">Live Now</span>
                                </div>
                                <div className="text-[10px] md:text-[11px] font-black text-gray-800">Java Masterclass</div>
                                <div className="text-[8px] md:text-[9px] text-gray-400 font-bold">248 Learners</div>
                            </motion.div>

                            {!isMobile && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, x: -80 }}
                                        animate={{ opacity: 1, x: -60 }}
                                        className="absolute top-1/2 -left-32 -translate-y-1/2 z-40 glass-premium px-5 py-3 rounded-2xl flex flex-col items-center shadow-xl"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                                            <Award className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div className="text-[10px] font-black text-gray-800">Certificate Earned!</div>
                                        <div className="flex gap-0.5 mt-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />)}
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 80 }}
                                        animate={{ opacity: 1, x: 60 }}
                                        className="absolute bottom-1/4 -right-16 z-40 glass-premium p-3 rounded-2xl shadow-xl"
                                    >
                                        <div className="flex -space-x-2 mb-2">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <div key={i} className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
                                                    style={{ background: `hsl(${i * 60}, 70%, 60%)` }} />
                                            ))}
                                        </div>
                                        <div className="text-[11px] font-black text-gray-800 leading-tight">1k+ Learners</div>
                                        <span className="text-[9px] text-gray-400 font-bold">Learning globally</span>
                                    </motion.div>
                                </>
                            )}
                        </motion.div>
                    </div>

                </div>
            </div>

            <style>{`.perspective-1000 { perspective: 1000px; }`}</style>
        </section>
    );
};

export default Hero;
