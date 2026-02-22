import { motion } from 'framer-motion';

const codeSnippets = [
  { lang: 'java', color: 'text-orange-400', code: 'public class HelloWorld {' },
  { lang: 'java', color: 'text-purple-400', code: '  public static void main(String[] args) {' },
  { lang: 'java', color: 'text-cyan-400', code: '    System.out.println("Hello, InfoTechiezz!");' },
  { lang: 'java', color: 'text-gray-400', code: '  }' },
  { lang: 'java', color: 'text-gray-400', code: '}' },
  { lang: '', color: 'text-transparent', code: '' },
  { lang: 'python', color: 'text-yellow-400', code: 'def learn_programming():' },
  { lang: 'python', color: 'text-cyan-400', code: '    skills = ["Java", "C", "C++", "Python"]' },
  { lang: 'python', color: 'text-green-400', code: '    for skill in skills:' },
  { lang: 'python', color: 'text-purple-400', code: '        print(f"Learning {skill}...")' },
  { lang: 'python', color: 'text-cyan-400', code: '    return "Ready for Industry!"' },
  { lang: '', color: 'text-transparent', code: '' },
  { lang: 'cpp', color: 'text-blue-400', code: '#include <iostream>' },
  { lang: 'cpp', color: 'text-purple-400', code: 'using namespace std;' },
  { lang: 'cpp', color: 'text-orange-400', code: 'int main() {' },
  { lang: 'cpp', color: 'text-cyan-400', code: '  cout << "Welcome to InfoTechiezz!" << endl;' },
  { lang: 'cpp', color: 'text-green-400', code: '  return 0;' },
  { lang: 'cpp', color: 'text-gray-400', code: '}' },
];

const AnimatedCodeBlock = () => {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl animate-glow-pulse" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative glass-card rounded-2xl overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-card/50 border-b border-border/50">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-4 text-xs text-muted-foreground font-mono">
            learn_programming.code
          </span>
        </div>

        {/* Code Content */}
        <div className="p-6 h-80 overflow-hidden">
          <div className="animate-code-scroll">
            {[...codeSnippets, ...codeSnippets].map((snippet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 font-mono text-sm leading-7"
              >
                <span className="text-muted-foreground/50 select-none w-6 text-right">
                  {snippet.code ? (index % codeSnippets.length) + 1 : ''}
                </span>
                <span className={snippet.color}>{snippet.code}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cursor blink effect */}
        <div className="absolute bottom-8 right-8">
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-2 h-5 bg-secondary"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedCodeBlock;
