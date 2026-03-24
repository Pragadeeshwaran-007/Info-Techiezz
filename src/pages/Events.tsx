import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, Clock, Trophy, Video, Users, ArrowRight,
    Code, Laptop, ArrowLeft, Sparkles, Timer, Zap, Star, X
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const contests: any[] = [
    {
        id: 'bytebattle2026',
        title: 'ByteBattle 2026 – The Ultimate Coding Showdown',
        description: 'The ultimate coding showdown featuring a DSA challenge qualifier and a high-stakes finale. Open to all engineering, PG, UG, and management students.',
        deadline: '27/03/2026',
        time: '60-90 Mins Rounds',
        Rounds: '2',
        participants: 'Individual Only',
        prize: 'Surprise Prize Pool',
        link: 'https://unstop.com/o/2sEwcd0?lb=Js8NDob1&utm_medium=Share&utm_source=infotinf68808&utm_campaign=Online_coding_challenge',
        icon: Code,
        color: '#7c3aed',
        bg: '#f5f3ff',
        grad: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
        badge: 'Hackathon / Contest',
    },
    {
        id: 'codeclash',
        title: 'CodeClash: The Ultimate Coding Battle',
        description: 'Prove your logic in a dual-phase assessment evaluating foundational and advanced Data Structures. Outperform the rest to win surprise gifts!',
        deadline: '06/03/2026',
        time: '60-90 Mins Rounds',
        Rounds: '2',
        participants: 'Individual Only',
        prize: 'Gifts + Certificates',
        link: 'https://unstop.com/p/codeclash-infotechiezz-1646268',
        icon: Trophy,
        color: '#f59e0b',
        bg: '#FFFBEB',
        grad: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
        badge: 'Unstop Assessment',
        isCompleted: true
    }
];

const winners = [
    {
        rank: 1,
        name: 'Gandhi Mathi',
        organization: 'Golaghat Engineering College (GEC), Assam',
        score: '100.000',
        prize: '₹ 5000 cash prize',
        color: '#064e3b',
        bg: '#ecfdf5',
        icon: Trophy
    },
    {
        rank: 2,
        name: 'Ananya A',
        organization: 'Government Model Engineering College (MEC), Kochi',
        score: '100.000',
        prize: '₹ 2500 cash prize',
        color: '#15803d',
        bg: '#f0fdf4',
        icon: Star
    },
    {
        rank: 3,
        name: 'Mohamed NAFEES',
        organization: 'National Engineering College, Kovilpatti',
        score: '70.000',
        prize: 'Winning certificate',
        color: '#1e3a8a',
        bg: '#eff6ff',
        icon: Zap
    }
];

const webinars: any[] = [];
const hackathons: any[] = [];
const workshops: any[] = [];

const tabs = [
    { id: 'contests', label: 'Contests', icon: Trophy, color: '#f59e0b', count: contests.length },
    { id: 'webinars', label: 'Webinars', icon: Video, color: '#2563EB', count: webinars.length },
    { id: 'hackathons', label: 'Hackathons', icon: Code, color: '#7c3aed', count: hackathons.length },
    { id: 'workshops', label: 'Workshops', icon: Laptop, color: '#0d9488', count: workshops.length },
] as const;

type TabId = 'contests' | 'webinars' | 'hackathons' | 'workshops';

/* ─────────────────────────────────────────────
   EVENT CARD
 ───────────────────────────────────────────── */
const EventCard = ({ event, index, onDetails }: { event: any; index: number; onDetails?: (e: any) => void }) => (
    <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        className="bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col group h-full"
        style={{ boxShadow: '0 4px 24px rgba(37,99,235,0.08)' }}
    >
        {/* Top colour strip */}
        <div className="relative h-3" style={{ background: event.grad }} />

        <div className="p-7 flex flex-col flex-1">
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
                <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner"
                    style={{ background: event.bg, border: `1px solid ${event.color}20` }}
                >
                    <event.icon className="w-7 h-7" style={{ color: event.color }} />
                </div>
                <div className="flex flex-col items-end gap-2">
                    <span
                        className="text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider"
                        style={{ background: event.bg, color: event.color, border: `1px solid ${event.color}25` }}
                    >
                        {event.badge}
                    </span>
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full border uppercase tracking-wider ${
                        event.isCompleted 
                        ? 'bg-gray-50 text-gray-500 border-gray-100' 
                        : 'bg-green-50 text-green-600 border-green-100'
                    }`}>
                        {event.isCompleted ? '⚪ Completed' : '🟢 On Going'}
                    </span>
                </div>
            </div>

            {/* Title + desc */}
            <div className="mb-6">
                <h3 className="text-xl font-black font-display text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {event.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">{event.description}</p>
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                    { icon: Calendar, label: 'Rounds', value: event.Rounds, color: '#2563EB' },
                    { icon: Clock, label: 'Time', value: event.time, color: '#0d9488' },
                    { icon: Timer, label: 'Deadline', value: event.deadline, color: '#7c3aed' },
                    { icon: Users, label: 'Participants', value: event.participants, color: '#2563EB' },
                ].map(({ icon: Icon, label, value, color }) => (
                    <div key={label} className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/50 border border-gray-100">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: `${color}10` }}>
                            <Icon className="w-4 h-4" style={{ color }} />
                        </div>
                        <div>
                            <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{label}</div>
                            <div className="text-[11px] font-bold text-gray-800">{value}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Prize area */}
            <div className="flex items-center gap-3 p-4 rounded-2xl mb-6 bg-amber-50/50 border border-amber-100">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                    <div className="text-[9px] font-black text-amber-500 uppercase tracking-widest">Main Reward</div>
                    <div className="text-sm font-black text-amber-700">{event.prize}</div>
                </div>
                <div className="flex ml-auto items-center opacity-40">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
                {event.isCompleted ? (
                    <button
                        onClick={() => onDetails?.(event)}
                        className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs text-amber-900 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 border border-amber-300 shadow-lg shadow-amber-200/50 hover:brightness-105 transition-all"
                    >
                        <Trophy className="w-3.5 h-3.5" />
                        View Winners
                    </button>
                ) : (
                    <button
                        onClick={() => onDetails?.(event)}
                        className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs text-blue-600 bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors"
                    >
                        View Details
                    </button>
                )}

                {event.id === 'bytebattle2026' ? (
                   <motion.button
                        onClick={() => window.open('https://unstop.com/o/2sEwcd0?lb=Js8NDob1&utm_medium=Share&utm_source=infotinf68808&utm_campaign=Online_coding_challenge', '_blank')}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-200"
                   >
                        Go to Battle
                   </motion.button>
                ) : (
                    event.isCompleted ? (
                        <div className="flex items-center justify-center py-3.5 px-4 rounded-xl font-bold text-xs text-gray-400 border border-gray-100 cursor-not-allowed">
                            Closed
                        </div>
                    ) : (
                        <motion.a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs text-white"
                            style={{ background: event.grad, boxShadow: `0 8px 24px ${event.color}35` }}
                        >
                            Register
                            <ArrowRight className="w-3.5 h-3.5" />
                        </motion.a>
                    )
                )}
            </div>
        </div>
    </motion.div>
);

/* ─────────────────────────────────────────────
   EMPTY STATE
───────────────────────────────────────────── */
const EmptyState = ({ tab }: { tab: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="col-span-full flex flex-col items-center py-24 text-center"
    >
        <div className="w-24 h-24 rounded-3xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
            <Sparkles className="w-10 h-10 text-blue-400 animate-pulse" />
        </div>
        <h3 className="text-2xl font-black font-display text-gray-900 mb-3">
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Coming Soon!
        </h3>
        <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-8">
            We're planning exciting new {tab} for you. Stay connected with our community for the latest updates.
        </p>
        <motion.a
            href="https://www.youtube.com/@infotechiezz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white"
            style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}
        >
            Follow for Updates <ArrowRight className="w-4 h-4" />
        </motion.a>
    </motion.div>
);

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const Events = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState<TabId>(
        (searchParams.get('tab') as TabId) || 'contests'
    );
    const [selectedEvent, setSelectedEvent] = useState<any>(null);

    useEffect(() => { window.scrollTo(0, 0); }, [activeTab]);

    useEffect(() => {
        if (selectedEvent?.isCompleted) {
            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 2000 };

            const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

            const interval: any = setInterval(function() {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
            }, 250);
        }
    }, [selectedEvent]);

    useEffect(() => {
        const tab = searchParams.get('tab') as TabId;
        if (tab && ['contests', 'webinars', 'hackathons', 'workshops'].includes(tab)) {
            setActiveTab(tab);
        }
    }, [searchParams]);

    const handleTabChange = (tab: TabId) => {
        setActiveTab(tab);
        setSearchParams({ tab });
    };

    const getEvents = () => {
        switch (activeTab) {
            case 'contests': return contests;
            case 'webinars': return webinars;
            case 'hackathons': return hackathons;
            case 'workshops': return workshops;
        }
    };

    const activeTabData = tabs.find(t => t.id === activeTab)!;

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* ── HERO BANNER ── */}
            <div className="relative overflow-hidden pt-24 pb-12"
                style={{ background: 'linear-gradient(135deg, #001A33 0%, #002B5B 45%, #004080 100%)' }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }} />
                <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,229,255,0.15) 0%, transparent 70%)',
                }} />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-xs font-bold border border-white/10 backdrop-blur-md group"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black mb-6 text-cyan-400 uppercase tracking-widest"
                            style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.2)' }}>
                            <Zap className="w-3 h-3" />
                            Official Events Portal
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-display text-white mb-6 leading-tight tracking-tight">
                            Explore Our{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
                                Events
                            </span>
                        </h1>
                        <p className="text-blue-100/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                            Level up your skills with high-stakes coding contests, industry webinars, and hands-on workshops.
                        </p>
                    </motion.div>

                    {/* Tab bar inside hero */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center mt-12 mb-8"
                    >
                        <div className="flex flex-wrap justify-center gap-2 p-2 rounded-3xl"
                            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)' }}>
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => handleTabChange(tab.id as TabId)}
                                        className="flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all active:scale-95"
                                        style={{
                                            background: activeTab === tab.id ? 'white' : 'transparent',
                                            color: activeTab === tab.id ? tab.color : 'rgba(255,255,255,0.5)',
                                            boxShadow: activeTab === tab.id ? '0 10px 20px rgba(0,0,0,0.1)' : 'none',
                                        }}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {tab.label}
                                        {tab.count > 0 && (
                                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full ml-1"
                                                style={{
                                                    background: activeTab === tab.id ? `${tab.color}15` : 'rgba(255,255,255,0.1)',
                                                    color: activeTab === tab.id ? tab.color : 'white',
                                                }}>
                                                {tab.count}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Decorative wave at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-white"
                    style={{ borderRadius: '100% 100% 0 0 / 100% 100% 0 0', transform: 'scaleX(1.1)' }} />
            </div>

            {/* ── EVENTS CONTENT ── */}
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Section label */}
                <motion.div
                    key={activeTab + '-label'}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 mb-10"
                >
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner"
                        style={{ background: `${activeTabData.color}10`, border: `1px solid ${activeTabData.color}20` }}>
                        <activeTabData.icon className="w-6 h-6" style={{ color: activeTabData.color }} />
                    </div>
                    <div>
                        <div className="text-xl font-black font-display text-gray-900 tracking-tight">{activeTabData.label}</div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{getEvents().length} Available Unit{getEvents().length !== 1 ? 's' : ''}</div>
                    </div>
                </motion.div>

                {/* Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {getEvents().length > 0
                            ? getEvents().map((event, index) => (
                                <EventCard key={event.id} event={event} index={index} onDetails={setSelectedEvent} />
                            ))
                            : <EmptyState tab={activeTab} />
                        }
                    </motion.div>
                </AnimatePresence>

                {/* ── DETAILS MODAL ── */}
                <AnimatePresence>
                    {selectedEvent && (
                        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedEvent(null)}
                                className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-[2.5rem] shadow-2xl flex flex-col"
                            >
                                <div className="h-2" style={{ background: selectedEvent.grad }} />
                                
                                <div className="p-6 md:p-10 flex items-center justify-between border-b border-gray-100">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-black font-display text-gray-900 leading-tight">
                                            {selectedEvent.title}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="text-[10px] font-black px-3 py-1 bg-blue-50 text-blue-600 rounded-full uppercase tracking-widest border border-blue-100">
                                                {selectedEvent.id === 'bytebattle2026' ? 'Upcoming' : 'Past Event Results'}
                                            </span>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedEvent(null)}
                                        className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-50 text-gray-400 hover:text-gray-900 transition-colors flex-shrink-0"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-12">
                                    {selectedEvent.id === 'bytebattle2026' ? (
                                        <>
                                            <div>
                                                <h4 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                    <Sparkles className="w-4 h-4" /> About the Contest
                                                </h4>
                                                <p className="text-base text-gray-500 leading-relaxed font-medium">
                                                    ByteBattle 2026 is an ultimate coding showdown designed to test your algorithmic prowess. 
                                                    From arrays to dynamic programming, demonstrate your efficiency under pressure.
                                                </p>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div className="p-6 rounded-[2rem] bg-gray-50 border border-gray-100">
                                                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Round 1: Qualifier</div>
                                                    <div className="text-sm font-bold text-gray-900 mb-2 leading-tight">Topics: Arrays, Strings, LL, Stack, Queue, Recursion, Trees</div>
                                                    <div className="text-xs text-blue-600 font-black uppercase tracking-tighter">2 Qs | 60 Mins | Easy-Medium</div>
                                                </div>
                                                <div className="p-6 rounded-[2rem] bg-gray-50 border border-gray-100">
                                                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Round 2: Finale</div>
                                                    <div className="text-sm font-bold text-gray-900 mb-2 leading-tight">Topics: Graphs, Greedy, DP, Algorithms, Problem Solving</div>
                                                    <div className="text-xs text-purple-600 font-black uppercase tracking-tighter">2-3 Challenges | 90 Mins | Med-Hard</div>
                                                </div>
                                            </div>

                                            <div className="p-8 rounded-[2.5rem] bg-amber-50 border border-amber-100">
                                                <h4 className="text-xs font-black text-amber-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                                                    <Trophy className="w-4 h-4" /> Rewards & Recognition
                                                </h4>
                                                <div className="grid gap-4">
                                                    {[
                                                        { rank: '1st Place', prize: 'Surprise Prize + Winner Certificate', color: 'text-amber-700' },
                                                        { rank: '2nd Place', prize: 'Surprise Prize + Winner Certificate', color: 'text-amber-700' },
                                                        { rank: '3rd Place', prize: 'Certificate of Excellence', color: 'text-amber-700' },
                                                    ].map((p, i) => (
                                                        <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-amber-200/50 shadow-sm">
                                                            <span className="text-xs font-black text-amber-500 uppercase tracking-widest">{p.rank}</span>
                                                            <span className={`text-sm font-bold ${p.color}`}>{p.prize}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : selectedEvent.isCompleted ? (
                                        <>
                                            <div className="text-center mb-10">
                                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black mb-4 text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 uppercase tracking-widest font-display">
                                                    <Trophy className="w-3 h-3" />
                                                    Event Results
                                                </span>
                                                <h4 className="text-3xl font-black font-display text-gray-900">Wall of Fame</h4>
                                            </div>

                                            <div className="grid gap-6">
                                                {winners.map((winner, idx) => (
                                                    <motion.div
                                                        key={winner.name}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="relative p-6 md:p-8 rounded-[2rem] border border-gray-100 bg-white group hover:border-emerald-200 transition-colors flex flex-col md:flex-row md:items-center gap-6"
                                                        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
                                                    >
                                                        <div className={`w-16 h-16 rounded-3xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}
                                                            style={{ background: winner.bg, border: `1px solid ${winner.color}20` }}>
                                                            <winner.icon className="w-8 h-8" style={{ color: winner.color }} />
                                                        </div>
                                                        
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-1">
                                                                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Rank {winner.rank}</span>
                                                                <span className="w-1 h-1 rounded-full bg-gray-200" />
                                                                <span className="text-xs font-bold text-gray-400">{winner.organization}</span>
                                                            </div>
                                                            <h5 className="text-xl font-black font-display text-gray-900">{winner.name}</h5>
                                                        </div>

                                                        <div className="flex flex-col md:items-end gap-2">
                                                            <div className="px-5 py-3 rounded-2xl bg-amber-50 border border-amber-100 transition-all group-hover:bg-amber-100/50">
                                                                <div className="text-[9px] font-black text-amber-500 uppercase tracking-widest mb-0.5">Prize Awarded</div>
                                                                <div className="text-sm font-black text-amber-700">{winner.prize}</div>
                                                            </div>
                                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-2">Score: <span className="text-emerald-600 font-black">{winner.score}</span></div>
                                                        </div>

                                                        <div className="absolute top-4 right-8 md:top-auto md:bottom-4 md:right-8 text-5xl font-black text-gray-100 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                                                            #{winner.rank}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <div className="py-24 text-center">
                                            <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mx-auto mb-6">
                                                <Sparkles className="w-8 h-8 text-gray-300" />
                                            </div>
                                            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">More details coming soon</p>
                                        </div>
                                    )}
                                </div>

                                <div className="p-8 md:p-10 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                                    <div className="flex-1 text-center sm:text-left">
                                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Official Host</p>
                                        <p className="text-sm font-bold text-gray-900 leading-tight">InfoTechiezz x Unstop</p>
                                    </div>
                                    <div className="flex items-center gap-3 w-full sm:w-auto">
                                        <button 
                                            onClick={() => window.open(selectedEvent.link, '_blank')}
                                            disabled={selectedEvent.isCompleted}
                                            className="flex-1 sm:flex-none px-10 py-4 rounded-2xl font-black text-sm text-white shadow-lg transition-all active:scale-[0.98] disabled:bg-gray-200 disabled:shadow-none disabled:text-gray-400 disabled:cursor-not-allowed"
                                            style={{ background: selectedEvent.isCompleted ? '#f3f4f6' : selectedEvent.grad, boxShadow: selectedEvent.isCompleted ? 'none' : `0 12px 32px ${selectedEvent.color}35` }}
                                        >
                                            {selectedEvent.isCompleted ? 'Registration Closed' : 'Register Now'}
                                        </button>
                                        <button 
                                            onClick={() => setSelectedEvent(null)}
                                            className="px-6 py-4 rounded-2xl font-black text-sm text-gray-500 bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>


                {/* ── SOCIAL CONNECT ── */}
                <section className="mt-32 pt-24 border-t border-gray-100">
                    <div className="bg-gray-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center">
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                            backgroundSize: '24px 24px'
                        }} />
                        
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-6">Stay Connected</h2>
                            <p className="text-white/40 text-sm max-w-lg mx-auto mb-12">
                                Join our community for real-time updates, preparation tips, and hidden hints 
                                to ace upcoming challenges.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    { label: 'WhatsApp', icon: Zap, link: 'https://chat.whatsapp.com/IIyTBEha0b10lQTlrm8iOg', color: '#22c55e' },
                                    { label: 'Instagram', icon: Star, link: 'https://www.instagram.com/infotechiezz/', color: '#ec4899' },
                                    { label: 'LinkedIn', icon: Users, link: 'https://www.linkedin.com/company/info-techiezz/posts/?feedView=all', color: '#0077b5' },
                                    { label: 'YouTube', icon: Video, link: 'https://www.youtube.com/@infotechiezz', color: '#ef4444' }
                                ].map((social) => (
                                    <a 
                                        key={social.label}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                                    >
                                        <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" style={{ color: social.color }} />
                                        <span className="text-white font-bold text-sm">{social.label}</span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Events;
