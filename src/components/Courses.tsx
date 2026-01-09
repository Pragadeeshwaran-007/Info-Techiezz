import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight, Code, Database, Cpu, Braces } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courses = [
  {
    id: 1,
    title: 'Java Programming',
    description: 'Master Object-Oriented Programming with Java and build enterprise applications.',
    topics: ['OOP Fundamentals', 'Spring Boot', 'Data Structures', 'Multithreading'],
    duration: '12 weeks',
    students: '1.2K+',
    level: 'Intermediate',
    icon: Code,
    color: 'from-orange-500 to-red-500',
    bgAccent: 'bg-orange-500/10',
  },
  {
    id: 2,
    title: 'C Programming',
    description: 'Learn the foundation of programming with C and system-level concepts.',
    topics: ['Fundamentals', 'Pointers', 'File Handling', 'Memory Management'],
    duration: '8 weeks',
    students: '800+',
    level: 'Beginner',
    icon: Database,
    color: 'from-blue-500 to-indigo-500',
    bgAccent: 'bg-blue-500/10',
  },
  {
    id: 3,
    title: 'C++ Mastery',
    description: 'Advanced C++ concepts including STL, templates, and modern C++ features.',
    topics: ['OOP in C++', 'STL Library', 'Memory Management', 'Templates'],
    duration: '10 weeks',
    students: '650+',
    level: 'Advanced',
    icon: Cpu,
    color: 'from-cyan-500 to-blue-500',
    bgAccent: 'bg-cyan-500/10',
  },
  {
    id: 4,
    title: 'Python Development',
    description: 'From basics to advanced topics including Django, Data Science, and ML.',
    topics: ['Python Basics', 'Django Framework', 'Data Science', 'Machine Learning'],
    duration: '14 weeks',
    students: '2K+',
    level: 'All Levels',
    icon: Braces,
    color: 'from-yellow-500 to-green-500',
    bgAccent: 'bg-yellow-500/10',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const Courses = () => {
  return (
    <section id="courses" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium mb-4 block">OUR COURSES</span>
          <h2 className="section-heading mb-4">
            Learn From The <span className="gradient-text">Best</span>
          </h2>
          <p className="section-subheading">
            Industry-relevant curriculum designed by experts to help you master programming
          </p>
        </motion.div>

        {/* Course Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group glass-card p-6 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${course.bgAccent} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className={`bg-gradient-to-r ${course.color} bg-clip-text`}>
                  <course.icon className="w-7 h-7 text-foreground" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold font-display mb-3 group-hover:text-secondary transition-colors">
                {course.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {course.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-5">
                {course.topics.slice(0, 3).map((topic, index) => (
                  <span
                    key={index}
                    className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>{course.students}</span>
                </div>
              </div>

              {/* Level Badge & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${course.color} text-white`}
                >
                  {course.level}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
