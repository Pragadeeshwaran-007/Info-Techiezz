import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, Clock, Trophy, Video, Users, ArrowRight,
    Code, Laptop, ArrowLeft, Sparkles, Timer, Zap, Star,
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const contests: any[] = [
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
const EventCard = ({ event, index }: { event: typeof contests[0]; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        className="bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col"
        style={{ boxShadow: '0 4px 24px rgba(37,99,235,0.08)' }}
    >
        {/* Top colour strip */}
        <div className="relative h-3" style={{ background: event.grad }} />

        <div className="p-7 flex flex-col flex-1">
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
                <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: event.bg, border: `1px solid ${event.color}25` }}
                >
                    <event.icon className="w-7 h-7" style={{ color: event.color }} />
                </div>
                <div className="flex flex-col items-end gap-2">
                    <span
                        className="text-[10px] font-bold px-3 py-1 rounded-full"
                        style={{ background: event.bg, color: event.color, border: `1px solid ${event.color}25` }}
                    >
                        {event.badge}
                    </span>
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-green-50 text-green-600 border border-green-100">
                        🟢 ON GOING
                    </span>
                </div>
            </div>

            {/* Title + desc */}
            <h3 className="text-xl font-black font-display text-gray-900 mb-3 leading-tight">{event.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">{event.description}</p>

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                    { icon: Calendar, label: 'Rounds', value: event.Rounds, color: '#2563EB' },
                    { icon: Clock, label: 'Time', value: event.time, color: '#0d9488' },
                    { icon: Timer, label: 'Deadline', value: event.deadline, color: '#7c3aed' },
                    { icon: Users, label: 'Participants', value: event.participants, color: '#2563EB' },
                ].map(({ icon: Icon, label, value, color }) => (
                    <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: `${color}10` }}>
                            <Icon className="w-4 h-4" style={{ color }} />
                        </div>
                        <div>
                            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">{label}</div>
                            <div className="text-xs font-bold text-gray-800">{value}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Prize */}
            <div className="flex items-center gap-3 p-4 rounded-2xl mb-6"
                style={{ background: '#FFFBEB', border: '1px solid #fde68a' }}>
                <Trophy className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div>
                    <div className="text-[9px] font-bold text-amber-500 uppercase tracking-wide">Total Prize Pool</div>
                    <div className="text-base font-black text-amber-600">{event.prize}</div>
                </div>
                <div className="flex ml-auto">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
                </div>
            </div>

            {/* CTA */}
            <motion.a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white mt-auto"
                style={{ background: event.grad, boxShadow: `0 8px 24px ${event.color}35` }}
            >
                Register Now
                <ArrowRight className="w-4 h-4" />
            </motion.a>
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

    useEffect(() => { window.scrollTo(0, 0); }, [activeTab]);

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
                                <EventCard key={event.id} event={event} index={index} />
                            ))
                            : <EmptyState tab={activeTab} />
                        }
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
};

export default Events;
