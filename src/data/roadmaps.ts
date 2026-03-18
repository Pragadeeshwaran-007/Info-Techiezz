export interface RoadmapLevel {
  title: string;
  topics: string[];
  endPoint: string;
}

export interface RoadmapData {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  prerequisites: string[];
  levels: RoadmapLevel[];
  color: string;
  bg: string;
  grad: string;
  iconName: string;
}

export const roadmapsData: RoadmapData[] = [
  // C Programming
  {
    id: 'c-programming',
    title: 'C Programming Roadmap',
    shortTitle: 'C lang',
    description: 'A comprehensive guide from foundational C programming to system-level mastery.',
    iconName: 'Terminal',
    color: '#3b82f6',
    bg: '#eff6ff',
    grad: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
    prerequisites: [
      'Basic computer knowledge',
      'Understanding of how programs work',
      'Logical thinking ability'
    ],
    levels: [
      {
        title: 'Level 1: Foundation',
        endPoint: 'Write simple C programs with basic I/O operations',
        topics: [
          'Introduction to C Programming',
          'Structure of a C program',
          'The main() function',
          'Variables and data types',
          'Input and output functions (printf, scanf)',
          'Syntax and semantics',
          'Comments and documentation',
          'Basic arithmetic operators',
          'Compilation process'
        ]
      },
      {
        title: 'Level 2: Core Concepts',
        endPoint: 'Build programs using functions and control structures',
        topics: [
          'Control flow statements (if, if-else, switch)',
          'Loops (for, while, do-while)',
          'Functions (declaration, definition, calling)',
          'Parameter passing (call by value, call by reference)',
          'Recursion basics',
          'Scope and lifetime of variables',
          'Storage classes (auto, register, static, extern)'
        ]
      },
      {
        title: 'Level 3: Data Structures in C',
        endPoint: 'Implement complex data manipulation programs',
        topics: [
          'Arrays (1D, 2D, multi-dimensional)',
          'Strings and string functions',
          'Pointers (basics, arithmetic, pointer to pointer)',
          'Dynamic memory allocation (malloc, calloc, realloc, free)',
          'Structures and unions',
          'Typedef keyword',
          'File handling (reading, writing, binary files)',
          'Command line arguments'
        ]
      },
      {
        title: 'Level 4: Advanced C',
        endPoint: 'Create data structures from scratch',
        topics: [
          'Advanced pointer concepts',
          'Function pointers',
          'Pointer to structures',
          'Linked lists implementation',
          'Stack and Queue implementation',
          'Tree structures',
          'Preprocessor directives',
          'Macros and conditional compilation',
          'Bitwise operations',
          'Error handling'
        ]
      },
      {
        title: 'Level 5: Mastery',
        endPoint: 'Build system-level applications and libraries',
        topics: [
          'Memory management optimization',
          'Multi-file programming',
          'Header file creation',
          'Library functions creation',
          'System programming basics',
          'Socket programming introduction',
          'Multithreading concepts',
          'Performance optimization',
          'Debugging techniques',
          'Code profiling'
        ]
      }
    ]
  },

  // C++ Programming
  {
    id: 'cpp-programming',
    title: 'C++ Programming Roadmap',
    shortTitle: 'C++',
    description: 'Master powerful object-oriented concepts and the Standard Template Library.',
    iconName: 'Cpu',
    color: '#6366f1',
    bg: '#eef2ff',
    grad: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    prerequisites: [
      'Basic programming knowledge (C preferred but not mandatory)',
      'Understanding of variables and operators'
    ],
    levels: [
      {
        title: 'Level 1: C++ Basics',
        endPoint: 'Write basic C++ programs',
        topics: [
          'Introduction to C++',
          'Setting up development environment',
          'Basic syntax and structure',
          'Variables and data types',
          'Constants and literals',
          'Operators (arithmetic, relational, logical)',
          'Input/Output streams (cin, cout)',
          'Comments and documentation'
        ]
      },
      {
        title: 'Level 2: Control Structures & Functions',
        endPoint: 'Create modular programs with functions',
        topics: [
          'Conditional statements (if, if-else, switch)',
          'Loops (for, while, do-while)',
          'Break and continue statements',
          'Functions (declaration, definition, overloading)',
          'Default arguments',
          'Inline functions',
          'Recursion',
          'Lambda expressions (C++11)'
        ]
      },
      {
        title: 'Level 3: Object-Oriented Programming',
        endPoint: 'Implement OOP concepts in real projects',
        topics: [
          'Classes and objects',
          'Constructors and destructors',
          'Copy constructor',
          'Encapsulation & Abstraction',
          'Inheritance (single, multiple, multilevel, hierarchical)',
          'Polymorphism (compile-time, runtime)',
          'Function overloading and overriding',
          'Virtual functions & Abstract classes',
          'Friend functions',
          'Static members'
        ]
      },
      {
        title: 'Level 4: Advanced C++ Features',
        endPoint: 'Build robust applications with advanced features',
        topics: [
          'Templates (function and class templates)',
          'Exception handling (try, catch, throw)',
          'File handling (fstream, ifstream, ofstream)',
          'Operator overloading',
          'Type casting',
          'Smart pointers (unique_ptr, shared_ptr, weak_ptr)',
          'Move semantics (C++11)',
          'Auto keyword & Range-based for loops'
        ]
      },
      {
        title: 'Level 5: Standard Template Library (STL)',
        endPoint: 'Efficiently use STL in development',
        topics: [
          'STL containers (vector, list, deque, stack, queue)',
          'Associative containers (map, set, multimap, multiset)',
          'Unordered containers (unordered_map, unordered_set)',
          'Iterators',
          'Algorithms (sorting, searching, reversing)',
          'Functors and lambdas',
          'Pair and tuple',
          'Utility library'
        ]
      },
      {
        title: 'Level 6: Modern C++ (C++11/14/17/20)',
        endPoint: 'Master modern C++ development practices',
        topics: [
          'C++11 features (auto, nullptr, constexpr)',
          'C++14 features (generic lambdas, variable templates)',
          'C++17 features (structured bindings, if constexpr)',
          'C++20 features (concepts, ranges, coroutines)',
          'Multithreading and concurrency',
          'Memory model and atomics',
          'RAII principle',
          'Design patterns in C++'
        ]
      },
      {
        title: 'Level 7: Mastery',
        endPoint: 'Architect and build enterprise-level C++ applications',
        topics: [
          'Performance optimization & Memory management techniques',
          'Design patterns (Singleton, Factory, Observer, etc.)',
          'System architecture design',
          'Testing frameworks (Google Test)',
          'Build systems (CMake, Make)',
          'Debugging and profiling tools',
          'Cross-platform development',
          'Network programming'
        ]
      }
    ]
  },

  // Java Programming
  {
    id: 'java-programming',
    title: 'Java Programming Roadmap',
    shortTitle: 'Java',
    description: 'From core Java fundamentals to advanced enterprise application development.',
    iconName: 'Coffee',
    color: '#f97316',
    bg: '#fff7ed',
    grad: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    prerequisites: [
      'Basic understanding of programming concepts',
      'Logical thinking'
    ],
    levels: [
      {
        title: 'Level 1: Java Fundamentals',
        endPoint: 'Write and execute basic Java programs',
        topics: [
          'Introduction to Java and JVM',
          'Installing JDK and IDE (IntelliJ/Eclipse)',
          'Basic syntax and structure',
          'Variables and data types',
          'Operators',
          'Type casting and conversion',
          'Input/Output (Scanner, System.out)',
          'Comments and documentation',
          'Compilation and execution process'
        ]
      },
      {
        title: 'Level 2: Control Flow & Functions',
        endPoint: 'Create programs with complex logic flow',
        topics: [
          'Conditional statements (if, if-else, switch)',
          'Loops (for, while, do-while, enhanced for)',
          'Break and continue',
          'Functions/methods',
          'Method overloading',
          'Recursion',
          'Variable scope',
          'Command line arguments'
        ]
      },
      {
        title: 'Level 3: Object-Oriented Programming',
        endPoint: 'Implement complete OOP-based applications',
        topics: [
          'Classes and objects',
          'Constructors & this keyword',
          'Encapsulation (access modifiers)',
          'Inheritance (extends, super)',
          'Polymorphism (overloading, overriding)',
          'Abstraction (abstract classes, interfaces)',
          'Composition vs Inheritance',
          'Method overriding rules',
          'Dynamic method dispatch'
        ]
      },
      {
        title: 'Level 4: Core Java APIs',
        endPoint: 'Handle data and errors effectively',
        topics: [
          'String and StringBuilder',
          'Wrapper classes',
          'Arrays and ArrayList',
          'Collections Framework (List, Set, Map)',
          'Generics',
          'Exception handling (try-catch-finally, throw, throws)',
          'Custom exceptions',
          'File I/O operations',
          'Date and Time API'
        ]
      },
      {
        title: 'Level 5: Advanced Java Concepts',
        endPoint: 'Write concurrent and functional-style code',
        topics: [
          'Multithreading (Thread class, Runnable interface)',
          'Synchronization',
          'Thread pools and executors',
          'Lambda expressions (Java 8)',
          'Stream API',
          'Optional class',
          'Functional interfaces',
          'Method references',
          'New Date/Time API (Java 8)'
        ]
      },
      {
        title: 'Level 6: Java Enterprise Features',
        endPoint: 'Build database-connected applications',
        topics: [
          'JDBC (Database connectivity)',
          'Servlets and JSP',
          'JavaBeans',
          'Annotations',
          'Reflection API',
          'Networking (Socket programming)',
          'Serialization/Deserialization',
          'Garbage collection tuning',
          'JVM internals'
        ]
      },
      {
        title: 'Level 7: Build Tools & Testing',
        endPoint: 'Create production-ready Java applications',
        topics: [
          'Maven/Gradle build tools',
          'Dependency management',
          'Unit testing (JUnit)',
          'Mockito for mocking',
          'Integration testing',
          'Code coverage tools',
          'Logging frameworks (Log4j, SLF4J)'
        ]
      },
      {
        title: 'Level 8: Mastery',
        endPoint: 'Architect enterprise Java systems',
        topics: [
          'Design patterns (Creational, Structural, Behavioral)',
          'SOLID principles',
          'Microservices architecture',
          'Spring Framework basics',
          'Performance optimization & Memory profiling',
          'Security best practices',
          'RESTful API design',
          'Clean code principles'
        ]
      }
    ]
  },

  // Python Programming
  {
    id: 'python-programming',
    title: 'Python Programming Roadmap',
    shortTitle: 'Python',
    description: 'From scripting basics to deep object-oriented concepts and ecosystem mastery.',
    iconName: 'Code',
    color: '#eab308',
    bg: '#fefce8',
    grad: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
    prerequisites: [
      'Basic computer literacy',
      'No prior programming experience required'
    ],
    levels: [
      {
        title: 'Level 1: Python Basics',
        endPoint: 'Write simple Python scripts',
        topics: [
          'Installing Python and setup',
          'Python interpreter and IDE (PyCharm/VS Code)',
          'Basic syntax and indentation',
          'Variables and data types',
          'Numbers, strings, booleans',
          'Type conversion',
          'Input/Output functions',
          'Comments and docstrings',
          'Basic operators'
        ]
      },
      {
        title: 'Level 2: Control Structures',
        endPoint: 'Create programs with decision-making logic',
        topics: [
          'Conditional statements (if, elif, else)',
          'Loops (for, while)',
          'Loop control (break, continue, pass)',
          'Range function',
          'List & Dictionary comprehensions',
          'Exception handling basics (try-except)'
        ]
      },
      {
        title: 'Level 3: Data Structures',
        endPoint: 'Master Python built-in data structures',
        topics: [
          'Lists (methods, slicing, operations)',
          'Tuples',
          'Sets (operations, methods)',
          'Dictionaries (methods, operations)',
          'Strings (methods, formatting)',
          'Arrays (array module)',
          'Collections module (deque, Counter, defaultdict)',
          'Stack and Queue implementation'
        ]
      },
      {
        title: 'Level 4: Functions & Modules',
        endPoint: 'Write modular, reusable code',
        topics: [
          'Defining functions',
          'Parameters and arguments',
          'Return values',
          'Default and keyword arguments',
          '*args and **kwargs',
          'Lambda functions',
          'Map, filter, reduce',
          'Creating/Importing modules',
          'Standard library overview & Packages'
        ]
      },
      {
        title: 'Level 5: Object-Oriented Programming',
        endPoint: 'Implement OOP in Python projects',
        topics: [
          'Classes and objects',
          'Instance variables and methods',
          'Class variables and methods',
          'Static methods',
          'Inheritance (Multiple inheritance)',
          'Method overriding',
          'Encapsulation (public, protected, private)',
          'Properties and decorators',
          'Abstract base classes',
          'Magic methods (dunder methods)'
        ]
      },
      {
        title: 'Level 6: Advanced Python',
        endPoint: 'Leverage Python advanced features',
        topics: [
          'File handling (reading, writing, context managers)',
          'Regular expressions',
          'Iterators and generators',
          'Decorators and closures',
          'Context managers (with statement)',
          'Threading and multiprocessing',
          'AsyncIO and coroutines',
          'Metaclasses',
          'Descriptors'
        ]
      },
      {
        title: 'Level 7: Python Ecosystem',
        endPoint: 'Work with Python rich ecosystem',
        topics: [
          'PIP package manager',
          'Virtual environments (venv, virtualenv)',
          'Requirements.txt',
          'Popular libraries overview',
          'NumPy (numerical computing)',
          'Pandas (data manipulation)',
          'Matplotlib/Seaborn (visualization)',
          'Requests (HTTP library)',
          'BeautifulSoup/Scrapy (web scraping)'
        ]
      },
      {
        title: 'Level 8: Specialization Tracks',
        endPoint: 'Become proficient in chosen specialization',
        topics: [
          'Web Dev: Flask/Django frameworks, REST API, Database (SQLAlchemy)',
          'Data Science: Advanced NumPy/Pandas, scikit-learn, TensorFlow/PyTorch',
          'Automation & Scripting: Automating tasks, APIs, Task scheduling'
        ]
      },
      {
        title: 'Level 9: Mastery',
        endPoint: 'Build production-grade Python applications',
        topics: [
          'Design patterns in Python',
          'Testing (pytest, unittest)',
          'Code quality (PEP 8, flake8, black)',
          'Documentation (Sphinx)',
          'Performance optimization & C extensions',
          'Packaging and distribution',
          'CI/CD for Python',
          'Best practices and conventions'
        ]
      }
    ]
  },

  // JavaScript
  {
    id: 'javascript',
    title: 'JavaScript Complete Roadmap',
    shortTitle: 'JavaScript',
    description: 'Master JavaScript from basics to advanced concepts, async programming, and modern ES6+ features.',
    iconName: 'FileCode',
    color: '#fbbf24',
    bg: '#fffbeb',
    grad: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    prerequisites: [
      'Basic computer knowledge',
      'Understanding of HTML & CSS fundamentals',
      'Logical thinking ability'
    ],
    levels: [
      {
        title: 'Level 1: JavaScript Basics',
        endPoint: 'Write basic JavaScript programs with variables and operators',
        topics: [
          'Introduction to JavaScript',
          'Setting up development environment',
          'JavaScript syntax and structure',
          'Variables (var, let, const)',
          'Data types (String, Number, Boolean, null, undefined, Object, Symbol)',
          'Type coercion and conversion',
          'Operators (arithmetic, assignment, comparison, logical)',
          'Comments and documentation',
          'Basic input/output (console.log, alert, prompt)',
          'Strict mode'
        ]
      },
      {
        title: 'Level 2: Control Structures & Functions',
        endPoint: 'Create programs with complex logic and reusable functions',
        topics: [
          'Conditional statements (if, if-else, else-if, switch)',
          'Ternary operator',
          'Loops (for, while, do-while)',
          'Loop control (break, continue)',
          'Functions (declaration, expression, arrow functions)',
          'Parameters and arguments',
          'Return values',
          'Scope (global, local, block)',
          'Hoisting',
          'Default parameters',
          'Rest parameters'
        ]
      },
      {
        title: 'Level 3: Data Structures',
        endPoint: 'Master JavaScript data structures and manipulation',
        topics: [
          'Arrays (creation, methods, iteration)',
          'Array methods (map, filter, reduce, forEach, find, some, every)',
          'Multi-dimensional arrays',
          'Objects (creation, properties, methods)',
          'Object methods (keys, values, entries, assign, freeze, seal)',
          'JSON (parse, stringify)',
          'Sets and Maps',
          'WeakSet and WeakMap',
          'Destructuring (arrays and objects)',
          'Spread and rest operators'
        ]
      },
      {
        title: 'Level 4: Advanced JavaScript Concepts',
        endPoint: 'Understand advanced JavaScript concepts and OOP',
        topics: [
          'Closures',
          'Callbacks',
          'Higher-order functions',
          'this keyword',
          'Call, apply, bind methods',
          'Prototypes and prototypal inheritance',
          'Constructor functions',
          'Classes (ES6)',
          'Inheritance (extends, super)',
          'Static methods',
          'Getters and setters',
          'Symbol type',
          'Iterators and generators'
        ]
      },
      {
        title: 'Level 5: Asynchronous JavaScript',
        endPoint: 'Master asynchronous programming patterns',
        topics: [
          'Synchronous vs Asynchronous programming',
          'Callbacks and callback hell',
          'Promises (creation, chaining, error handling)',
          'Promise methods (all, race, allSettled, any)',
          'Async/await',
          'Try-catch-finally',
          'Event loop',
          'Microtasks and macrotasks',
          'setTimeout, setInterval',
          'requestAnimationFrame'
        ]
      },
      {
        title: 'Level 6: DOM Manipulation & Events',
        endPoint: 'Build interactive web pages with DOM manipulation',
        topics: [
          'DOM tree structure',
          'Selecting elements (getElementById, querySelector, etc.)',
          'Traversing the DOM',
          'Creating and removing elements',
          'Modifying attributes and properties',
          'Styling elements',
          'Classes manipulation',
          'Events (click, submit, keydown, etc.)',
          'Event listeners',
          'Event object',
          'Event bubbling and capturing',
          'Event delegation',
          'Form handling and validation'
        ]
      },
      {
        title: 'Level 7: Modern JavaScript (ES6+)',
        endPoint: 'Write modern, clean JavaScript code',
        topics: [
          'Template literals',
          'Tagged templates',
          'Enhanced object literals',
          'Optional chaining',
          'Nullish coalescing',
          'Modules (import/export)',
          'Dynamic imports',
          'BigInt',
          'Regular expressions',
          'Internationalization API',
          'Proxy and Reflect',
          'Error handling (custom errors)'
        ]
      },
      {
        title: 'Level 8: Browser APIs & Storage',
        endPoint: 'Utilize browser APIs effectively',
        topics: [
          'LocalStorage and SessionStorage',
          'Cookies',
          'IndexedDB',
          'Fetch API',
          'XMLHttpRequest (AJAX)',
          'History API',
          'Geolocation API',
          'Canvas API',
          'Web Storage API',
          'Notification API',
          'Service Workers basics',
          'Web Workers'
        ]
      },
      {
        title: 'Level 9: JavaScript Tooling & Ecosystem',
        endPoint: 'Set up professional JavaScript development environment',
        topics: [
          'NPM/Yarn package managers',
          'Package.json',
          'Dependencies and devDependencies',
          'Babel transpiler',
          'Webpack basics',
          'ESLint and code quality',
          'Prettier code formatter',
          'Debugging techniques',
          'Chrome DevTools',
          'Source maps',
          'Bundlers and build tools'
        ]
      },
      {
        title: 'Level 10: Advanced Patterns & Best Practices',
        endPoint: 'Write production-ready, optimized JavaScript code',
        topics: [
          'Design patterns (Module, Singleton, Factory, Observer)',
          'Functional programming concepts',
          'Currying and composition',
          'Memoization',
          'Debouncing and throttling',
          'Lazy loading',
          'Code splitting',
          'Performance optimization',
          'Memory management',
          'Garbage collection',
          'Security best practices',
          'Clean code principles'
        ]
      },
      {
        title: 'Level 11: Testing & Quality Assurance',
        endPoint: 'Write comprehensive test suites for JavaScript applications',
        topics: [
          'Unit testing concepts',
          'Jest framework',
          'Mocha and Chai',
          'Test-driven development (TDD)',
          'Behavior-driven development (BDD)',
          'Mocking and stubbing',
          'Integration testing',
          'End-to-end testing basics',
          'Code coverage',
          'Debugging tests'
        ]
      },
      {
        title: 'Level 12: Mastery',
        endPoint: 'Architect and lead complex JavaScript applications',
        topics: [
          'Advanced design patterns',
          'Architecture patterns (MVC, MVVM, Flux)',
          'Micro-frontends',
          'Progressive Web Apps (PWA)',
          'Web Components',
          'TypeScript integration',
          'Server-side rendering concepts',
          'Real-time applications',
          'WebSocket API',
          'Advanced performance tuning',
          'Memory leak detection',
          'Build optimization strategies'
        ]
      }
    ]
  },

  // Frontend Development
  {
    id: 'frontend-development',
    title: 'Frontend Development Roadmap',
    shortTitle: 'Frontend',
    description: 'Complete guide to modern frontend development with React, TypeScript, and responsive design.',
    iconName: 'Layout',
    color: '#06b6d4',
    bg: '#ecfeff',
    grad: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    prerequisites: [
      'Basic computer literacy',
      'Understanding of how the internet works',
      'HTML & CSS fundamentals'
    ],
    levels: [
      {
        title: 'Level 1: Internet & Web Fundamentals',
        endPoint: 'Understand web fundamentals and architecture',
        topics: [
          'How the internet works',
          'HTTP/HTTPS protocols',
          'DNS and domain names',
          'Web hosting',
          'Browsers and how they work',
          'Client-server architecture',
          'Request-response cycle',
          'Status codes',
          'Cookies and sessions',
          'CORS and security basics'
        ]
      },
      {
        title: 'Level 2: HTML5 Mastery',
        endPoint: 'Create semantic, accessible HTML structures',
        topics: [
          'HTML document structure',
          'Semantic HTML elements',
          'Text formatting and typography',
          'Links and navigation',
          'Images and multimedia',
          'Tables',
          'Forms and input types',
          'Form validation',
          'HTML5 APIs (Canvas, SVG, Video, Audio)',
          'Meta tags and SEO basics',
          'Accessibility (ARIA labels, semantic markup)',
          'Responsive images'
        ]
      },
      {
        title: 'Level 3: CSS3 Fundamentals',
        endPoint: 'Style web pages with modern CSS techniques',
        topics: [
          'CSS syntax and selectors',
          'Box model (margin, border, padding, content)',
          'Display properties',
          'Positioning (static, relative, absolute, fixed, sticky)',
          'Colors and backgrounds',
          'Typography and fonts',
          'CSS units (px, em, rem, %, vh, vw)',
          'Flexbox layout',
          'CSS Grid layout',
          'Transitions and transforms',
          'Animations and keyframes',
          'Pseudo-classes and pseudo-elements'
        ]
      },
      {
        title: 'Level 4: Responsive Design & Advanced CSS',
        endPoint: 'Build responsive, mobile-friendly websites',
        topics: [
          'Media queries',
          'Mobile-first design',
          'Breakpoints strategy',
          'Fluid layouts',
          'CSS variables (custom properties)',
          'Calc() function',
          'Object-fit and object-position',
          'CSS frameworks (Bootstrap, Tailwind)',
          'CSS preprocessors (SASS/SCSS)',
          'Nesting, mixins, functions',
          'BEM methodology',
          'CSS architecture'
        ]
      },
      {
        title: 'Level 5: JavaScript for Frontend',
        endPoint: 'Add interactivity to web pages',
        topics: [
          'JavaScript fundamentals',
          'DOM manipulation',
          'Event handling',
          'Form validation',
          'AJAX and Fetch API',
          'JSON handling',
          'Local storage and session storage',
          'Browser APIs',
          'ES6+ features',
          'Async/await',
          'Error handling'
        ]
      },
      {
        title: 'Level 6: Version Control & Collaboration',
        endPoint: 'Collaborate effectively using version control',
        topics: [
          'Git fundamentals',
          'Git workflow (add, commit, push, pull)',
          'Branching and merging',
          'Resolving conflicts',
          'Remote repositories (GitHub, GitLab, Bitbucket)',
          'Pull requests and code reviews',
          'Git rebase vs merge',
          'Stashing and cherry-picking',
          'Git hooks',
          'Collaborative workflows (Git Flow, GitHub Flow)'
        ]
      },
      {
        title: 'Level 7: Package Managers & Build Tools',
        endPoint: 'Set up professional build workflows',
        topics: [
          'NPM and Yarn',
          'Package.json configuration',
          'Installing and managing dependencies',
          'Scripts and automation',
          'Webpack configuration',
          'Module bundlers (Vite, Parcel, Rollup)',
          'Babel transpilation',
          'Code splitting',
          'Tree shaking',
          'Hot module replacement',
          'Environment variables',
          'Build optimization'
        ]
      },
      {
        title: 'Level 8: React.js Framework',
        endPoint: 'Build dynamic single-page applications with React',
        topics: [
          'React fundamentals',
          'JSX syntax',
          'Components (functional and class)',
          'Props and state',
          'Component lifecycle',
          'Hooks (useState, useEffect, useContext, useReducer)',
          'Custom hooks',
          'Event handling in React',
          'Conditional rendering',
          'Lists and keys',
          'Forms in React',
          'React Router',
          'Context API',
          'Refs and portals'
        ]
      },
      {
        title: 'Level 9: Advanced React & State Management',
        endPoint: 'Master complex React applications and state management',
        topics: [
          'Advanced hooks (useMemo, useCallback, useLayoutEffect)',
          'Higher-order components',
          'Render props pattern',
          'Compound components',
          'Error boundaries',
          'Code splitting and lazy loading',
          'Suspense and concurrent features',
          'Redux (actions, reducers, store)',
          'Redux Toolkit',
          'React Query/SWR',
          'Zustand/Jotai',
          'Performance optimization',
          'Memoization techniques',
          'Virtual DOM understanding'
        ]
      },
      {
        title: 'Level 10: TypeScript for Frontend',
        endPoint: 'Write type-safe frontend applications',
        topics: [
          'TypeScript basics',
          'Type annotations',
          'Interfaces and types',
          'Generics',
          'Enums',
          'Utility types',
          'Type guards',
          'Decorators',
          'Integrating TypeScript with React',
          'Typing props, state, and events',
          'Advanced TypeScript patterns',
          'Migration from JavaScript'
        ]
      },
      {
        title: 'Level 11: Testing Frontend Applications',
        endPoint: 'Write comprehensive tests for frontend code',
        topics: [
          'Testing fundamentals',
          'Jest testing framework',
          'React Testing Library',
          'Unit testing components',
          'Integration testing',
          'End-to-end testing (Cypress, Playwright)',
          'Mocking API calls',
          'Snapshot testing',
          'Test-driven development',
          'Code coverage',
          'Testing best practices'
        ]
      },
      {
        title: 'Level 12: Performance & Optimization',
        endPoint: 'Optimize frontend applications for speed',
        topics: [
          'Web performance fundamentals',
          'Lighthouse auditing',
          'Core Web Vitals',
          'Lazy loading images and components',
          'Code splitting strategies',
          'Caching strategies',
          'Service workers and PWA',
          'Image optimization',
          'Minification and compression',
          'CDN usage',
          'Performance monitoring',
          'Bundle analysis',
          'Rendering optimization'
        ]
      },
      {
        title: 'Level 13: Advanced Frontend Topics',
        endPoint: 'Build enterprise-grade frontend applications',
        topics: [
          'Progressive Web Apps (PWA)',
          'Web Components',
          'Server-Side Rendering (Next.js)',
          'Static Site Generation',
          'GraphQL client (Apollo, Relay)',
          'WebSockets for real-time features',
          'Internationalization (i18n)',
          'Accessibility (WCAG guidelines)',
          'SEO for SPAs',
          'Security best practices (XSS, CSRF)',
          'Micro-frontends architecture',
          'Design systems'
        ]
      },
      {
        title: 'Level 14: DevOps for Frontend',
        endPoint: 'Deploy and maintain production frontend applications',
        topics: [
          'CI/CD pipelines',
          'Deployment strategies',
          'Docker basics for frontend',
          'Nginx configuration',
          'Environment management',
          'Monitoring and logging',
          'Error tracking (Sentry)',
          'Analytics integration',
          'A/B testing',
          'Feature flags',
          'Blue-green deployment',
          'Canary releases'
        ]
      },
      {
        title: 'Level 15: Mastery',
        endPoint: 'Lead frontend teams and architect complex systems',
        topics: [
          'System design for frontend',
          'Architecture patterns',
          'Scalability strategies',
          'Team leadership',
          'Code review best practices',
          'Mentoring and teaching',
          'Open source contribution',
          'Technical writing',
          'Speaking at conferences',
          'Staying updated with trends',
          'Building design systems',
          'Cross-platform development'
        ]
      }
    ]
  },

  // Backend Development
  {
    id: 'backend-development',
    title: 'Backend Development Roadmap',
    shortTitle: 'Backend',
    description: 'Master server-side development, APIs, databases, and scalable architecture.',
    iconName: 'Server',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    grad: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    prerequisites: [
      'Basic programming knowledge',
      'Understanding of how the web works',
      'Familiarity with at least one programming language'
    ],
    levels: [
      {
        title: 'Level 1: Backend Fundamentals',
        endPoint: 'Understand backend development concepts',
        topics: [
          'What is backend development?',
          'Client-server architecture',
          'Request-response cycle',
          'HTTP methods (GET, POST, PUT, DELETE, PATCH)',
          'HTTP headers and status codes',
          'REST principles',
          'API basics',
          'Authentication vs Authorization',
          'Sessions and cookies',
          'Backend vs Frontend responsibilities'
        ]
      },
      {
        title: 'Level 2: Choose Your Language',
        endPoint: 'Master backend programming in chosen language',
        topics: [
          'Node.js: Runtime, event loop, modules, NPM, File system, Streams, Events',
          'Python: Syntax, virtual environments, Pip, Flask/FastAPI basics',
          'Java: JDK, syntax, OOP, Maven/Gradle, Spring Boot basics'
        ]
      },
      {
        title: 'Level 3: Web Framework',
        endPoint: 'Build web applications with frameworks',
        topics: [
          'Express.js (Node.js): Routing, Middleware, Request/Response, Error handling',
          'Django/Flask (Python): Routing, Views, Templates, Forms, ORM',
          'Spring Boot (Java): Controllers, Dependency injection, Spring MVC'
        ]
      },
      {
        title: 'Level 4: Database Fundamentals',
        endPoint: 'Design and query databases effectively',
        topics: [
          'Database concepts',
          'Relational vs Non-relational databases',
          'SQL basics',
          'Database design principles',
          'Normalization',
          'ACID properties',
          'Indexes and performance',
          'Transactions',
          'Joins',
          'Subqueries',
          'Aggregate functions',
          'Stored procedures'
        ]
      },
      {
        title: 'Level 5: Working with Databases',
        endPoint: 'Integrate databases with backend applications',
        topics: [
          'SQL: PostgreSQL/MySQL, CRUD operations, Schema design, Relationships',
          'Migrations, Sequelize/TypeORM, SQLAlchemy, Hibernate/JPA',
          'NoSQL: MongoDB installation, Document structure, CRUD operations',
          'Aggregation pipeline, Mongoose ODM, Indexing in MongoDB'
        ]
      },
      {
        title: 'Level 6: API Development',
        endPoint: 'Build robust, well-documented RESTful APIs',
        topics: [
          'RESTful API design',
          'Resource naming conventions',
          'HTTP methods and status codes',
          'Request validation',
          'Response formatting',
          'Pagination',
          'Filtering and sorting',
          'Versioning strategies',
          'HATEOAS',
          'API documentation (Swagger/OpenAPI)',
          'Postman for testing',
          'Rate limiting',
          'Caching strategies'
        ]
      },
      {
        title: 'Level 7: Authentication & Authorization',
        endPoint: 'Implement secure authentication systems',
        topics: [
          'Authentication vs Authorization',
          'Session-based authentication',
          'Cookie-based auth',
          'Token-based authentication',
          'JWT (JSON Web Tokens)',
          'OAuth 2.0',
          'OAuth flows',
          'Social login (Google, Facebook, GitHub)',
          'Password hashing (bcrypt)',
          'Salt and pepper',
          'Multi-factor authentication',
          'Role-based access control (RBAC)',
          'Permissions and scopes'
        ]
      },
      {
        title: 'Level 8: Advanced Backend Concepts',
        endPoint: 'Write maintainable, scalable backend code',
        topics: [
          'Middleware patterns',
          'Dependency injection',
          'Design patterns (Singleton, Factory, Observer)',
          'Repository pattern',
          'Service layer architecture',
          'Clean architecture',
          'SOLID principles',
          'Error handling strategies',
          'Logging (Winston, Morgan)',
          'Environment configuration',
          'Configuration management',
          'Feature flags'
        ]
      },
      {
        title: 'Level 9: Testing Backend Applications',
        endPoint: 'Write comprehensive test suites',
        topics: [
          'Unit testing',
          'Integration testing',
          'End-to-end testing',
          'Jest/Mocha (Node.js), Pytest (Python), JUnit (Java)',
          'Supertest for API testing',
          'Mocking and stubbing',
          'Test databases',
          'Test-driven development (TDD)',
          'Code coverage',
          'Continuous testing'
        ]
      },
      {
        title: 'Level 10: Caching & Performance',
        endPoint: 'Optimize backend performance',
        topics: [
          'Caching concepts',
          'Redis installation and setup',
          'Redis data types',
          'Caching strategies (cache-aside, write-through)',
          'Session storage with Redis',
          'Message queuing with Redis',
          'CDN basics',
          'Database query optimization',
          'Indexing strategies',
          'Connection pooling',
          'Load balancing basics',
          'Performance monitoring'
        ]
      },
      {
        title: 'Level 11: GraphQL',
        endPoint: 'Build GraphQL APIs',
        topics: [
          'GraphQL vs REST',
          'GraphQL schema',
          'Types and fields',
          'Queries and mutations',
          'Resolvers',
          'Subscriptions',
          'Apollo Server',
          'GraphiQL/Playground',
          'N+1 problem and solutions',
          'DataLoaders',
          'Schema stitching',
          'Federation basics'
        ]
      },
      {
        title: 'Level 12: Real-time Applications',
        endPoint: 'Build real-time features',
        topics: [
          'WebSockets protocol',
          'Socket.io',
          'Real-time communication patterns',
          'Chat applications',
          'Notifications',
          'Live updates',
          'Presence systems',
          'Broadcasting',
          'Rooms and namespaces',
          'Scaling WebSockets',
          'Alternatives (Server-Sent Events, Long Polling)'
        ]
      },
      {
        title: 'Level 13: Microservices Architecture',
        endPoint: 'Design microservices systems',
        topics: [
          'Monolith vs Microservices',
          'Microservices principles',
          'Service decomposition',
          'Inter-service communication',
          'REST between services',
          'Message brokers (RabbitMQ, Kafka)',
          'Event-driven architecture',
          'API Gateway pattern',
          'Service discovery',
          'Circuit breaker pattern',
          'Distributed tracing',
          'Container orchestration basics'
        ]
      },
      {
        title: 'Level 14: DevOps & Deployment',
        endPoint: 'Deploy and maintain production applications',
        topics: [
          'Version control (Git)',
          'CI/CD pipelines',
          'Docker containerization',
          'Docker Compose',
          'Kubernetes basics',
          'Cloud platforms (AWS, Azure, GCP)',
          'Server deployment',
          'Nginx reverse proxy',
          'SSL/TLS certificates',
          'Domain and DNS management',
          'Environment variables',
          'Secrets management',
          'Monitoring (Prometheus, Grafana)',
          'Logging aggregation'
        ]
      },
      {
        title: 'Level 15: Security',
        endPoint: 'Build secure backend systems',
        topics: [
          'OWASP Top 10',
          'SQL injection prevention',
          'XSS (Cross-Site Scripting)',
          'CSRF (Cross-Site Request Forgery)',
          'Input validation and sanitization',
          'Security headers',
          'HTTPS and TLS',
          'Encryption at rest',
          'Secure authentication',
          'Rate limiting and throttling',
          'DDoS protection',
          'Security auditing',
          'Penetration testing basics'
        ]
      },
      {
        title: 'Level 16: Message Queues & Async Processing',
        endPoint: 'Implement asynchronous processing',
        topics: [
          'Message queue concepts',
          'RabbitMQ',
          'Apache Kafka',
          'AWS SQS',
          'Pub/Sub patterns',
          'Task queues (Celery, Bull)',
          'Background jobs',
          'Scheduled tasks (Cron jobs)',
          'Event sourcing',
          'CQRS pattern',
          'Dead letter queues',
          'Retry mechanisms'
        ]
      },
      {
        title: 'Level 17: Search & Advanced Features',
        endPoint: 'Add advanced features to applications',
        topics: [
          'Full-text search',
          'Elasticsearch',
          'Algolia',
          'Search indexing',
          'Fuzzy search',
          'Autocomplete',
          'Geospatial queries',
          'File storage (AWS S3, Cloudinary)',
          'Image processing',
          'Video streaming basics',
          'Email integration',
          'SMS integration',
          'Payment gateway integration'
        ]
      },
      {
        title: 'Level 18: Mastery',
        endPoint: 'Architect enterprise-level backend systems',
        topics: [
          'System design principles',
          'Scalability patterns',
          'High availability',
          'Disaster recovery',
          'Database replication and sharding',
          'Distributed systems',
          'CAP theorem',
          'Consistency patterns',
          'Leadership and mentoring',
          'Code review excellence',
          'Architecture decision records',
          'Technical documentation',
          'Performance tuning at scale',
          'Cost optimization'
        ]
      }
    ]
  },

  // Database
  {
    id: 'database',
    title: 'Database Roadmap',
    shortTitle: 'Database',
    description: 'From SQL basics to advanced database administration, optimization, and cloud databases.',
    iconName: 'Database',
    color: '#10b981',
    bg: '#ecfdf5',
    grad: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    prerequisites: [
      'Basic computer knowledge',
      'Understanding of data and information',
      'Logical thinking'
    ],
    
    levels: [
      {
        title: 'Level 1: Database Fundamentals',
        endPoint: 'Understand database concepts and terminology',
        topics: [
          'What is a database?',
          'Database Management Systems (DBMS)',
          'Types of databases',
          'Relational vs Non-relational',
          'Database terminology',
          'Tables, rows, columns',
          'Keys (primary, foreign, candidate)',
          'Data types',
          'Constraints',
          'ACID properties',
          'CAP theorem basics'
        ]
      },
      {
        title: 'Level 2: SQL Basics',
        endPoint: 'Write basic SQL queries',
        topics: [
          'Introduction to SQL',
          'SQL syntax and structure',
          'CREATE DATABASE',
          'CREATE TABLE',
          'Data types in SQL',
          'INSERT statements',
          'SELECT statements',
          'WHERE clause',
          'Comparison operators',
          'Logical operators (AND, OR, NOT)',
          'UPDATE statements',
          'DELETE statements',
          'NULL values'
        ]
      },
      {
        title: 'Level 3: Querying Data',
        endPoint: 'Query and analyze data effectively',
        topics: [
          'ORDER BY',
          'LIMIT and OFFSET',
          'DISTINCT',
          'LIKE and wildcards',
          'IN operator',
          'BETWEEN operator',
          'Aggregate functions (COUNT, SUM, AVG, MIN, MAX)',
          'GROUP BY',
          'HAVING clause',
          'Aliases',
          'Comments in SQL',
          'Case statements'
        ]
      },
      {
        title: 'Level 4: Joins and Relationships',
        endPoint: 'Master complex queries with joins',
        topics: [
          'INNER JOIN',
          'LEFT JOIN',
          'RIGHT JOIN',
          'FULL OUTER JOIN',
          'CROSS JOIN',
          'SELF JOIN',
          'UNION and UNION ALL',
          'INTERSECT',
          'EXCEPT',
          'Subqueries',
          'Correlated subqueries',
          'EXISTS and NOT EXISTS'
        ]
      },
      {
        title: 'Level 5: Database Design',
        endPoint: 'Design efficient database schemas',
        topics: [
          'Entity-Relationship (ER) diagrams',
          'Entities and attributes',
          'Relationships (one-to-one, one-to-many, many-to-many)',
          'Cardinality',
          'Normalization (1NF, 2NF, 3NF, BCNF)',
          'Denormalization',
          'Indexes (clustered, non-clustered)',
          'Primary keys design',
          'Foreign keys',
          'Referential integrity',
          'Constraints (UNIQUE, CHECK, DEFAULT)'
        ]
      },
      {
        title: 'Level 6: Advanced SQL',
        endPoint: 'Write advanced SQL programs',
        topics: [
          'Views',
          'Materialized views',
          'Stored procedures',
          'Functions (scalar, table-valued)',
          'Triggers',
          'Transactions',
          'COMMIT and ROLLBACK',
          'SAVEPOINT',
          'Isolation levels',
          'Locking mechanisms',
          'Common Table Expressions (CTEs)',
          'Window functions',
          'Ranking functions (ROW_NUMBER, RANK, DENSE_RANK)'
        ]
      },
      {
        title: 'Level 7: Performance Optimization',
        endPoint: 'Optimize database performance',
        topics: [
          'Query execution plans',
          'EXPLAIN command',
          'Index optimization',
          'Covering indexes',
          'Composite indexes',
          'Query optimization techniques',
          'Avoiding N+1 queries',
          'Connection pooling',
          'Caching strategies',
          'Partitioning',
          'Sharding basics',
          'Database monitoring',
          'Slow query logs'
        ]
      },
      {
        title: 'Level 8: PostgreSQL/MySQL',
        endPoint: 'Master relational database systems',
        topics: [
          'Installation and setup',
          'Configuration',
          'User management',
          'Roles and permissions',
          'Backup and restore',
          'pgAdmin/phpMyAdmin',
          'Import/Export data',
          'Scheduled tasks',
          'Extensions',
          'Full-text search',
          'JSON support',
          'Advanced data types',
          'Replication basics'
        ]
      },
      {
        title: 'Level 9: NoSQL Databases - MongoDB',
        endPoint: 'Work with document databases',
        topics: [
          'NoSQL concepts',
          'Document databases',
          'MongoDB installation',
          'MongoDB shell',
          'CRUD operations',
          'Embedded documents',
          'Arrays',
          'Data modeling',
          'Indexes in MongoDB',
          'Aggregation framework',
          'Pipelines',
          'Map-Reduce',
          'Transactions',
          'GridFS'
        ]
      },
      {
        title: 'Level 10: Redis',
        endPoint: 'Implement caching and real-time features',
        topics: [
          'In-memory databases',
          'Redis installation',
          'Data types (strings, hashes, lists, sets, sorted sets)',
          'Commands and operations',
          'Pub/Sub',
          'Caching with Redis',
          'Session management',
          'Persistence (RDB, AOF)',
          'Redis transactions',
          'Lua scripting',
          'Redis clusters',
          'Memory optimization'
        ]
      },
      {
        title: 'Level 11: Database Administration',
        endPoint: 'Administer production databases',
        topics: [
          'User and role management',
          'Granting and revoking permissions',
          'Security best practices',
          'Encryption (at rest, in transit)',
          'Audit logging',
          'Backup strategies',
          'Point-in-time recovery',
          'Disaster recovery planning',
          'High availability',
          'Replication (master-slave, master-master)',
          'Clustering',
          'Load balancing',
          'Monitoring and alerting'
        ]
      },
      {
        title: 'Level 12: ORM (Object-Relational Mapping)',
        endPoint: 'Use ORMs effectively in applications',
        topics: [
          'ORM concepts',
          'Sequelize (Node.js)',
          'TypeORM',
          'SQLAlchemy (Python)',
          'Hibernate (Java)',
          'Entity Framework (.NET)',
          'Mongoose (MongoDB)',
          'Prisma',
          'Query builders',
          'Migration tools',
          'Seed data',
          'Relationships in ORM',
          'Eager vs Lazy loading'
        ]
      },
      {
        title: 'Level 13: Cloud Databases',
        endPoint: 'Deploy and manage cloud databases',
        topics: [
          'AWS RDS',
          'AWS DynamoDB',
          'Google Cloud SQL',
          'Google Firestore',
          'Azure SQL Database',
          'Azure Cosmos DB',
          'Database as a Service (DBaaS)',
          'Scaling in cloud',
          'Cost optimization',
          'Managed services',
          'Serverless databases',
          'Multi-region deployment'
        ]
      },
      {
        title: 'Level 14: Graph Databases',
        endPoint: 'Work with graph databases',
        topics: [
          'Graph database concepts',
          'Neo4j installation',
          'Nodes and relationships',
          'Properties',
          'Cypher query language',
          'Graph modeling',
          'Use cases',
          'Traversals',
          'Indexes in graph DB',
          'Recommendations engines',
          'Social network analysis',
          'Knowledge graphs'
        ]
      },
      {
        title: 'Level 15: Time-Series & Specialized Databases',
        endPoint: 'Understand specialized database systems',
        topics: [
          'Time-series databases',
          'InfluxDB',
          'Prometheus',
          'Columnar databases',
          'Cassandra',
          'HBase',
          'Search engines',
          'Elasticsearch',
          'Vector databases',
          'Use cases for each type',
          'Choosing the right database'
        ]
      },
      {
        title: 'Level 16: Data Warehousing',
        endPoint: 'Design data warehousing solutions',
        topics: [
          'Data warehouse concepts',
          'OLTP vs OLAP',
          'Star and Snowflake schemas',
          'Fact and dimension tables',
          'ETL processes',
          'Data lakes',
          'Amazon Redshift',
          'Google BigQuery',
          'Snowflake',
          'Data modeling for analytics',
          'Business intelligence basics'
        ]
      },
      {
        title: 'Level 17: Advanced Topics',
        endPoint: 'Master advanced database concepts',
        topics: [
          'Distributed databases',
          'Consistency models',
          'Eventual consistency',
          'Two-phase commit',
          'Distributed transactions',
          'Change data capture',
          'Database versioning',
          'Multi-tenancy',
          'Database testing',
          'Data masking',
          'GDPR and compliance',
          'Data retention policies'
        ]
      },
      {
        title: 'Level 18: Mastery',
        endPoint: 'Architect enterprise database systems',
        topics: [
          'Database architecture design',
          'Scalability strategies',
          'Sharding strategies',
          'Replication topologies',
          'Disaster recovery at scale',
          'Performance tuning',
          'Capacity planning',
          'Cost optimization',
          'Team leadership',
          'Database governance',
          'Migration strategies',
          'Legacy system modernization',
          'Consulting and best practices'
        ]
      }
    ]
  },

  // DSA
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms (DSA)',
    shortTitle: 'DSA',
    description: 'Core logic, memory optimization, and algorithmic problem-solving for coding interviews.',
    iconName: 'Binary',
    color: '#14b8a6',
    bg: '#ccfbf1',
    grad: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
    prerequisites: [
      'Proficiency in at least one programming language (C/C++/Java/Python)',
      'Basic understanding of programming constructs',
      'Logical thinking ability'
    ],
    levels: [
      {
        title: 'Level 1: Foundations',
        endPoint: 'Analyze algorithm efficiency',
        topics: [
          'Algorithm analysis',
          'Time complexity (Big O notation)',
          'Space complexity',
          'Best, average, worst case analysis',
          'Mathematical foundations',
          'Logarithms and exponents',
          'Basic proof techniques',
          'Problem-solving approach'
        ]
      },
      {
        title: 'Level 2: Basic Data Structures',
        endPoint: 'Implement fundamental data structures',
        topics: [
          'Arrays (1D, 2D, dynamic)',
          'Array operations and algorithms',
          'Strings and string algorithms',
          'Linked Lists (singly, doubly, circular)',
          'Stack (array and linked list implementation)',
          'Queue (simple, circular, priority)',
          'Deque',
          'Applications of stacks and queues'
        ]
      },
      {
        title: 'Level 3: Basic Algorithms',
        endPoint: 'Implement and compare sorting/searching algorithms',
        topics: [
          'Searching algorithms (linear, binary)',
          'Sorting: Bubble, Selection, Insertion',
          'Sorting: Merge, Quick, Heap',
          'Sorting: Counting, Radix',
          'Comparison of sorting algorithms',
          'Recursive algorithms',
          'Divide and conquer paradigm'
        ]
      },
      {
        title: 'Level 4: Intermediate Data Structures',
        endPoint: 'Master hash-based and tree-based structures',
        topics: [
          'Hash tables and hashing',
          'Collision resolution techniques',
          'Hash functions',
          'Sets and maps implementation',
          'Heaps (min heap, max heap)',
          'Heap operations',
          'Trie (prefix tree)',
          'Segment trees',
          'Binary Indexed Tree (Fenwick Tree)'
        ]
      },
      {
        title: 'Level 5: Trees',
        endPoint: 'Solve complex tree-based problems',
        topics: [
          'Tree terminology and properties',
          'Binary trees',
          'Binary tree traversals (inorder, preorder, postorder, level order)',
          'Binary Search Trees (BST)',
          'BST operations (insert, delete, search)',
          'Balanced BST (AVL trees)',
          'Red-Black trees',
          'B-trees and B+ trees',
          'Segment/Fenwick trees (Advanced)',
          'Tree problems and patterns'
        ]
      },
      {
        title: 'Level 6: Graphs',
        endPoint: 'Solve graph theory problems',
        topics: [
          'Graph representation (adjacency matrix, list)',
          'Graph terminology',
          'Graph traversals (BFS, DFS)',
          'Cycle detection & Topological sorting',
          'Shortest path: Dijkstra, Bellman-Ford, Floyd-Warshall',
          'Minimum Spanning Tree: Prim, Kruskal',
          'Strongly connected components',
          'Network flow algorithms',
          'Graph coloring'
        ]
      },
      {
        title: 'Level 7: Advanced Algorithms',
        endPoint: 'Master algorithmic problem-solving',
        topics: [
          'Greedy algorithms',
          'Dynamic programming (Memoization, Tabulation)',
          'Classic DP problems (grids, trees, graphs)',
          'Backtracking algorithms',
          'Branch and bound',
          'Randomized algorithms',
          'String algorithms (KMP, Rabin-Karp, Z-algorithm, Suffix arrays)'
        ]
      },
      {
        title: 'Level 8: Advanced Topics',
        endPoint: 'Handle competitive programming challenges',
        topics: [
          'Bit manipulation',
          'Number theory algorithms',
          'Combinatorics',
          'Matrix exponentiation',
          'Game theory',
          'Computational geometry basics',
          'Disjoint Set Union (DSU)',
          'Heavy-Light Decomposition',
          'Square root decomposition',
          "Mo's algorithms"
        ]
      },
      {
        title: 'Level 9: Problem-Solving Mastery',
        endPoint: 'Excel in coding interviews and competitions',
        topics: [
          'Pattern recognition',
          'Two-pointer technique & Sliding window',
          'Prefix sum',
          'Meet in the middle',
          'Binary search on answer',
          'Coordinate compression',
          'Offline queries processing',
          'Problem decomposition',
          'Contest strategies'
        ]
      }
    ]
  },

  // OOP
  {
    id: 'oop',
    title: 'Object-Oriented Programming (OOP) Roadmap',
    shortTitle: 'OOP',
    description: 'Design robust, scalable, and maintainable software architectures.',
    iconName: 'Box',
    color: '#ec4899',
    bg: '#fdf2f8',
    grad: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
    prerequisites: [
      'Basic programming knowledge in any language',
      'Understanding of variables, functions, and control structures'
    ],
    levels: [
      {
        title: 'Level 1: OOP Fundamentals',
        endPoint: 'Understand basic OOP concepts',
        topics: [
          'What is Object-Oriented Programming?',
          'Procedural vs Object-Oriented programming',
          'Classes and objects',
          'Instance vs Class',
          'Attributes and methods',
          'Constructor and destructor',
          'The "this" pointer/reference',
          'Object lifecycle',
          'Memory allocation for objects'
        ]
      },
      {
        title: 'Level 2: Encapsulation',
        endPoint: 'Implement data hiding and encapsulation',
        topics: [
          'Information hiding principle',
          'Access modifiers (public, private, protected)',
          'Getters and setters',
          'Data abstraction',
          'Properties',
          'Immutable objects',
          'Const correctness',
          'Friend functions/classes (C++)',
          'Package-private access'
        ]
      },
      {
        title: 'Level 3: Inheritance',
        endPoint: 'Design class hierarchies effectively',
        topics: [
          'Base and derived classes',
          'Types of inheritance (Single, Multiple, Multilevel, etc.)',
          'Method overriding',
          'Super keyword',
          'Constructor chaining',
          'Inheritance and access modifiers',
          'Abstract classes',
          'Final/sealed classes',
          'Composition vs Inheritance'
        ]
      },
      {
        title: 'Level 4: Polymorphism',
        endPoint: 'Implement polymorphic behavior',
        topics: [
          'Compile-time polymorphism (method overloading)',
          'Runtime polymorphism (method overriding)',
          'Virtual functions/methods',
          'Abstract methods',
          'Interfaces/Protocols',
          'Duck typing',
          'Subtype & Parametric polymorphism (generics)',
          'Ad-hoc polymorphism',
          'Operator overloading'
        ]
      },
      {
        title: 'Level 5: Abstraction',
        endPoint: 'Create clean abstractions',
        topics: [
          'Abstract classes and methods',
          'Interfaces',
          'Abstract data types',
          'Design by contract',
          'API design principles',
          'Layered architecture',
          'Facade pattern',
          'Adapter pattern',
          'Bridge pattern',
          'Separation of concerns'
        ]
      },
      {
        title: 'Level 6: Advanced OOP Concepts',
        endPoint: 'Apply OOP design principles',
        topics: [
          'SOLID principles',
          'Design patterns: Creational (Singleton, Factory, Builder)',
          'Design patterns: Structural (Adapter, Decorator, Proxy)',
          'Design patterns: Behavioral (Observer, Strategy, Command)',
          'Dependency Injection',
          'Inversion of Control',
          'Reflection and metaprogramming',
          'Mixins and traits'
        ]
      },
      {
        title: 'Level 7: OOP in Practice',
        endPoint: 'Design robust object-oriented systems',
        topics: [
          'UML diagrams',
          'Class design best practices',
          'Refactoring techniques',
          'Code smells in OOP',
          'GRASP patterns',
          'Domain-Driven Design basics',
          'Entity-Relationship modeling',
          'ORM concepts',
          'Testing OOP code',
          'Mocking and stubbing'
        ]
      },
      {
        title: 'Level 8: Mastery',
        endPoint: 'Architect enterprise-level OOP systems',
        topics: [
          'Architectural patterns (MVC, MVVM, MVP)',
          'Microservices and OOP',
          'Functional-OOP hybrid approaches',
          'Concurrent OOP design',
          'Performance considerations',
          'Memory management in OOP',
          'Framework design & API versioning',
          'Clean Architecture & Hexagonal Architecture'
        ]
      }
    ]
  },

  // MERN Stack
  {
    id: 'mern-stack',
    title: 'MERN Stack Full Stack Roadmap',
    shortTitle: 'MERN Stack',
    description: 'Complete guide to building modern full-stack web applications with React and Node.js.',
    iconName: 'Server',
    color: '#22c55e',
    bg: '#f0fdf4',
    grad: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    prerequisites: [
      'Basic computer knowledge',
      'Understanding of how web works',
      'HTML, CSS basics (helpful but not mandatory)'
    ],
    levels: [
      {
        title: 'Level 1: Web Fundamentals',
        endPoint: 'Build responsive static websites',
        topics: [
          'How the web works (HTTP/HTTPS)',
          'Client-server architecture',
          'DNS and domain names',
          'Web browsers and rendering',
          'HTML5 (Semantic elements, Forms, Canvas, SVG)',
          'CSS3 (Box model, Flexbox, Grid, Responsive design)',
          'Version Control (Git & GitHub)'
        ]
      },
      {
        title: 'Level 2: JavaScript Fundamentals',
        endPoint: 'Create interactive web pages',
        topics: [
          'JavaScript syntax and basics',
          'Variables (let, const, var) & Data types',
          'Operators & Control structures',
          'Functions (declaration, expression, arrow)',
          'Scope, closures, and hoisting',
          'Arrays, Objects, and JSON',
          'Error handling (try-catch)',
          'DOM manipulation & Events',
          'BOM (Browser Object Model)'
        ]
      },
      {
        title: 'Level 3: Advanced JavaScript',
        endPoint: 'Master modern JavaScript development',
        topics: [
          'ES6+ features (Template literals, Destructuring)',
          'Spread and rest operators',
          'Modules (import/export)',
          'Promises & Async/await',
          'Fetch API & AJAX',
          'LocalStorage, SessionStorage, Cookies',
          'JavaScript design patterns',
          'Event loop and concurrency',
          'Prototypes, inheritance, Classes',
          'Functional programming concepts'
        ]
      },
      {
        title: 'Level 4: TypeScript (Optional but Recommended)',
        endPoint: 'Write type-safe JavaScript code',
        topics: [
          'TypeScript basics & Type annotations',
          'Interfaces vs Types',
          'Generics & Enums',
          'Utility types & Decorators',
          'TypeScript configuration',
          'Integrating TypeScript with React'
        ]
      },
      {
        title: 'Level 5: React.js Frontend',
        endPoint: 'Build dynamic single-page applications',
        topics: [
          'React fundamentals & JSX syntax',
          'Components (functional and class)',
          'Props, state, and Component lifecycle',
          'Hooks: useState, useEffect, useContext, useReducer',
          'Hooks: useCallback, useMemo, Custom hooks',
          'Event handling, Conditional rendering, Lists and keys',
          'Forms in React & React Router',
          'State management (Context API, Redux/Zustand)',
          'Styling in React (CSS Modules, Styled Components)',
          'Component libraries (Material-UI, Ant Design)'
        ]
      },
      {
        title: 'Level 6: Advanced React',
        endPoint: 'Build production-ready React applications',
        topics: [
          'Performance optimization',
          'Code splitting and lazy loading',
          'Error boundaries',
          'Higher-Order Components & Render props',
          'React Portals, Suspense and Concurrent features',
          'Server-Side Rendering (Next.js) & Static Site Generation',
          'Progressive Web Apps (PWA)',
          'Testing React apps (Jest, React Testing Library)'
        ]
      },
      {
        title: 'Level 7: Node.js Backend',
        endPoint: 'Build RESTful APIs with Node.js',
        topics: [
          'Introduction to Node.js & Event loop',
          'Modules (CommonJS, ES modules)',
          'NPM and package management',
          'File system operations, Streams and buffers',
          'Events and EventEmitters, HTTP module',
          'Express.js framework (Routing, Middleware)',
          'Request/Response handling, Error handling',
          'RESTful API design & Authentication and authorization',
          'JWT, OAuth, Session management',
          'File uploads, Input validation, Security best practices'
        ]
      },
      {
        title: 'Level 8: Database Management',
        endPoint: 'Design and implement database solutions',
        topics: [
          'Database fundamentals (SQL vs NoSQL)',
          'MongoDB (Installation, CRUD operations, Aggregation)',
          'Indexing, Schema design, Relationships and references',
          'Mongoose ODM (Schemas, models, Validation)',
          'Mongoose Middleware & Population',
          'Database optimization',
          'Transactions',
          'Backup and recovery'
        ]
      },
      {
        title: 'Level 9: Advanced Backend',
        endPoint: 'Build scalable backend systems',
        topics: [
          'GraphQL (Schema design, Resolvers, Apollo Server)',
          'WebSockets and Socket.io & Real-time applications',
          'Message queues (RabbitMQ, Redis)',
          'Caching strategies (Redis)',
          'Microservices architecture',
          'API versioning & Rate limiting',
          'API documentation (Swagger/OpenAPI)',
          'Serverless functions'
        ]
      },
      {
        title: 'Level 10: DevOps & Deployment',
        endPoint: 'Deploy and maintain production applications',
        topics: [
          'Environment variables & Configuration management',
          'Docker and containerization & Docker Compose',
          'CI/CD pipelines',
          'Cloud platforms (AWS, Azure, GCP)',
          'Deployment strategies (PM2, Nginx reverse proxy)',
          'SSL/TLS certificates',
          'Monitoring, logging, and performance optimization',
          'Load balancing'
        ]
      },
      {
        title: 'Level 11: Testing',
        endPoint: 'Write comprehensive test suites',
        topics: [
          'Unit testing & Integration testing',
          'End-to-end testing',
          'Jest testing framework & Supertest',
          'React Testing Library & Cypress for E2E testing',
          'Test-driven development (TDD)',
          'Mocking, stubbing, and Code coverage'
        ]
      },
      {
        title: 'Level 12: Mastery',
        endPoint: 'Architect and lead full-stack MERN projects',
        topics: [
          'System design principles & Scalability patterns',
          'Database sharding and replication',
          'Caching strategies at scale',
          'Security best practices (OWASP)',
          'Performance monitoring & Error tracking',
          'A/B testing & Analytics integration',
          'SEO optimization & Accessibility (WCAG)',
          'Code quality tools, Team collaboration, Agile methodologies'
        ]
      }
    ]
  },

  // Java Full Stack
  {
    id: 'java-full-stack',
    title: 'Java Full Stack Roadmap',
    shortTitle: 'Java Full Stack',
    description: 'Comprehensive guide to building enterprise-grade Java backend paired with modern frontend frameworks.',
    iconName: 'Layers',
    color: '#dc2626',
    bg: '#fef2f2',
    grad: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
    prerequisites: [
      'Basic programming knowledge',
      'Understanding of web fundamentals',
      'Core Java basics'
    ],
    levels: [
      {
        title: 'Level 1: Web Fundamentals',
        endPoint: 'Build responsive web interfaces',
        topics: [
          'HTML5 (semantic elements, forms, validation)',
          'CSS3 (flexbox, grid, responsive design)',
          'JavaScript fundamentals & DOM manipulation',
          'ES6+ features',
          'Git and GitHub',
          'HTTP/HTTPS protocols',
          'REST basics',
          'JSON and XML'
        ]
      },
      {
        title: 'Level 2: Advanced Frontend',
        endPoint: 'Create dynamic frontend applications',
        topics: [
          'TypeScript',
          'Modern JavaScript frameworks (Angular or React)',
          'Component-based architecture',
          'State management & Routing',
          'Forms and validation',
          'HTTP client (Axios, Fetch)',
          'Build tools (Webpack, Vite)',
          'CSS preprocessors & UI frameworks'
        ]
      },
      {
        title: 'Level 3: Core Java Mastery',
        endPoint: 'Master core Java programming',
        topics: [
          'Advanced Java concepts & Collections Framework',
          'Stream API & Lambda expressions',
          'Multithreading and concurrency',
          'Exception handling & File I/O and NIO',
          'JDBC, Annotations, Reflection API',
          'Generics & Serialization',
          'Networking & JVM internals',
          'Garbage collection & Performance tuning'
        ]
      },
      {
        title: 'Level 4: Build Tools & Testing',
        endPoint: 'Implement professional build and test processes',
        topics: [
          'Maven/Gradle & Dependency management',
          'Build lifecycle',
          'JUnit 5 & Mockito',
          'Integration testing',
          'Test-driven development',
          'Code coverage tools (JaCoCo)',
          'Static code analysis (SonarQube)'
        ]
      },
      {
        title: 'Level 5: Spring Framework',
        endPoint: 'Build enterprise Java applications',
        topics: [
          'Spring Core (IoC, Dependency Injection, Bean configuration)',
          'Spring Boot (Auto-configuration, Starters, Actuator)',
          'Spring MVC (Controllers, Request mapping, View resolvers, Validation)',
          'Spring Data JPA (Entity mapping, Repository pattern, JPQL, Transactions)'
        ]
      },
      {
        title: 'Level 6: Spring Advanced',
        endPoint: 'Create secure, production-ready APIs',
        topics: [
          'Spring Security (Authentication, Authorization, OAuth2, JWT)',
          'Spring REST (RESTful web services, Exception handling, HATEOAS)',
          'Spring AOP (Aspect-Oriented Programming)',
          'Spring Batch & Scheduler',
          'API documentation (Swagger/OpenAPI)'
        ]
      },
      {
        title: 'Level 7: Database Management',
        endPoint: 'Design and optimize database systems',
        topics: [
          'Relational databases (MySQL/PostgreSQL, Design, Normalization)',
          'Transactions, Stored procedures, Views, Triggers',
          'ORM with Hibernate (Mapping, Associations, Caching, Lazy loading)',
          'NoSQL databases (MongoDB, Redis)',
          'Database migration tools (Flyway, Liquibase)',
          'Connection pooling (HikariCP)'
        ]
      },
      {
        title: 'Level 8: Microservices Architecture',
        endPoint: 'Build distributed microservices systems',
        topics: [
          'Microservices principles',
          'Spring Cloud (Service Discovery, API Gateway, Circuit Breaker)',
          'Inter-service communication (REST, Feign Client, WebFlux)',
          'Distributed tracing (Sleuth, Zipkin)',
          'Message brokers (Kafka, RabbitMQ)',
          'Docker for microservices & Kubernetes basics'
        ]
      },
      {
        title: 'Level 9: DevOps & Cloud',
        endPoint: 'Deploy and manage cloud-native applications',
        topics: [
          'Docker containerization & Kubernetes orchestration',
          'CI/CD pipelines (Jenkins, GitHub Actions, GitLab CI)',
          'Cloud platforms (AWS, Azure, Google Cloud)',
          'Infrastructure as Code (Terraform)',
          'Monitoring and logging (Prometheus, Grafana, ELK Stack)',
          'Application Performance Monitoring (APM)'
        ]
      },
      {
        title: 'Level 10: Advanced Topics',
        endPoint: 'Implement advanced architectural patterns',
        topics: [
          'Reactive programming (Spring WebFlux)',
          'GraphQL with Spring',
          'Caching strategies (Redis, Ehcache)',
          'Search engines (Elasticsearch)',
          'WebSockets and STOMP',
          'Serverless architecture',
          'Event sourcing & CQRS pattern',
          'API versioning strategies & Rate limiting'
        ]
      },
      {
        title: 'Level 11: Security',
        endPoint: 'Build secure enterprise applications',
        topics: [
          'Application security principles (OWASP Top 10)',
          'SQL injection prevention, XSS and CSRF protection',
          'Secure authentication & Password hashing (BCrypt)',
          'HTTPS and SSL/TLS & Security headers',
          'Input validation and sanitization',
          'Security testing & Compliance (GDPR, PCI-DSS)'
        ]
      },
      {
        title: 'Level 12: System Design & Architecture',
        endPoint: 'Architect enterprise-scale Java systems',
        topics: [
          'System design principles & Scalability patterns',
          'Load balancing, Database replication and sharding',
          'Caching at scale & Message queues at scale',
          'Design patterns (Creational, Structural, Behavioral)',
          'Clean Architecture, DDD, Hexagonal Architecture',
          'API design best practices & Capacity planning'
        ]
      },
      {
        title: 'Level 13: Soft Skills & Best Practices',
        endPoint: 'Become a well-rounded Java full-stack developer',
        topics: [
          'Code review practices & Clean code principles',
          'Refactoring techniques & Design documentation',
          'Agile methodologies (Scrum, Kanban)',
          'Version control best practices',
          'Team collaboration & Technical writing',
          'Continuous learning'
        ]
      }
    ]
  },

  // Aptitude
  {
    id: 'aptitude',
    title: 'Aptitude Roadmap',
    shortTitle: 'Aptitude',
    description: 'Master quantitative aptitude for placement tests and competitive exams.',
    iconName: 'Calculator',
    color: '#64748b',
    bg: '#f1f5f9',
    grad: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
    prerequisites: [
      'Basic mathematics knowledge (up to 10th grade)',
      'Logical thinking ability',
      'Reading comprehension'
    ],
    levels: [
      {
        title: 'Level 1: Number System',
        endPoint: 'Solve number system problems quickly',
        topics: [
          'Types of numbers (natural, whole, integers, rational, irrational)',
          'Place value and face value',
          'Divisibility rules',
          'Prime and composite numbers',
          'LCM and HCF',
          'Remainder theorem',
          'Unit digit concept',
          'Number of zeros',
          'Factors and multiples',
          'Sum of numbers',
          'Progressions (AP, GP, HP)'
        ]
      },
      {
        title: 'Level 2: Simplification & Approximation',
        endPoint: 'Simplify complex expressions rapidly',
        topics: [
          'BODMAS rule',
          'Fractions and decimals',
          'Percentage calculations',
          'Square and cube roots',
          'Surds and indices',
          'Approximation techniques',
          'Quick calculation tricks',
          'Mental math strategies',
          'Vinculum',
          'Brackets removal'
        ]
      },
      {
        title: 'Level 3: Percentage',
        endPoint: 'Master percentage calculations',
        topics: [
          'Percentage basics',
          'Percentage increase/decrease',
          'Successive percentage',
          'Population growth',
          'Depreciation',
          'Election problems',
          'Income and expenditure',
          'Comparison problems',
          'Percentage change',
          'Application-based problems'
        ]
      },
      {
        title: 'Level 4: Profit, Loss & Discount',
        endPoint: 'Solve profit and loss problems',
        topics: [
          'Cost price and selling price',
          'Profit and loss calculation',
          'Profit/loss percentage',
          'Marked price and discount',
          'Successive discount',
          'Dishonest dealing',
          'Partnership basics',
          'Break-even point',
          'Application problems'
        ]
      },
      {
        title: 'Level 5: Ratio & Proportion',
        endPoint: 'Solve ratio and proportion problems',
        topics: [
          'Ratio basics',
          'Proportion',
          'Continued proportion',
          'Mean, third, fourth proportional',
          'Direct and inverse proportion',
          'Compound proportion',
          'Partnership',
          'Ratio applications',
          'Mixtures basics',
          'Age problems with ratio'
        ]
      },
      {
        title: 'Level 6: Average',
        endPoint: 'Calculate averages efficiently',
        topics: [
          'Average formula',
          'Weighted average',
          'Combined average',
          'Average speed',
          'Average age',
          'Replacement problems',
          'Deviation method',
          'Applications of average'
        ]
      },
      {
        title: 'Level 7: Time & Work',
        endPoint: 'Solve time and work problems',
        topics: [
          'Work and time basics',
          'Work efficiency',
          'Combined work',
          'Pipes and cisterns',
          'Work and wages',
          'Men, days, work relationship',
          'Chain rule',
          'Group work problems',
          'Alternate day work',
          'Efficiency-based problems'
        ]
      },
      {
        title: 'Level 8: Time, Speed & Distance',
        endPoint: 'Master time, speed, distance problems',
        topics: [
          'Speed, distance, time relationship',
          'Average speed',
          'Relative speed',
          'Trains problems',
          'Boats and streams',
          'Races',
          'Circular motion',
          'Meeting point problems',
          'Upstream and downstream',
          'Application problems'
        ]
      },
      {
        title: 'Level 9: Simple & Compound Interest',
        endPoint: 'Solve interest-related problems',
        topics: [
          'Simple interest formula',
          'Compound interest formula',
          'Difference between SI and CI',
          'Half-yearly, quarterly compounding',
          'Installments',
          'Population growth/decay',
          'Depreciation',
          'Rate of interest problems',
          'Time period calculations'
        ]
      },
      {
        title: 'Level 10: Mixture & Alligation',
        endPoint: 'Solve mixture problems',
        topics: [
          'Mixture basics',
          'Alligation rule',
          'Replacement problems',
          'Mixing different quantities',
          'Price and quality mixing',
          'Repeated dilution',
          'Application problems'
        ]
      },
      {
        title: 'Level 11: Algebra',
        endPoint: 'Solve algebraic problems',
        topics: [
          'Algebraic identities',
          'Linear equations',
          'Quadratic equations',
          'Polynomials',
          'Factorization',
          'Simplification',
          'Inequalities',
          'Functions',
          'Sequence and series'
        ]
      },
      {
        title: 'Level 12: Geometry',
        endPoint: 'Solve geometry problems',
        topics: [
          'Lines and angles',
          'Triangles (types, properties)',
          'Congruence and similarity',
          'Circles (chords, tangents)',
          'Quadrilaterals',
          'Polygons',
          'Coordinate geometry basics',
          'Mensuration (2D)',
          'Area and perimeter formulas'
        ]
      },
      {
        title: 'Level 13: Mensuration',
        endPoint: 'Calculate areas and volumes',
        topics: [
          '2D shapes (area, perimeter)',
          '3D shapes (volume, surface area)',
          'Cube and cuboid',
          'Cylinder',
          'Cone',
          'Sphere and hemisphere',
          'Prism and pyramid',
          'Frustum',
          'Combined shapes'
        ]
      },
      {
        title: 'Level 14: Trigonometry',
        endPoint: 'Solve trigonometry problems',
        topics: [
          'Trigonometric ratios',
          'Trigonometric identities',
          'Height and distance',
          'Angle of elevation and depression',
          'Values of standard angles',
          'Complementary angles',
          'Maximum and minimum values',
          'Application problems'
        ]
      },
      {
        title: 'Level 15: Data Interpretation',
        endPoint: 'Interpret and analyze data',
        topics: [
          'Tables',
          'Bar graphs',
          'Line graphs',
          'Pie charts',
          'Mixed graphs',
          'Caselets',
          'Radar charts',
          'Missing data interpretation',
          'Comparison and analysis',
          'Quick calculation for DI'
        ]
      },
      {
        title: 'Level 16: Probability',
        endPoint: 'Solve probability problems',
        topics: [
          'Basic probability',
          'Coin and dice problems',
          'Cards',
          'Balls and bags',
          'Conditional probability',
          'Independent events',
          'Permutations and combinations basics',
          'Application problems'
        ]
      },
      {
        title: 'Level 17: Permutation & Combination',
        endPoint: 'Solve P&C problems',
        topics: [
          'Fundamental counting principle',
          'Factorials',
          'Permutations',
          'Combinations',
          'Arrangements',
          'Selections',
          'Circular permutations',
          'Word formation',
          'Distribution problems'
        ]
      },
      {
        title: 'Level 18: Mastery & Speed Building',
        endPoint: 'Excel in aptitude tests with speed and accuracy',
        topics: [
          'Short tricks and techniques',
          'Mental calculation',
          'Time management',
          'Question selection strategy',
          'Mock tests',
          'Previous year papers',
          'Speed mathematics',
          'Error analysis',
          'Revision strategies',
          'Exam temperament'
        ]
      }
    ]
  },

  // Reasoning
  {
    id: 'reasoning',
    title: 'Reasoning Roadmap',
    shortTitle: 'Reasoning',
    description: 'Develop logical and analytical reasoning skills for competitive exams and placements.',
    iconName: 'Brain',
    color: '#a855f7',
    bg: '#faf5ff',
    grad: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
    prerequisites: [
      'Logical thinking ability',
      'Observation skills',
      'Pattern recognition'
    ],
    levels: [
      {
        title: 'Level 1: Coding-Decoding',
        endPoint: 'Decode patterns quickly',
        topics: [
          'Letter coding',
          'Number coding',
          'Symbol coding',
          'Substitution coding',
          'Conditional coding',
          'Matrix coding',
          'Clock coding',
          'Binary coding',
          'New pattern coding'
        ]
      },
      {
        title: 'Level 2: Series & Sequences',
        endPoint: 'Identify series patterns',
        topics: [
          'Number series',
          'Alphabet series',
          'Alpha-numeric series',
          'Missing number series',
          'Wrong number series',
          'Double series',
          'Mixed series',
          'Pattern recognition',
          'Difference method',
          'Multiplication/division patterns'
        ]
      },
      {
        title: 'Level 3: Analogy',
        endPoint: 'Solve analogy problems',
        topics: [
          'Number analogy',
          'Letter analogy',
          'Word analogy',
          'Mixed analogy',
          'Relationship-based analogy',
          'Classification',
          'Odd one out',
          'Pair formation'
        ]
      },
      {
        title: 'Level 4: Classification',
        endPoint: 'Identify classification patterns',
        topics: [
          'Letter classification',
          'Number classification',
          'Word classification',
          'Meaningful order',
          'Odd pair identification',
          'Grouping',
          'Category-based classification'
        ]
      },
      {
        title: 'Level 5: Blood Relations',
        endPoint: 'Solve blood relation problems',
        topics: [
          'Family tree basics',
          'Relation codes',
          'Coded blood relations',
          'Pointing problems',
          'Conversation-based problems',
          'Generation gaps',
          'Complex family trees',
          'Mixed relations'
        ]
      },
      {
        title: 'Level 6: Direction Sense',
        endPoint: 'Solve direction and distance problems',
        topics: [
          'Basic directions',
          'Distance calculation',
          'Shadow-based problems',
          'Rotation of directions',
          'Minimum distance',
          'Coded directions',
          'Complex direction problems',
          'Pythagoras theorem application'
        ]
      },
      {
        title: 'Level 7: Ordering & Ranking',
        endPoint: 'Solve ranking problems',
        topics: [
          'Position from left/right',
          'Total number of persons',
          'Position interchange',
          'Ranking from top/bottom',
          'Minimum/maximum persons',
          'Overlapping cases',
          'Non-overlapping cases',
          'Complex ranking'
        ]
      },
      {
        title: 'Level 8: Seating Arrangement - Linear',
        endPoint: 'Solve linear seating arrangements',
        topics: [
          'Single row arrangement',
          'Double row arrangement',
          'Facing north/south',
          'Facing each other',
          'Uncertain number of persons',
          'Parallel rows',
          'Conditions and constraints',
          'Complex linear arrangements'
        ]
      },
      {
        title: 'Level 9: Seating Arrangement - Circular',
        endPoint: 'Solve circular arrangements',
        topics: [
          'Circular arrangement basics',
          'Facing center',
          'Facing outside',
          'Mixed facing',
          'Square/rectangular arrangement',
          'Triangular arrangement',
          'Hexagonal arrangement',
          'Complex circular arrangements'
        ]
      },
      {
        title: 'Level 10: Puzzles',
        endPoint: 'Solve complex puzzles',
        topics: [
          'Floor-based puzzles',
          'Box-based puzzles',
          'Scheduling puzzles',
          'Day/month/year based',
          'Category-based puzzles',
          'Comparison puzzles',
          'Quantitative puzzles',
          'Complex multi-variable puzzles'
        ]
      },
      {
        title: 'Level 11: Syllogism',
        endPoint: 'Solve syllogism problems',
        topics: [
          'Syllogism basics',
          'Venn diagram method',
          'All, Some, No statements',
          'Either-or cases',
          'Possibility cases',
          'Only a few',
          'Reverse syllogism',
          'Coded syllogism'
        ]
      },
      {
        title: 'Level 12: Inequality',
        endPoint: 'Solve inequality problems',
        topics: [
          'Basic inequality',
          'Coded inequality',
          'Direct inequality',
          'Either-or cases',
          'Possibility cases',
          'Reverse inequality',
          'Complex inequalities',
          'Combined inequalities'
        ]
      },
      {
        title: 'Level 13: Input-Output',
        endPoint: 'Solve input-output problems',
        topics: [
          'Input-output basics',
          'Shifting patterns',
          'Arrangement patterns',
          'Mathematical operations',
          'Word-number arrangement',
          'Double shifting',
          'Complex patterns',
          'Machine input-output'
        ]
      },
      {
        title: 'Level 14: Data Sufficiency',
        endPoint: 'Determine data sufficiency',
        topics: [
          'Two-statement sufficiency',
          'Three-statement sufficiency',
          'Comparison-based',
          'Relationship-based',
          'Order and ranking',
          'Blood relations',
          'Direction sense',
          'Complex sufficiency'
        ]
      },
      {
        title: 'Level 15: Logical Deduction',
        endPoint: 'Make logical deductions',
        topics: [
          'Statement and assumptions',
          'Statement and arguments',
          'Statement and conclusions',
          'Course of action',
          'Cause and effect',
          'Strong and weak arguments',
          'Inference-based'
        ]
      },
      {
        title: 'Level 16: Critical Reasoning',
        endPoint: 'Analyze arguments critically',
        topics: [
          'Strengthening arguments',
          'Weakening arguments',
          'Assumptions',
          'Inferences',
          'Conclusions',
          'Flaws in arguments',
          'Paradox resolution',
          'Evaluate arguments'
        ]
      },
      {
        title: 'Level 17: Non-Verbal Reasoning',
        endPoint: 'Solve visual reasoning problems',
        topics: [
          'Series (figures)',
          'Analogy (figures)',
          'Classification (figures)',
          'Mirror images',
          'Water images',
          'Pattern completion',
          'Figure matrix',
          'Cube and dice',
          'Paper folding and cutting'
        ]
      },
      {
        title: 'Level 18: Decision Making',
        endPoint: 'Make sound decisions',
        topics: [
          'Decision-making scenarios',
          'Eligibility criteria',
          'Administrative decisions',
          'Case studies',
          'Judgment-based questions',
          'Multiple conditions',
          'Complex decision trees'
        ]
      },
      {
        title: 'Level 19: Speed & Accuracy',
        endPoint: 'Excel in reasoning tests',
        topics: [
          'Quick solving techniques',
          'Pattern recognition shortcuts',
          'Elimination method',
          'Time management',
          'Question selection',
          'Mock tests',
          'Previous year papers',
          'Error reduction strategies'
        ]
      }
    ]
  },

  // Verbal Ability
  {
    id: 'verbal-ability',
    title: 'Verbal Ability Roadmap',
    shortTitle: 'Verbal',
    description: 'Master English grammar, vocabulary, and comprehension for placements and competitive exams.',
    iconName: 'MessageSquare',
    color: '#0ea5e9',
    bg: '#f0f9ff',
    grad: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
    prerequisites: [
      'Basic English knowledge',
      'Reading habit',
      'Vocabulary foundation'
    ],
    levels: [
      {
        title: 'Level 1: Vocabulary Building',
        endPoint: 'Build strong vocabulary',
        topics: [
          'Root words',
          'Prefixes and suffixes',
          'Word origins',
          'Synonyms',
          'Antonyms',
          'Word lists (high-frequency words)',
          'Contextual vocabulary',
          'Idioms and phrases',
          'One-word substitutions',
          'Vocabulary in context'
        ]
      },
      {
        title: 'Level 2: Grammar Fundamentals',
        endPoint: 'Master grammar basics',
        topics: [
          'Parts of speech',
          'Nouns (types, number, gender)',
          'Pronouns',
          'Adjectives',
          'Verbs (types, tenses)',
          'Adverbs',
          'Prepositions',
          'Conjunctions',
          'Interjections',
          'Articles'
        ]
      },
      {
        title: 'Level 3: Tenses',
        endPoint: 'Use tenses correctly',
        topics: [
          'Present tense (simple, continuous, perfect, perfect continuous)',
          'Past tense (simple, continuous, perfect, perfect continuous)',
          'Future tense (simple, continuous, perfect, perfect continuous)',
          'Tense consistency',
          'Sequence of tenses',
          'Common errors in tenses'
        ]
      },
      {
        title: 'Level 4: Sentence Structure',
        endPoint: 'Construct grammatically correct sentences',
        topics: [
          'Subject-verb agreement',
          'Sentence types (simple, compound, complex)',
          'Clauses (independent, dependent)',
          'Phrases',
          'Modifiers',
          'Parallelism',
          'Active and passive voice',
          'Direct and indirect speech'
        ]
      },
      {
        title: 'Level 5: Error Detection',
        endPoint: 'Identify errors in sentences',
        topics: [
          'Grammatical errors',
          'Spelling errors',
          'Punctuation errors',
          'Word usage errors',
          'Tense errors',
          'Preposition errors',
          'Article errors',
          'Common error patterns',
          'Error spotting techniques'
        ]
      },
      {
        title: 'Level 6: Sentence Improvement',
        endPoint: 'Improve sentence quality',
        topics: [
          'Sentence correction',
          'Better word choice',
          'Clarity and conciseness',
          'Eliminating redundancy',
          'Improving flow',
          'Style enhancement',
          'Formal vs informal language',
          'Tone adjustment'
        ]
      },
      {
        title: 'Level 7: Fill in the Blanks',
        endPoint: 'Complete sentences accurately',
        topics: [
          'Single blanks',
          'Double blanks',
          'Triple blanks',
          'Vocabulary-based',
          'Grammar-based',
          'Context-based',
          'Prepositions',
          'Conjunctions',
          'Phrasal verbs'
        ]
      },
      {
        title: 'Level 8: Sentence Completion',
        endPoint: 'Complete sentences logically',
        topics: [
          'Incomplete sentences',
          'Logical completion',
          'Context clues',
          'Transition words',
          'Cause and effect',
          'Contrast and comparison',
          'Sequence indicators'
        ]
      },
      {
        title: 'Level 9: Para Jumbles',
        endPoint: 'Arrange sentences into coherent paragraphs',
        topics: [
          'Sentence rearrangement',
          'Identifying opening sentence',
          'Identifying closing sentence',
          'Logical connectors',
          'Chronological order',
          'Cause-effect relationships',
          'Pronoun references',
          'Transition words',
          'Theme identification'
        ]
      },
      {
        title: 'Level 10: Reading Comprehension',
        endPoint: 'Comprehend and analyze passages',
        topics: [
          'Reading strategies',
          'Skimming and scanning',
          'Main idea identification',
          'Supporting details',
          'Inference questions',
          'Vocabulary in context',
          'Tone and attitude',
          'Purpose of passage',
          'Fact vs opinion',
          'Speed reading techniques'
        ]
      },
      {
        title: 'Level 11: Cloze Test',
        endPoint: 'Complete passages accurately',
        topics: [
          'Passage with blanks',
          'Context understanding',
          'Vocabulary application',
          'Grammar in context',
          'Logical flow',
          'Theme consistency',
          'Word relationships'
        ]
      },
      {
        title: 'Level 12: Para Completion',
        endPoint: 'Complete paragraphs logically',
        topics: [
          'Incomplete paragraphs',
          'Missing sentence identification',
          'Logical flow',
          'Coherence',
          'Transition identification',
          'Theme consistency'
        ]
      },
      {
        title: 'Level 13: Word Usage',
        endPoint: 'Use words correctly',
        topics: [
          'Correct word usage',
          'Confusing words',
          'Homonyms',
          'Homophones',
          'Commonly misused words',
          'Contextual usage',
          'Formal usage'
        ]
      },
      {
        title: 'Level 14: Idioms & Phrases',
        endPoint: 'Understand and use idioms',
        topics: [
          'Common idioms',
          'Phrasal verbs',
          'Idiomatic expressions',
          'Meaning and usage',
          'Origin of idioms',
          'Context application',
          'Regional variations'
        ]
      },
      {
        title: 'Level 15: Verbal Analogies',
        endPoint: 'Solve verbal analogies',
        topics: [
          'Word relationships',
          'Synonym analogies',
          'Antonym analogies',
          'Part-whole relationships',
          'Cause-effect',
          'Degree relationships',
          'Function relationships'
        ]
      },
      {
        title: 'Level 16: One Word Substitution',
        endPoint: 'Master one-word substitutions',
        topics: [
          'Common substitutions',
          'Technical terms',
          'Personality types',
          'Fears and phobias',
          'Study of subjects',
          'Government types',
          'Killing terms'
        ]
      },
      {
        title: 'Level 17: Critical Reasoning (Verbal)',
        endPoint: 'Analyze verbal arguments',
        topics: [
          'Argument analysis',
          'Assumptions',
          'Inferences',
          'Conclusions',
          'Strengthening/weakening',
          'Evaluation',
          'Logical flaws'
        ]
      },
      {
        title: 'Level 18: Business Communication',
        endPoint: 'Communicate professionally',
        topics: [
          'Formal writing',
          'Email writing',
          'Report writing',
          'Letter writing',
          'Professional tone',
          'Clarity and precision',
          'Business vocabulary'
        ]
      },
      {
        title: 'Level 19: Speed & Accuracy',
        endPoint: 'Excel in verbal ability tests',
        topics: [
          'Quick reading techniques',
          'Time management',
          'Question selection',
          'Elimination strategies',
          'Practice tests',
          'Previous year papers',
          'Error analysis',
          'Confidence building'
        ]
      }
    ]
  }
];

export default roadmapsData;