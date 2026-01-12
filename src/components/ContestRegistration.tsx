import { motion } from 'framer-motion';
import { Calendar, Trophy, Timer, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContestRegistration = () => {
    const contestDetails = {
        name: "Stranger Code - The DSA Coding Challenge",
        deadline: "January 30, 2026",
        date: "January 30, 2026",
        prizes: "₹1 Lakh Worth",
    };

    return (
        <div className="relative z-20 pt-24 md:pt-28 pb-6">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden glass-card p-0 bg-gradient-to-r from-secondary/10 via-background to-primary/10 border border-white/10"
                >
                    {/* Event Banner Image */}
                    <div className="relative h-48 md:h-64 w-full overflow-hidden">
                        <img
                            src="/assets/stranger-code-banner.png"
                            alt="Stranger Code Banner"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    </div>

                    <div className="p-4 md:p-8 relative z-10">
                        {/* Subtle Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-full bg-secondary/5 blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-full bg-primary/5 blur-[100px] pointer-events-none" />

                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
                            {/* Contest Info */}
                            <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10">
                                <div className="flex flex-col">
                                    <span className="text-secondary text-xs font-bold tracking-widest uppercase mb-1">Upcoming Event</span>
                                    <h3 className="text-xl md:text-2xl font-bold font-display text-foreground leading-tight">
                                        {contestDetails.name}
                                    </h3>
                                </div>

                                <div className="h-px w-full md:h-10 md:w-px bg-border/50 hidden md:block" />

                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8">
                                    <div className="flex items-center gap-2 group">
                                        <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                                            <Timer className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-muted-foreground uppercase font-semibold">Deadline</span>
                                            <span className="text-sm font-medium">{contestDetails.deadline}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 group">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                            <Calendar className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-muted-foreground uppercase font-semibold">Event Date</span>
                                            <span className="text-sm font-medium">{contestDetails.date}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 group">
                                        <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform">
                                            <Trophy className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-muted-foreground uppercase font-semibold">Prizes</span>
                                            <span className="text-sm font-bold text-orange-500">{contestDetails.prizes}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="shrink-0">
                                <Button
                                    asChild
                                    variant="hero"
                                    size="lg"
                                    className="group px-8 py-6 rounded-xl hover:scale-105 transition-all duration-300"
                                >
                                    <a
                                        href="https://unstop.com/o/zcERBXs?lb=Js8NDob1&utm_medium=Share&utm_source=infotinf68808&utm_campaign=Online_coding_challenge"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center"
                                    >
                                        Register Now
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContestRegistration;
