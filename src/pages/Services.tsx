import { motion } from 'framer-motion';
import { 
  Laptop, Brush, Megaphone, Globe, Box, 
  Sparkles, Network, Building, User, Settings,
  ArrowRight, Zap, CheckCircle2, Cloud, Server, GraduationCap
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const services = [
  {
    title: 'Website Development',
    description: 'Custom, high-performance websites built with the latest technologies like React, Next.js, and Node.js.',
    icon: Laptop,
    color: '#3b82f6',
    bg: '#eff6ff',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading']
  },
  {
    title: 'Website Redesign',
    description: 'Transform your existing website into a modern, user-friendly experience that converts visitors into customers.',
    icon: Brush,
    color: '#ec4899',
    bg: '#fdf2f8',
    features: ['Modern UI/UX', 'Brand Alignment', 'Improved Performance']
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your online presence and reach your target audience effectively.',
    icon: Megaphone,
    color: '#f59e0b',
    bg: '#fffbeb',
    features: ['Social Media Ads', 'Content Strategy', 'Email Marketing']
  },
  {
    title: 'SEO Services',
    description: 'Boost your search engine rankings and drive organic traffic to your website with our expert SEO techniques.',
    icon: Globe,
    color: '#10b981',
    bg: '#ecfdf5',
    features: ['Keyword Research', 'On-page SEO', 'Backlink Building']
  },
  {
    title: 'Product Development',
    description: 'From concept to launch, we help you build innovative digital products that solve real-world problems.',
    icon: Box,
    color: '#8b5cf6',
    bg: '#f5f3ff',
    features: ['MVP Planning', 'Agile Development', 'User Testing']
  },
  {
    title: 'AI Solutions',
    description: 'Leverage the power of Artificial Intelligence to automate tasks, gain insights, and enhance user experiences.',
    icon: Sparkles,
    color: '#06b6d4',
    bg: '#ecfeff',
    features: ['Machine Learning', 'Chatbot Integration', 'Data Analysis']
  },
  {
    title: 'IoT Solutions',
    description: 'Connect your devices and systems to the internet to gather data and improve operational efficiency.',
    icon: Network,
    color: '#ef4444',
    bg: '#fef2f2',
    features: ['Smart Automation', 'Real-time Monitoring', 'Scalable Architecture']
  },
  {
    title: 'B2B Services',
    description: 'Strategic solutions tailored for businesses to streamline operations and foster professional growth.',
    icon: Building,
    color: '#6366f1',
    bg: '#eef2ff',
    features: ['Enterprise Software', 'Client Management', 'Process Optimization']
  },
  {
    title: 'B2C Services',
    description: 'Engaging and intuitive digital experiences designed to delight consumers and build brand loyalty.',
    icon: User,
    color: '#f43f5e',
    bg: '#fff1f2',
    features: ['E-commerce Solutions', 'Loyalty Programs', 'Direct Engagement']
  },
  {
    title: 'Maintenance & Support',
    description: 'Comprehensive support and maintenance services to ensure your digital assets are always up-to-date and secure.',
    icon: Settings,
    color: '#64748b',
    bg: '#f8fafc',
    features: ['24/7 Monitoring', 'Security Updates', 'Technical Assistance']
  },
  {
    title: 'SaaS Development',
    description: 'Expert, multi-tenant SaaS solutions tailored for scalability, high performance, and subscription-based business success.',
    icon: Cloud,
    color: '#8b5cf6',
    bg: '#f5f3ff',
    features: ['Multi-tenancy', 'Subscription Systems', 'Scalable Arch']
  },
  {
    title: 'Cloud Deployment',
    description: 'Reliable cloud migration and infrastructure management on major platforms like AWS, Azure, and Google Cloud.',
    icon: Server,
    color: '#3b82f6',
    bg: '#eff6ff',
    features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling']
  },
  {
    title: 'Training & Consulting',
    description: 'Specialized training sessions and strategic consulting sessions to empower your team with cutting-edge tech skills.',
    icon: GraduationCap,
    color: '#10b981',
    bg: '#ecfdf5',
    features: ['Tech Workshops', 'Workflow Strategy', 'Expert Consulting']
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-[#001A33]">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black mb-6 text-cyan-400 uppercase tracking-widest bg-cyan-400/10 border border-cyan-400/20">
              <Zap className="w-3 h-3" />
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-6xl font-black font-display text-white mb-6">
              Empowering Your Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Digital Solutions</span>
            </h1>
            <p className="text-blue-100/70 text-lg max-w-3xl mx-auto leading-relaxed">
              We provide a wide range of services to help you build, grow, and manage your digital presence. From stunning web design to advanced AI solutions, we’ve got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-blue-200 transition-all hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col h-full"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ background: service.bg, border: `1px solid ${service.color}20` }}
                >
                  <service.icon className="w-8 h-8" style={{ color: service.color }} />
                </div>
                
                <h3 className="text-2xl font-black font-display text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 italic">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs font-bold text-gray-700">
                      <CheckCircle2 className="w-4 h-4" style={{ color: service.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-50/50">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Services;
