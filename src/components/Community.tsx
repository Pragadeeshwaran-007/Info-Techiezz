import { motion } from 'framer-motion';
import { Star, Quote, Heart, MessageCircle, ArrowRight } from 'lucide-react';

const testimonials = [
    {
        name: "Arun E",
        role: "Fullstack Developer",
        content: "The C and Java courses here are a goldmine! I went from having pointer confusion to cracking a TCS interview with a high package. Highly recommend InfoTechiezz!",
        rating: 5,
        color: "#2563EB"
    },
    {
        name: "Lithika",
        role: "MERN Stack Developer",
        content: "Their free C programming resources and the placement series helped me build a strong foundation. I landed my first job as a developer thanks to their guidance!",
        rating: 5,
        color: "#06B6D4"
    },
    {
        name: "Ari Prakesh",
        role: "Cloud Engineer",
        content: "If you want to learn web development from scratch, this is the place. The hands-on project approach is what makes it different from other platforms.",
        rating: 5,
        color: "#14b8a6"
    },
    {
        name: "Deepa",
        role: "Network Engineer",
        content: "Simple and crisp programming tutorials. The community support on Discord is 24/7. My doubts were cleared within minutes!",
        rating: 5,
        color: "#f59e0b"
    },
    {
        name: "Bala Murgan",
        role: "Backend Engineer",
        content: "I started with zero coding knowledge. Now, I am proficient in Python and Java. The structured roadmap is a life-saver for beginners.",
        rating: 5,
        color: "#7c3aed"
    },
    {
        name: "Boomika",
        role: "Python Developer",
        content: "The TCS NQT Placement Series is a must-watch. It covered exactly what was asked in the interview. I am now working at my dream company!",
        rating: 5,
        color: "#ec4899"
    },
    {
        name: "Venkatesh",
        role: "Prompt Engineer",
        content: "Learned advanced concepts in a very simplified way. The focus on logic building rather than just syntax is what I loved the most.",
        rating: 5,
        color: "#10b981"
    },
    {
        name: "Pragadeeshwaran",
        role: "Java Developer",
        content: "Built portfolio-worthy projects during the course. The certification holds weight in interviews. The instructors are genuinely helpful.",
        rating: 5,
        color: "#3b82f6"
    },
    {
        name: "Arivazhagan",
        role: "Cloud Architect Specialist",
        content: "A goldmine for anyone looking to transition into tech. The curriculum is always updated with the latest trends. 10/10 platform!",
        rating: 5,
        color: "#6366f1"
    }
];

const Community = () => {
    return (
        <section id="community" className="py-24 bg-gray-50/50 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -right-16 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-16 w-64 h-64 bg-cyan-100/30 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 text-blue-600 bg-blue-50 border border-blue-100">
                        <Heart className="w-3.5 h-3.5 fill-blue-600" />
                        Wall of Love
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-4">
                        What Our <span className="gradient-text">Community</span> Says
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base mb-8">
                        Real stories from students who transformed their careers with InfoTechiezz.
                        Join 1,000+ learners building the future.
                    </p>

                    <motion.a
                        href="https://whatsapp.com/channel/0029Vb7QJZG8fewpER7N8U0V"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white shadow-lg transition-all"
                        style={{ background: '#25D366', boxShadow: '0 8px 16px -4px rgba(37, 211, 102, 0.4)' }}
                    >
                        <MessageCircle className="w-4 h-4" />
                        Join WhatsApp Channel
                        <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </motion.div>
            </div>

            {/* Scrolling Marquees */}
            <div className="flex flex-col gap-8">
                {/* Row 1: Forward */}
                <div className="flex overflow-hidden group">
                    <div className="flex gap-6 animate-marquee whitespace-nowrap py-4">
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div key={i} className="inline-block w-[300px] md:w-[400px] whitespace-normal">
                                <TestimonialCard testimonial={t} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Reverse */}
                <div className="flex overflow-hidden group">
                    <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap py-4">
                        {[...testimonials, ...testimonials].reverse().map((t, i) => (
                            <div key={i} className="inline-block w-[300px] md:w-[400px] whitespace-normal">
                                <TestimonialCard testimonial={t} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 40s linear infinite;
                }
                .animate-marquee:hover, .animate-marquee-reverse:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
            </div>

            <div className="relative mb-4 flex-1">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-50 opacity-10" />
                <p className="text-gray-600 text-sm italic leading-relaxed relative z-10">
                    "{testimonial.content}"
                </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: testimonial.color }}
                >
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <div className="text-sm font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-[11px] text-gray-400 font-medium">{testimonial.role}</div>
                </div>
            </div>
        </div>
    );
};

export default Community;
