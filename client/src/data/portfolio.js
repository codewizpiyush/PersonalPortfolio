// src/data/portfolio.js
// Single source of truth for all portfolio content.

export const profile = {
  name: 'Piyush Gupta',
  roles: ['MERN Stack Developer', 'Full Stack Developer', 'AI Developer', 'Problem Solver'],
  tagline: 'Building scalable web applications and intelligent AI-powered solutions that solve real-world problems.',
  location: 'Indore, Madhya Pradesh, India',
  email: 'work.with.piyush.gupta@gmail.com',
  secondaryEmail: 'pysgpa@gmail.com',
  phone: '+91 9179006141',
  linkedin: 'https://linkedin.com/in/piyushgupta4108',
  github: 'https://github.com/codewizpiyush',
  availability: 'Open to Software Developer, MERN Stack Developer, Full Stack Developer, and React Native opportunities.',
};

export const stats = [
  { label: 'Projects Completed', value: 4, suffix: '+' },
  { label: 'Technologies Mastered', value: 18, suffix: '+' },
  { label: 'Internship Experience', value: 2, suffix: ' mo' },
  { label: 'REST APIs Built', value: 20, suffix: '+' },
];

export const about = {
  intro: '',
  bio: [
    "I'm Piyush Gupta, a MERN Stack Developer and Artificial Intelligence & Data Science undergraduate with a passion for building scalable, user-centric web applications. I have hands-on experience developing full-stack solutions using React.js, Node.js, Express.js, and MongoDB, along with integrating AI technologies such as Google's Gemini API to create intelligent and interactive applications.",
    'I am passionate about solving real-world problems through technology, continuously learning new tools and frameworks, and creating products that deliver meaningful user experiences. Currently, I am seeking opportunities as a Software Developer, MERN Stack Developer, Full Stack Developer, or React Native Developer where I can contribute to impactful projects and grow into a skilled software engineer.',
  ],
  highlights: [
    'MERN Stack Specialist',
    'AI Integration Experience',
    'REST API Development',
    'Full Stack Project Deployment',
    'Problem Solving Mindset',
  ],
};

export const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Artificial Intelligence & Data Science',
    institution: 'Chameli Devi Group of Institutions (CDGI), Indore',
    duration: '2022 – 2026',
    metric: 'CGPA 6.99/10',
  },
  {
    degree: 'Higher Secondary Education',
    field: 'MP Board',
    institution: 'Saraswati Gyan Peeth H.S. School, Dewas',
    duration: '2022',
    metric: '76.8%',
  },
  {
    degree: 'Secondary Education',
    field: 'CBSE',
    institution: 'St. Thomas H.S. School, Dewas',
    duration: '2020',
    metric: '73.6%',
  },
];

export const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Ypsilon IT Solutions Pvt. Ltd.',
    duration: 'March 2025 – April 2025',
    points: [
      'Developed a full-stack Blog Management Platform using the MERN stack.',
      'Built and integrated 20+ REST APIs powering the platform.',
      'Implemented JWT authentication and role-based access control (RBAC).',
      'Designed a scalable MongoDB database architecture.',
      'Added email verification and admin management features.',
      'Worked on secure backend development and deployment.',
    ],
  },
];

export const skillGroups = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
      { name: 'Responsive Design', level: 90 },
      { name: 'React Hooks', level: 85 },
      { name: 'Axios', level: 85 },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'REST API Design', level: 88 },
      { name: 'JWT Authentication', level: 82 },
      { name: 'RBAC', level: 80 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 70 },
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 88 },
      { name: 'C++', level: 75 },
    ],
  },
  {
    category: 'Artificial Intelligence & APIs',
    skills: [
      { name: 'Gemini API Integration', level: 82 },
      { name: 'AI-Powered Web Apps', level: 80 },
      { name: 'Prompt Engineering', level: 78 },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'VS Code', level: 92 },
      { name: 'Render', level: 80 },
      { name: 'MongoDB Atlas', level: 80 },
    ],
  },
];

export const services = [
  { title: 'Full Stack Web Development', desc: 'End-to-end web applications built on a clean architecture, from database to UI.' },
  { title: 'MERN Stack Application Development', desc: 'Production-ready apps using MongoDB, Express, React, and Node.js.' },
  { title: 'REST API Development', desc: 'Secure, well-documented APIs designed for performance and scalability.' },
  { title: 'AI Integration & Automation', desc: 'Embedding AI models like Gemini into products to automate and assist.' },
  { title: 'Database Design & Management', desc: 'Schema design and query optimization for MongoDB and MySQL.' },
  { title: 'Responsive Website Development', desc: 'Interfaces that adapt cleanly across phones, tablets, and desktops.' },
  { title: 'Performance Optimization', desc: 'Faster load times and smoother interactions through profiling and tuning.' },
  { title: 'Deployment & Hosting', desc: 'Shipping applications to production with reliable CI and hosting setups.' },
];

export const projects = [
  {
    id: 'third-eye',
    title: 'Third-Eye',
    subtitle: 'AI-Powered Online Examination System',
    description: 'An exam platform that generates questions with AI, proctors sessions in real time, and auto-evaluates submissions.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'JWT'],
    features: [
      'AI-powered question generation',
      'Real-time proctoring',
      'Cheating detection',
      'Automatic exam submission',
      'Role-based access control',
      'Automated evaluation',
    ],
    links: { demo: 'https://third-eye-5tym.onrender.com/', github: 'https://github.com/codewizpiyush/Third-Eye', caseStudy: '#' },
    filter: ['Full Stack', 'AI'],
  },
  {
    id: 'codecruncher',
    title: 'CodeCruncher',
    subtitle: 'AI-Powered Code Complexity Analyzer',
    description: 'An interactive editor that evaluates code in real time and explains its time and space complexity using AI.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'Monaco Editor'],
    features: [
      'AI complexity analysis',
      'Interactive code editor',
      'Real-time evaluation',
      'Complexity insights',
      'Secure APIs',
    ],
    links: { demo: 'https://codecruncher.onrender.com/', github: 'https://github.com/codewizpiyush/CodeCruncher', caseStudy: '#' },
    filter: ['Full Stack', 'AI'],
  },
  {
    id: 'blog-platform',
    title: 'Bloscot',
    subtitle: 'Full-stack blogging application',
    description: 'A blogging platform with authentication, an admin dashboard, and a complete content lifecycle.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Email verification',
      'JWT authentication',
      'Blog CRUD',
      'Likes and comments',
      'Admin dashboard',
      '20+ REST APIs',
    ],
    links: { demo: 'https://bloscot.onrender.com/', github: 'https://github.com/codewizpiyush/Bloscot' },
    filter: ['Full Stack'],
  },
  {
    id: 'text-to-speech',
    title: 'Text-to-Speech Converter',
    subtitle: 'Browser-based speech synthesis tool',
    description: 'A lightweight tool that converts typed text into natural speech using the Web Speech API.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Web Speech API'],
    features: [
      'Speech synthesis',
      'Multiple voices',
      'Adjustable pitch and speed',
      'Responsive design',
    ],
    links: { demo: '#', github: 'https://github.com/codewizpiyush/text-to-speech-converter' },
    filter: ['Frontend'],
  },
];

export const testimonials = [
  {
    name: 'Anjali Mehra',
    role: 'Engineering Lead, Ypsilon IT Solutions',
    feedback: 'Piyush picked up our codebase fast and shipped the blog platform APIs ahead of schedule. His attention to authentication and access control stood out for an intern.',
  },
  {
    name: 'Rohit Sharma',
    role: 'Peer Developer & Project Collaborator',
    feedback: "Working with Piyush on Third-Eye showed me how methodically he approaches AI integration — he doesn't just call an API, he designs around its limits.",
  },
  {
    name: 'Dr. Sanya Kapoor',
    role: 'Faculty Mentor, CDGI Indore',
    feedback: 'Piyush consistently brings a builder mindset to coursework, turning class projects into deployed, working products.',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
