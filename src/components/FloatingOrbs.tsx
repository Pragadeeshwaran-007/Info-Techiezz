import { motion } from 'framer-motion';

const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary Orb */}
      <motion.div
        animate={{
          x: [0, 100, 50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-30"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--primary) / 0.6) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Secondary Orb */}
      <motion.div
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 right-1/4 w-48 h-48 md:w-80 md:h-80 rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--cyan) / 0.5) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Accent Orb */}
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -80, 80, 0],
          scale: [1, 1.3, 0.7, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-1/3 w-40 h-40 md:w-72 md:h-72 rounded-full opacity-35"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--teal) / 0.5) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Small accent orbs */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-20 w-24 h-24 rounded-full opacity-50"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--secondary) / 0.4) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
