import { Link } from 'react-router-dom';
import {
    Calendar, Clock, Trophy, Users, ArrowRight, Zap,
} from 'lucide-react';

const EventHighlight = () => {
    return (
        <section className="relative py-14 md:py-20" style={{ background: '#0B1120' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 mb-4">
                        <Zap className="w-3 h-3" /> Upcoming Event
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                        ByteBattle 2026
                    </h2>
                    <p className="text-white/50 text-sm">
                        The Ultimate Coding Showdown — hosted by InfoTechiezz
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 items-start">

                    {/* Poster — 3 cols */}
                    <div className="lg:col-span-3">
                        <a
                            href="https://unstop.com/hackathons/bytebattle-2026-the-ultimate-coding-showdown-infotechiezz-1659839"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors"
                        >
                            <img
                                src="/bytebattelposter.jpeg"
                                alt="ByteBattle 2026 poster"
                                className="w-full h-auto block"
                            />
                        </a>
                    </div>

                    {/* Details — 2 cols */}
                    <div className="lg:col-span-2 space-y-5">

                        {/* Quick facts */}
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { icon: Calendar, label: 'Date', value: '27 Mar 2026' },
                                { icon: Clock, label: 'Time', value: '12:00 AM IST' },
                                { icon: Trophy, label: 'Prizes', value: 'Surprise Prize Pool' },
                                { icon: Users, label: 'Type', value: 'Individual' },
                            ].map(({ icon: Icon, label, value }) => (
                                <div key={label} className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Icon className="w-3.5 h-3.5 text-white/30" />
                                        <span className="text-[10px] font-medium text-white/30 uppercase tracking-wider">{label}</span>
                                    </div>
                                    <div className="text-sm font-semibold text-white/90">{value}</div>
                                </div>
                            ))}
                        </div>

                        {/* About */}
                        <div>
                            <h3 className="text-sm font-semibold text-white/80 mb-2">About the Event</h3>
                            <p className="text-xs text-white/40 leading-relaxed">
                                ByteBattle 2026 is an ultimate coding showdown designed to test your algorithmic prowess. 
                                From arrays to dynamic programming, demonstrate your efficiency under pressure.
                            </p>
                        </div>

                        {/* What you'll do */}
                        <div>
                            <h3 className="text-sm font-semibold text-white/80 mb-2">Structure</h3>
                            <ul className="space-y-1.5 text-xs text-white/40">
                                <li>• Round 1: Qualifier (Arrays, Strings, LL, Stack, Queue, Recursion, Trees)</li>
                                <li>• Round 2: Finale (Graphs, Greedy, DP, Algorithms, Problem Solving)</li>
                                <li>• 1st & 2nd Place: Surprise Prize + Winner Certificate</li>
                                <li>• 3rd Place: Certificate of Excellence</li>
                            </ul>
                        </div>

                        {/* Deadline */}
                        <div className="text-xs text-amber-400 font-medium">
                            Starts: 27 Mar 2026, 12:00 AM IST
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="https://unstop.com/hackathons/bytebattle-2026-the-ultimate-coding-showdown-infotechiezz-1659839"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold transition-colors"
                            >
                                Register on Unstop
                                <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                            <Link
                                to="/events"
                                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white/50 hover:text-white/80 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
                            >
                                All Events
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventHighlight;

