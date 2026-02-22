import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, Laptop, Award, Users, Video, Code2,
  ArrowRight, ChevronRight, Zap,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const features = [
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    subtitle: 'Learn from the Best',
    description:
      'Our instructors are ex-Google, Meta, and Amazon engineers who bring real-world experience into every lesson. Stop learning from textbooks — learn from those who built the products you use daily.',
    color: '#2563EB',
    grad: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)',
    highlights: ['Google-certified Mentors', 'Industry Q&A sessions', '1-on-1 Doubt Clearing'],
    stat: '50+ Expert Faculty',
    emoji: '👨‍💻',
  },
  {
    icon: Laptop,
    title: 'Hands-on Projects',
    subtitle: 'Build. Ship. Impress.',
    description:
      'Theory alone won\'t get you hired. Every course includes portfolio-ready projects you actually build and ship — e-commerce sites, REST APIs, ML models, and more. Your GitHub will speak for you.',
    color: '#0891b2',
    grad: 'linear-gradient(135deg, #0c4a6e 0%, #0891b2 100%)',
    highlights: ['Full-stack Capstone Projects', 'GitHub Portfolio Ready', 'Deployed Live Apps'],
    stat: '80+ Real Projects',
    emoji: '💻',
  },
  {
    icon: Award,
    title: 'Certifications',
    subtitle: 'Credentials That Count',
    description:
      'Our certificates are recognised by top hiring companies across India. Completing a course earns you a verifiable credential that stands out on LinkedIn and in interviews — backed by real assessments.',
    color: '#d97706',
    grad: 'linear-gradient(135deg, #92400e 0%, #d97706 100%)',
    highlights: ['Verifiable Certificates', 'LinkedIn Compatible', 'Assessment-backed'],
    stat: '3,000+ Certs Issued',
    emoji: '🏆',
  },
  {
    icon: Users,
    title: 'Community Support',
    subtitle: 'Never Learn Alone',
    description:
      'Join a WhatsApp and Discord community of 1,000+ learners, mentors, and alumni who are always ready to help. Stuck on a bug at midnight? Someone in the community has the answer.',
    color: '#7c3aed',
    grad: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)',
    highlights: ['24/7 Discord & WhatsApp', '1,000+ Active Members', 'Alumni Network'],
    stat: '1,000+ Members',
    emoji: '🌐',
  },
  {
    icon: Video,
    title: 'Live Sessions',
    subtitle: 'Real-time Learning',
    description:
      'Bi-weekly live sessions with instructors who code alongside you, answer your questions, and review your work in real-time. Every session is recorded so you never miss a thing.',
    color: '#0d9488',
    grad: 'linear-gradient(135deg, #134e4a 0%, #0d9488 100%)',
    highlights: ['Bi-weekly Live Classes', 'Session Recordings', 'Live Code Reviews'],
    stat: '200+ Sessions Done',
    emoji: '🎙️',
  },
  {
    icon: Code2,
    title: 'Modern Curriculum',
    subtitle: 'Always Up-to-Date',
    description:
      'Our curriculum is reviewed every quarter by industry experts to ensure you\'re learning what companies actually hire for in 2026 — React 19, Java 21, Python AI stacks, System Design, and more.',
    color: '#ea580c',
    grad: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)',
    highlights: ['Quarterly Updates', 'Industry-aligned Topics', '2026 Tech Stack'],
    stat: '15+ Courses Updated',
    emoji: '⚡',
  },
];

const stats = [
  { label: 'Students', value: '1,000+', color: '#60a5fa' },
  { label: 'Courses', value: '15+', color: '#34d399' },
  { label: 'Contests', value: '50+', color: '#fbbf24' },
  { label: 'Success', value: '98%', color: '#c084fc' },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
const Features = () => {
  const [active, setActive] = useState(0);

  // Auto-cycle
  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % features.length), 3000);
    return () => clearInterval(t);
  }, []);

  const f = features[active];

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 text-blue-600"
            style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.18)' }}
          >
            <Zap className="w-3.5 h-3.5" />
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-3">
            Learn The{' '}
            <span style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Right Way
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Everything you need to start your programming journey and land your dream tech job
          </p>
        </motion.div>

        {/* ── SPLIT SCREEN ── */}
        <div className="grid lg:grid-cols-5 gap-6 md:gap-10 mb-8" style={{ minHeight: 'auto' }}>

          {/* LEFT — Spotlight panel */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden min-h-[460px] md:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.97, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -12 }}
                transition={{ duration: 0.38, ease: 'easeOut' }}
                className="absolute inset-0 flex flex-col justify-between p-8 md:p-10"
                style={{ background: f.grad }}
              >
                {/* Dot grid overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)',
                  backgroundSize: '22px 22px',
                }} />

                {/* Top: icon + stat */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
                    {f.emoji}
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.25)' }}>
                    {f.stat}
                  </span>
                </div>

                {/* Middle: text */}
                <div className="relative z-10 flex-1 flex flex-col justify-center py-6">
                  <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {f.subtitle}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black font-display text-white mb-4">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 460 }}>
                    {f.description}
                  </p>
                </div>

                {/* Bottom: highlights */}
                <div className="relative z-10 flex flex-wrap gap-2 mb-4 md:mb-0">
                  {f.highlights.map((h, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-[10px] md:text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap"
                      style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.22)' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                      {h}
                    </span>
                  ))}
                </div>

                {/* Progress dots - Moved to top-right on mobile to avoid overlap */}
                <div className="absolute top-8 right-8 md:top-auto md:bottom-8 md:right-10 flex gap-2 z-20">
                  {features.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === active ? 24 : 8,
                        height: 8,
                        background: i === active ? 'white' : 'rgba(255,255,255,0.3)',
                        boxShadow: i === active ? '0 0 10px rgba(255,255,255,0.5)' : 'none'
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — Feature selector list */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {features.map((item, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setActive(i)}
                className="flex items-center gap-4 p-4 rounded-2xl text-left transition-all"
                style={{
                  background: active === i ? `${item.color}10` : 'transparent',
                  border: `1px solid ${active === i ? item.color + '30' : 'rgba(0,0,0,0.06)'}`,
                  boxShadow: active === i ? `0 4px 20px ${item.color}14` : 'none',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: active === i ? `${item.color}18` : '#F3F4F6',
                    border: active === i ? `1px solid ${item.color}30` : '1px solid transparent',
                  }}
                >
                  <item.icon className="w-5 h-5" style={{ color: active === i ? item.color : '#9CA3AF' }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold font-display truncate"
                    style={{ color: active === i ? item.color : '#374151' }}>
                    {item.title}
                  </div>
                  <div className="text-xs truncate" style={{ color: '#9CA3AF' }}>
                    {item.subtitle}
                  </div>
                </div>

                <ChevronRight
                  className="w-4 h-4 flex-shrink-0 transition-transform"
                  style={{
                    color: active === i ? item.color : '#D1D5DB',
                    transform: active === i ? 'translateX(2px)' : 'none',
                  }}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* ── STATS STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center py-5 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="text-2xl font-black font-display mb-0.5" style={{ color: s.color }}>
                {s.value}
              </div>
              <div className="text-xs text-gray-400 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mt-8"
        >
          <motion.a
            href="https://www.youtube.com/@infotechiezz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white"
            style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', boxShadow: '0 8px 32px rgba(37,99,235,0.3)' }}
          >
            Start Learning Free
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
