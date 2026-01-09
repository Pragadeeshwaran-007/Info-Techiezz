import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  GraduationCap, 
  Laptop, 
  Award, 
  Users, 
  Video, 
  Code2,
  BookOpen,
  Trophy,
  UserCheck,
  Percent
} from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of experience',
  },
  {
    icon: Laptop,
    title: 'Hands-on Projects',
    description: 'Build real-world applications to strengthen your portfolio',
  },
  {
    icon: Award,
    title: 'Certifications',
    description: 'Get certified and boost your career opportunities',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a thriving community of learners and mentors',
  },
  {
    icon: Video,
    title: 'Live Sessions',
    description: 'Interactive live coding sessions with Q&A',
  },
  {
    icon: Code2,
    title: 'Modern Curriculum',
    description: 'Stay updated with the latest technologies and trends',
  },
];

const stats = [
  { icon: UserCheck, value: 5000, suffix: '+', label: 'Students Enrolled' },
  { icon: BookOpen, value: 15, suffix: '+', label: 'Courses Available' },
  { icon: Trophy, value: 50, suffix: '+', label: 'Contests Held' },
  { icon: Percent, value: 98, suffix: '%', label: 'Success Rate' },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
      {count}
      {suffix}
    </span>
  );
};

const Features = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium mb-4 block">WHY CHOOSE US</span>
          <h2 className="section-heading mb-4">
            Learn The <span className="gradient-text">Right Way</span>
          </h2>
          <p className="section-subheading">
            Everything you need to start your programming journey and succeed in tech
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold font-display mb-2 group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-2xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-secondary" />
                  </div>
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
