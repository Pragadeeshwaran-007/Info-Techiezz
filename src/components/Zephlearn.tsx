import { motion } from 'framer-motion';
import { Code, Zap, BarChart3, ArrowRight } from 'lucide-react';

const features = [
    { icon: Code, title: 'Integrated Editor', desc: 'Monaco-powered editor with C++, Java, Python and JavaScript.' },
    { icon: Zap, title: 'Instant Verdicts', desc: 'Run against samples and submit against hidden tests in real time.' },
    { icon: BarChart3, title: 'Track Progress', desc: 'Solved counts and difficulty breakdowns per profile.' },
];

const stats = [
    { value: '100+', label: 'Problems' },
    { value: '5k+', label: 'Users' },
    { value: '10+', label: 'Categories' },
];

const Zephlearn = () => (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >

                <h2 className="text-3xl md:text-5xl font-black font-display text-gray-900 mb-4 tracking-tight">
                    Learn at the speed of{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">thought.</span>
                </h2>
                <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    A modern coding practice platform with an integrated editor, real test cases and instant verdicts. Sharpen your DSA. Ship faster.
                </p>
            </motion.div>

            {/* Stats */}
            <div className="flex justify-center gap-8 md:gap-16 mb-16">
                {stats.map((s) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="text-3xl md:text-4xl font-black text-gray-900">{s.value}</div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{s.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {features.map((f, i) => (
                    <motion.div
                        key={f.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-5">
                            <f.icon className="w-6 h-6 text-violet-600" />
                        </div>
                        <h3 className="text-lg font-black text-gray-900 mb-2">{f.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <a
                    href="https://zephlearnfrontend.pragadeeshwaran098.workers.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-200 hover:brightness-110 transition-all"
                >
                    Start Practicing on Zephlearn
                    <ArrowRight className="w-4 h-4" />
                </a>
            </motion.div>
        </div>
    </section>
);

export default Zephlearn;
