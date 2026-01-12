import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Trophy, Video, Users, ArrowRight, Code, Laptop, ArrowLeft, Sparkles, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const contests = [
    {
        id: 1,
        title: 'Stranger Code - The DSA Coding Challenge',
        description: 'Test your coding skills in an intense DSA challenge. Level up your problem-solving skills and win exciting rewards.',
        date: 'Jan 30, 2026',
        deadline: 'Jan 30, 2026',
        time: '9:00 AM',
        participants: '500+',
        prize: '₹1 Lakh Worth',
        icon: Trophy,
        link: 'https://unstop.com/o/zcERBXs?lb=Js8NDob1&utm_medium=Share&utm_source=infotinf68808&utm_campaign=Online_coding_challenge',
    },
];

const webinars: any[] = [];

const hackathons: any[] = [];

const workshops: any[] = [];

const Events = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState<'contests' | 'webinars' | 'hackathons' | 'workshops'>(
        (searchParams.get('tab') as any) || 'contests'
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeTab]);

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab && (tab === 'contests' || tab === 'webinars' || tab === 'hackathons' || tab === 'workshops')) {
            setActiveTab(tab as any);
        }
    }, [searchParams]);

    const handleTabChange = (tab: 'contests' | 'webinars' | 'hackathons' | 'workshops') => {
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

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors mb-6 group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">
                            Explore Our <span className="gradient-text">Events</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Level up your skills with our curated list of coding contests, webinars, hackathons, and workshops.
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12">
                        <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-xl">
                            {[
                                { id: 'contests', label: 'Contests', icon: Trophy },
                                { id: 'webinars', label: 'Webinars', icon: Video },
                                { id: 'hackathons', label: 'Hackathons', icon: Code },
                                { id: 'workshops', label: 'Workshops', icon: Laptop },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabChange(tab.id as any)}
                                    className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${activeTab === tab.id
                                        ? 'bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                                        }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Events Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
                        >
                            {getEvents().length > 0 ? (
                                getEvents().map((event, index) => (
                                    <motion.div
                                        key={event.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                        className="glass-card group flex flex-col p-8 border border-border/50 hover:border-secondary/30 transition-all"
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <event.icon className="w-7 h-7 text-secondary" />
                                            </div>
                                            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20">
                                                UPCOMING
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-secondary transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                            {event.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                                                    <Calendar className="w-4 h-4 text-secondary" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] uppercase font-bold text-muted-foreground leading-none mb-1">Date</span>
                                                    <span className="text-sm font-medium">{event.date}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                                                    <Clock className="w-4 h-4 text-secondary" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] uppercase font-bold text-muted-foreground leading-none mb-1">Time</span>
                                                    <span className="text-sm font-medium">{event.time}</span>
                                                </div>
                                            </div>

                                            {'deadline' in event && (
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                                                        <Timer className="w-4 h-4 text-secondary" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-bold text-secondary/70 leading-none mb-1">Deadline</span>
                                                        <span className="text-sm font-medium">{event.deadline}</span>
                                                    </div>
                                                </div>
                                            )}

                                            {'participants' in event && (
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                                                        <Users className="w-4 h-4 text-secondary" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-bold text-muted-foreground leading-none mb-1">Participants</span>
                                                        <span className="text-sm font-medium">{event.participants}</span>
                                                    </div>
                                                </div>
                                            )}

                                            {'prize' in event && (
                                                <div className="flex items-center gap-3 col-span-2">
                                                    <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
                                                        <Trophy className="w-4 h-4 text-yellow-500" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-bold text-yellow-500/70 leading-none mb-1">Prizes</span>
                                                        <span className="text-sm font-bold text-yellow-500">{event.prize}</span>
                                                    </div>
                                                </div>
                                            )}

                                            {'speaker' in event && (
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                                                        <Users className="w-4 h-4 text-secondary" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-bold text-muted-foreground leading-none mb-1">Speaker</span>
                                                        <span className="text-sm font-medium">{event.speaker}</span>
                                                    </div>
                                                </div>
                                            )}

                                            {'instructor' in event && (
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                                                        <Users className="w-4 h-4 text-secondary" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-bold text-muted-foreground leading-none mb-1">Instructor</span>
                                                        <span className="text-sm font-medium">{event.instructor}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <Button
                                            asChild
                                            className="w-full mt-auto glow-button group-hover:bg-secondary group-hover:text-white transition-all py-6 rounded-xl relative z-10"
                                        >
                                            <a
                                                href={(event.link as string) || '#'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 text-base font-semibold"
                                            >
                                                Register Now
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </Button>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center">
                                    <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                                        <Sparkles className="w-10 h-10 text-secondary animate-pulse" />
                                    </div>
                                    <h3 className="text-3xl font-bold font-display mb-4">Coming Soon</h3>
                                    <p className="text-muted-foreground text-lg max-w-md mx-auto">
                                        We are currently planning exciting new events for you. Stay tuned for updates!
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Events;
