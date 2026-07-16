import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Terminal, Cpu, Coffee, Code, Binary, Box, Server, Layers, 
    ChevronRight, BookOpen, Target, Sparkles, Map, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { roadmapsData, RoadmapData } from '@/data/roadmaps';
import { cn } from '@/lib/utils';

const iconMap: Record<string, any> = {
    Terminal, Cpu, Coffee, Code, Binary, Box, Server, Layers
};

const Roadmaps = () => {
    const [activeRoadmap, setActiveRoadmap] = useState<RoadmapData>(roadmapsData[0]);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const IconComponent = iconMap[activeRoadmap.iconName] || BookOpen;

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            {/* ── HERO BANNER (Matches Events.tsx exactly) ── */}
            <div className="relative overflow-hidden pt-24 pb-12"
                style={{ background: 'linear-gradient(135deg, #001A33 0%, #002B5B 45%, #004080 100%)' }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }} />
                <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,229,255,0.15) 0%, transparent 70%)',
                }} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black mb-6 text-cyan-400 uppercase tracking-widest"
                            style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.2)' }}>
                            <Map className="w-3 h-3" />
                            Official Learning Paths
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-display text-white mb-6 leading-tight tracking-tight">
                            Explore Our{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
                                Roadmaps
                            </span>
                        </h1>
                        <p className="text-blue-100/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                            Step-by-step curriculum to take you from a curious beginner to an industry-ready professional.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative wave at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#fafafa]"
                    style={{ borderRadius: '100% 100% 0 0 / 100% 100% 0 0', transform: 'scaleX(1.1)' }} />
            </div>

            {/* ── MAIN CONTENT ── */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    
                    {/* ── SIDEBAR NAVIGATION ── */}
                    <div className="w-full lg:w-72 lg:sticky lg:top-32 flex-shrink-0">
                        <div className="bg-white rounded-[2rem] p-4 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 px-4 pt-2">
                                Select Technology
                            </h3>
                            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 hide-scrollbar">
                                {roadmapsData.map((rm) => {
                                    const RIcon = iconMap[rm.iconName] || BookOpen;
                                    const isActive = activeRoadmap.id === rm.id;
                                    return (
                                        <button
                                            key={rm.id}
                                            onClick={() => setActiveRoadmap(rm)}
                                            className={cn(
                                                "group flex items-center gap-3 md:gap-4 px-2.5 py-2.5 rounded-2xl font-bold text-sm transition-all whitespace-nowrap lg:whitespace-normal text-left",
                                                isActive 
                                                    ? "bg-white text-gray-900 border-[1.5px] border-gray-900 shadow-sm" 
                                                    : "bg-transparent text-gray-500 border-[1.5px] border-transparent hover:bg-gray-50 hover:text-gray-900"
                                            )}
                                        >
                                            <div className={cn(
                                                "w-10 h-10 md:w-11 md:h-11 rounded-[14px] flex items-center justify-center transition-all duration-300 flex-shrink-0",
                                                isActive ? "text-white shadow-md" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200/60 group-hover:text-slate-600"
                                            )}
                                            style={{ background: isActive ? rm.grad : undefined }}
                                            >
                                                <RIcon className="w-[22px] h-[22px]" strokeWidth={isActive ? 2.5 : 2} />
                                            </div>
                                            <span className="pr-4">{rm.shortTitle}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* ── PATH CONTENT ── */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeRoadmap.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex-1 w-full"
                        >
                            {/* Roadmap Header Summary Card */}
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-10 relative overflow-hidden">
                                {/* Top colour strip */}
                                <div className="absolute top-0 left-0 w-full h-2" style={{ background: activeRoadmap.grad }} />
                                
                                <div className="flex flex-col md:flex-row md:items-center gap-6">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0" style={{ background: activeRoadmap.grad }}>
                                        <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
                                    </div>
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 border"
                                            style={{ background: activeRoadmap.bg, color: activeRoadmap.color, borderColor: `${activeRoadmap.color}30` }}>
                                            <Sparkles className="w-3 h-3" />
                                            Learning Curriculum
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-black font-display text-gray-900 mb-3 tracking-tight">
                                            {activeRoadmap.title}
                                        </h2>
                                        <p className="text-gray-500 font-medium leading-relaxed max-w-2xl text-sm md:text-base">
                                            {activeRoadmap.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Prerequisites */}
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Prerequisites</h4>
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {activeRoadmap.prerequisites.map((pre, idx) => (
                                            <span key={idx} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-50 text-gray-600 text-xs font-bold border border-gray-100">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-gray-400" />
                                                {pre}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Levels */}
                            <div className="relative">
                                {/* Timeline vertical line */}
                                <div className="absolute top-8 bottom-8 left-4 md:left-6 w-0.5 bg-gray-200/60 rounded-full" />

                                <div className="space-y-8">
                                    {activeRoadmap.levels.map((level, index) => (
                                        <motion.div 
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            className="relative pl-12 md:pl-16 group"
                                        >
                                            {/* Node Marker */}
                                            <div 
                                                className="absolute left-1.5 md:left-3.5 top-6 w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs ring-4 ring-[#fafafa] transition-transform duration-300 group-hover:scale-125"
                                                style={{ background: activeRoadmap.grad, color: 'white', boxShadow: `0 4px 10px ${activeRoadmap.color}40` }}
                                            >
                                                {/* Outer pulse ring for aesthetics */}
                                                <div className="absolute inset-0 rounded-full opacity-0 group-hover:animate-ping" style={{ background: activeRoadmap.color }} />
                                            </div>

                                            {/* Card Content matches event cards */}
                                            <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] transition-all duration-300">
                                                
                                                <div className="flex items-center justify-between mb-5">
                                                    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-gray-50 text-gray-500 border border-gray-100">
                                                        Level {index + 1}
                                                    </div>
                                                </div>

                                                <h3 className="text-xl md:text-2xl font-black font-display text-gray-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                                                    {level.title}
                                                </h3>

                                                {/* Topic Chips */}
                                                <div className="flex flex-wrap gap-3 mb-8">
                                                    {level.topics.map((topic, tidx) => (
                                                        <span key={tidx} className="px-4 py-2 rounded-xl bg-slate-50/80 border border-slate-200/80 text-[13px] md:text-sm font-semibold text-slate-700">
                                                            {topic}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* End Point / Milestone matches "Prize area" from Events */}
                                                <div className="flex items-center gap-4 p-4 rounded-2xl border"
                                                     style={{ backgroundColor: activeRoadmap.bg, borderColor: `${activeRoadmap.color}20` }}>
                                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white shadow-sm" style={{ color: activeRoadmap.color }}>
                                                        <Target className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <div className="text-[9px] font-black uppercase tracking-widest mb-0.5" style={{ color: activeRoadmap.color }}>
                                                            Milestone Expected
                                                        </div>
                                                        <div className="text-sm font-black text-gray-900 leading-snug">
                                                            {level.endPoint}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
            
            <Footer />

            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default Roadmaps;
