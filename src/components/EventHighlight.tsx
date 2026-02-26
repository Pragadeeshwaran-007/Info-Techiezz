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
                        Code Clash
                    </h2>
                    <p className="text-white/50 text-sm">
                        Battle of Bits & Logic — hosted on Unstop
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 items-start">

                    {/* Poster — 3 cols */}
                    <div className="lg:col-span-3">
                        <a
                            href="https://unstop.com/p/codeclash-infotechiezz-1646268"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors"
                        >
                            <img
                                src="/unstop event.jpg.jpeg"
                                alt="Code Clash poster"
                                className="w-full h-auto block"
                            />
                        </a>
                    </div>

                    {/* Details — 2 cols */}
                    <div className="lg:col-span-2 space-y-5">

                        {/* Quick facts */}
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { icon: Calendar, label: 'Date', value: '07 Mar 2026' },
                                { icon: Clock, label: 'Time', value: '12:00 AM IST' },
                                { icon: Trophy, label: 'Prizes', value: 'Gifts + Certs' },
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
                                A dual-round coding contest testing your problem-solving across Data Structures & Algorithms.
                                Solve real-world challenges, compete with the brightest, and win surprise prizes.
                                Open to all skill levels.
                            </p>
                        </div>

                        {/* What you'll do */}
                        <div>
                            <h3 className="text-sm font-semibold text-white/80 mb-2">What to Expect</h3>
                            <ul className="space-y-1.5 text-xs text-white/40">
                                <li>• 2 assessment rounds (60–90 min each)</li>
                                <li>• DSA-focused problem sets</li>
                                <li>• Certificates for all participants</li>
                                <li>• Surprise gifts for top performers</li>
                            </ul>
                        </div>

                        {/* Deadline */}
                        <div className="text-xs text-red-400/80 font-medium">
                            Registration closes: 06 Mar 2026
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="https://unstop.com/p/codeclash-infotechiezz-1646268"
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
