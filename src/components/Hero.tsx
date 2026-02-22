import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Star, Users, BookOpen, Trophy, CheckCircle, GraduationCap, Award, Clock } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

/* ============================================================
   TYPEWRITER CODE SNIPPETS
   ============================================================ */
const codeSnippets = [
    {
        lang: 'Java',
        file: 'Main.java',
        output: 'Hello InfoTechiezz! ✓',
        lines: [
            { tokens: [{ t: 'public', c: '#60a5fa' }, { t: ' class ', c: '#a78bfa' }, { t: 'Main', c: '#fde047' }, { t: ' {', c: '#e2e8f0' }] },
            { tokens: [{ t: '  void ', c: '#60a5fa' }, { t: 'learn', c: '#4ade80' }, { t: '() {', c: '#e2e8f0' }] },
            { tokens: [{ t: '    System', c: '#fb923c' }, { t: '.out.', c: '#e2e8f0' }, { t: 'println', c: '#86efac' }, { t: '(', c: '#e2e8f0' }] },
            { tokens: [{ t: '      "InfoTechiezz!"', c: '#34d399' }] },
            { tokens: [{ t: '    );', c: '#e2e8f0' }] },
            { tokens: [{ t: '  }', c: '#e2e8f0' }] },
            { tokens: [{ t: '}', c: '#e2e8f0' }] },
        ],
    },
    {
        lang: 'C',
        file: 'main.c',
        output: 'Pointers Mastered! ✓',
        lines: [
            { tokens: [{ t: '#include', c: '#a78bfa' }, { t: ' <stdio.h>', c: '#86efac' }] },
            { tokens: [{ t: 'int ', c: '#60a5fa' }, { t: 'main', c: '#4ade80' }, { t: '() {', c: '#e2e8f0' }] },
            { tokens: [{ t: '  int ', c: '#60a5fa' }, { t: 'x', c: '#fde047' }, { t: ' = 42;', c: '#e2e8f0' }] },
            { tokens: [{ t: '  int ', c: '#60a5fa' }, { t: '*ptr', c: '#fb923c' }, { t: ' = &x;', c: '#e2e8f0' }] },
            { tokens: [{ t: '  printf', c: '#4ade80' }, { t: '("', c: '#e2e8f0' }, { t: '%d', c: '#34d399' }, { t: '", *ptr);', c: '#e2e8f0' }] },
            { tokens: [{ t: '  return ', c: '#60a5fa' }, { t: '0', c: '#fbbf24' }, { t: ';', c: '#e2e8f0' }] },
            { tokens: [{ t: '}', c: '#e2e8f0' }] },
        ],
    },
    {
        lang: 'Python',
        file: 'learn.py',
        output: 'AI Ready! ✓',
        lines: [
            { tokens: [{ t: 'import ', c: '#60a5fa' }, { t: 'numpy', c: '#fde047' }, { t: ' as np', c: '#e2e8f0' }] },
            { tokens: [{ t: 'import ', c: '#60a5fa' }, { t: 'pandas', c: '#fde047' }, { t: ' as pd', c: '#e2e8f0' }] },
            { tokens: [{ t: 'def ', c: '#60a5fa' }, { t: 'train', c: '#4ade80' }, { t: '(data):', c: '#e2e8f0' }] },
            { tokens: [{ t: '    model ', c: '#e2e8f0' }, { t: '=', c: '#fb923c' }, { t: ' LinearRegression()', c: '#86efac' }] },
            { tokens: [{ t: '    model.', c: '#e2e8f0' }, { t: 'fit', c: '#4ade80' }, { t: '(data)', c: '#e2e8f0' }] },
            { tokens: [{ t: '    return ', c: '#60a5fa' }, { t: 'model', c: '#fde047' }] },
        ],
    },
    {
        lang: 'HTML',
        file: 'index.html',
        output: 'Website Live! ✓',
        lines: [
            { tokens: [{ t: '<!DOCTYPE ', c: '#fb923c' }, { t: 'html', c: '#60a5fa' }, { t: '>', c: '#fb923c' }] },
            { tokens: [{ t: '<html>', c: '#60a5fa' }] },
            { tokens: [{ t: '  <head>', c: '#60a5fa' }] },
            { tokens: [{ t: '    <title>', c: '#60a5fa' }, { t: 'InfoTechiezz', c: '#34d399' }, { t: '</title>', c: '#60a5fa' }] },
            { tokens: [{ t: '  </head>', c: '#60a5fa' }] },
            { tokens: [{ t: '  <body>', c: '#60a5fa' }] },
            { tokens: [{ t: '    <h1>', c: '#60a5fa' }, { t: 'Learn & Code', c: '#fde047' }, { t: '</h1>', c: '#60a5fa' }] },
        ],
    },
];

/* ============================================================
   TYPEWRITER EDITOR COMPONENT
   ============================================================ */
const TypewriterEditor = () => {
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
                timeoutRef.current = setTimeout(() => setPhase('pause'), 1800);
            }
        } else if (phase === 'pause') {
            timeoutRef.current = setTimeout(() => {
                setShowOutput(false);
                setPhase('deleting');
            }, 900);
        } else if (phase === 'deleting') {
            if (visibleLines > 0) {
                timeoutRef.current = setTimeout(() => setVisibleLines(v => v - 1), 80);
            } else {
                timeoutRef.current = setTimeout(() => {
                    setSnippetIdx(i => (i + 1) % codeSnippets.length);
                    setPhase('typing');
                }, 300);
            }
        }
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }, [phase, visibleLines, totalLines]);

    return (
        <motion.div
            animate={{
                boxShadow: [
                    '0 0 0 0 rgba(37,99,235,0.22)',
                    '0 0 0 20px rgba(37,99,235,0)',
                    '0 0 0 0 rgba(37,99,235,0)',
                ]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="rounded-3xl overflow-hidden border border-blue-100"
            style={{ background: '#0F172A', minHeight: 210 }}
        >
            {/* Title bar */}
            <div className="px-4 py-2.5 flex items-center gap-2 bg-[#1e293b]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-[9px] text-slate-500 ml-2 font-mono">{snippet.file}</span>
                {/* Language badge */}
                <span className="ml-auto text-[8px] px-1.5 py-0.5 rounded font-bold"
                    style={{ background: 'rgba(96,165,250,0.15)', color: '#60a5fa' }}>
                    {snippet.lang}
                </span>
            </div>

            {/* Code area */}
            <div className="px-4 py-3 font-mono text-[9.5px] leading-[1.7] min-h-[140px]">
                {snippet.lines.slice(0, visibleLines).map((line, li) => (
                    <div key={li} className="flex items-center">
                        {line.tokens.map((tok, ti) => (
                            <span key={ti} style={{ color: tok.c }}>{tok.t}</span>
                        ))}
                        {/* blinking cursor on last visible line */}
                        {li === visibleLines - 1 && (
                            <span className="inline-block w-1.5 h-3.5 ml-0.5 align-middle rounded-sm"
                                style={{ background: '#60a5fa', animation: 'blink 0.9s step-end infinite' }} />
                        )}
                    </div>
                ))}
                {visibleLines === 0 && (
                    <span className="inline-block w-1.5 h-3.5 align-middle rounded-sm"
                        style={{ background: '#60a5fa', animation: 'blink 0.9s step-end infinite' }} />
                )}
            </div>

            {/* Output bar */}
            <motion.div
                initial={false}
                animate={{ opacity: showOutput ? 1 : 0, y: showOutput ? 0 : 4 }}
                transition={{ duration: 0.3 }}
                className="px-4 py-2 flex items-center gap-2"
                style={{ background: '#064e3b' }}
            >
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="font-mono text-[9px] text-green-300">{snippet.output}</span>
            </motion.div>

            <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
        </motion.div>
    );
};

const featurePills = [
    {
        icon: GraduationCap,
        label: 'Expert Instructors',
        color: '#2563EB',
        bg: '#EFF6FF',
    },
    {
        icon: Award,
        label: 'Certified Courses',
        color: '#06B6D4',
        bg: '#ECFEFF',
    },
    {
        icon: Clock,
        label: 'Lifetime Access',
        color: '#14b8a6',
        bg: '#F0FDFA',
    },
];

const stats = [
    { icon: Users, value: '1,000+', label: 'Students' },
    { icon: BookOpen, value: '15+', label: 'Courses' },
    { icon: Trophy, value: '98%', label: 'Success Rate' },
];

const Hero = () => {
    const navigate = useNavigate();
    const location = useLocation();

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
        <section id="home" className="relative pt-20 pb-0 overflow-hidden">
            {/* Hero background */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(160deg, #EEF5FF 0%, #E4EFFF 50%, #F0F9FF 100%)' }} />
            <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />
            {/* Glow blob */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)' }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center min-h-[calc(100vh-64px)]">

                    {/* === LEFT === */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="py-16 text-center lg:text-left"
                    >
                        {/* Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <span className="badge-pill">
                                ✦ Welcome to InfoTechiezz
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <h1 className="section-heading mb-6 tracking-tight">
                            Elevate Your Career with{' '}
                            <span className="relative inline-block">
                                <span className="gradient-text relative z-10">Industry-Level</span>
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    className="absolute bottom-1.5 left-0 h-3 bg-blue-500/10 -z-0 rounded-full"
                                />
                            </span>{' '}
                            Courses
                        </h1>

                        <p className="text-gray-500 text-base md:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Master <span className="text-blue-600 font-bold">Java, C++, Python</span> and modern web development. Join 1,000+ learners building the future through live contests and expert-led sessions.
                        </p>

                        {/* Feature pills row */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
                        >
                            {featurePills.map((pill, i) => (
                                <motion.div
                                    key={pill.label}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="feature-pill"
                                >
                                    <div className="pill-icon shadow-sm" style={{ background: pill.bg }}>
                                        <pill.icon className="w-4 h-4" style={{ color: pill.color }} />
                                    </div>
                                    <span className="tracking-tight">{pill.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12"
                        >
                            <motion.button
                                onClick={() => scrollTo('#courses')}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary text-base px-8 py-4 group"
                            >
                                <GraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                Start Learning Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                onClick={() => scrollTo('/events')}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-outline text-base px-8 py-4 group"
                            >
                                <Play className="w-5 h-5 text-blue-600 fill-blue-600 group-hover:scale-110 transition-transform" />
                                Explore Events
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45 }}
                            className="flex items-center gap-8 justify-center lg:justify-start flex-wrap"
                        >
                            {stats.map((s, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: 'rgba(37,99,235,0.1)' }}>
                                        <s.icon className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold font-display text-gray-900 leading-none">{s.value}</div>
                                        <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex items-center gap-1.5">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                                </div>
                                <span className="text-sm font-semibold text-gray-700">4.9</span>
                                <span className="text-xs text-gray-400">reviews</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* === RIGHT: Code Universe Illustration === */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                        className="hidden lg:flex items-center justify-center relative py-12 w-full"
                    >
                        {/* ── UNIVERSE SVG ── */}
                        <div className="relative w-[480px] h-[480px]">

                            {/* Outer glow rings (CSS) */}
                            <div className="absolute inset-0 rounded-full pointer-events-none"
                                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }} />

                            {/* Orbit track ring 1 */}
                            <div className="absolute inset-8 rounded-full border border-dashed"
                                style={{ borderColor: 'rgba(37,99,235,0.15)' }} />
                            {/* Orbit track ring 2 */}
                            <div className="absolute inset-24 rounded-full border"
                                style={{ borderColor: 'rgba(6,182,212,0.2)' }} />

                            {/* ── ORBITING LANGUAGE ICONS ── */}
                            {[
                                { label: 'Java', emoji: '☕', color: '#f97316', bg: '#FFF7ED', angle: 0 },
                                { label: 'C', emoji: '⚙️', color: '#2563EB', bg: '#EFF6FF', angle: 60 },
                                { label: 'Python', emoji: '🐍', color: '#a855f7', bg: '#FAF5FF', angle: 120 },
                                { label: 'HTML', emoji: '📄', color: '#ef4444', bg: '#FFF1F2', angle: 180 },
                                { label: 'CSS', emoji: '🎨', color: '#06B6D4', bg: '#ECFEFF', angle: 240 },
                                { label: 'C++', emoji: '💡', color: '#14b8a6', bg: '#F0FDFA', angle: 300 },
                            ].map((lang, i) => {
                                const rad = (lang.angle * Math.PI) / 180;
                                const r = 196; // orbit radius px from center
                                const cx = 240 + r * Math.cos(rad);
                                const cy = 240 + r * Math.sin(rad);
                                return (
                                    <motion.div
                                        key={lang.label}
                                        animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                                        transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                                        className="absolute z-10 flex flex-col items-center gap-1"
                                        style={{ left: cx - 28, top: cy - 28, width: 56 }}
                                    >
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md border"
                                            style={{ background: lang.bg, borderColor: `${lang.color}25` }}>
                                            {lang.emoji}
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-500">{lang.label}</span>
                                    </motion.div>
                                );
                            })}

                            {/* ── CENTRE: Typewriter Code Editor ── */}
                            <div className="absolute"
                                style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 210 }}>
                                <TypewriterEditor />
                            </div>

                            {/* ── FLOATING SKILL ARC CARDS ── */}
                            {/* Top-right: Live Sessions */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-2 right-4 z-20"
                            >
                                <div className="bg-white rounded-2xl shadow-lg border border-blue-50 px-4 py-3 min-w-[160px]">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-[10px] text-green-500 font-bold">LIVE NOW</span>
                                    </div>
                                    <div className="text-xs font-bold text-gray-800">Java Masterclass</div>
                                    <div className="text-[10px] text-gray-400">248 watching</div>
                                </div>
                            </motion.div>

                            {/* Bottom-left: Skill level card */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute bottom-0 -left-6 z-20"
                            >
                                <div className="bg-white rounded-2xl shadow-lg border border-blue-50 px-4 py-3 min-w-[180px]">
                                    <div className="text-[10px] text-gray-400 mb-2 font-semibold uppercase tracking-wider">Skill Progress</div>
                                    {[
                                        { label: 'Problem Solving', pct: 88, color: '#2563EB' },
                                        { label: 'Data Structures', pct: 72, color: '#06B6D4' },
                                        { label: 'Algorithms', pct: 65, color: '#a855f7' },
                                    ].map((s) => (
                                        <div key={s.label} className="mb-2">
                                            <div className="flex justify-between mb-0.5">
                                                <span className="text-[9px] text-gray-500 font-medium">{s.label}</span>
                                                <span className="text-[9px] font-bold" style={{ color: s.color }}>{s.pct}%</span>
                                            </div>
                                            <div className="h-1 rounded-full bg-gray-100 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${s.pct}%` }}
                                                    transition={{ duration: 1.4, delay: 0.8 + Math.random() * 0.4, ease: 'easeOut' }}
                                                    className="h-full rounded-full"
                                                    style={{ background: s.color }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Bottom-right: Students card */}
                            <motion.div
                                animate={{ y: [0, -7, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                className="absolute bottom-4 right-0 z-20"
                            >
                                <div className="bg-white rounded-2xl shadow-lg border border-blue-50 px-4 py-3">
                                    <div className="flex items-center -space-x-2 mb-2">
                                        {['#2563EB', '#06B6D4', '#14b8a6', '#a855f7', '#f97316'].map((c) => (
                                            <div key={c} className="w-7 h-7 rounded-full border-2 border-white"
                                                style={{ background: c }} />
                                        ))}
                                    </div>
                                    <div className="text-xs font-bold text-gray-800">1k+ Learners</div>
                                    <div className="text-[10px] text-gray-400">Learning globally</div>
                                </div>
                            </motion.div>

                            {/* Top-left: Certificate badge */}
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                                className="absolute top-8 -left-4 z-20"
                            >
                                <div className="bg-white rounded-2xl shadow-lg border border-amber-100 px-4 py-3 min-w-[150px]">
                                    <div className="text-lg mb-1">🏆</div>
                                    <div className="text-xs font-bold text-gray-800">Certificate Earned!</div>
                                    <div className="flex items-center gap-1 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                                        ))}
                                        <span className="text-[9px] text-gray-400 ml-0.5">4.9</span>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Wave bottom */}
            <div className="relative z-10 -mb-1">
                <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
                    <path d="M0,60 C240,20 480,80 720,50 C960,20 1200,70 1440,40 L1440,80 L0,80 Z" fill="white" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
