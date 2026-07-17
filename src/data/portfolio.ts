import {
  Code2,
  Database,
  Server,
  Smartphone,
  GitBranch,
  Brain,
  Globe,
  Palette,
} from 'lucide-react';

export const personalInfo = {
  name: 'Sana Khan',
  role: 'MERN Stack Developer | React Native Developer',
  experience: 'Fresher',
  email: 'sanakhan07452@gmail.com',
  GitHub: 'https://github.com/sanakhan319',
  linkedin: 'https://www.linkedin.com/in/sana-khan-549421384/',
  location: 'Hyderabad Pakistan',
  
  phone: '+923342658092',
  introduction:
    'I am a passionate MERN Stack Developer with expertise in building modern web and mobile applications. I have hands-on experience with full-stack development using MongoDB, Express.js, React.js, and Node.js. I enjoy creating responsive, user-friendly, and scalable applications while continuously learning new technologies, including Artificial Intelligence.',
  careerObjective:
    'My goal is to become a highly skilled Full Stack Developer and contribute to innovative software solutions that solve real-world problems. I am continuously improving my development skills and exploring Artificial Intelligence technologies to build smarter applications.',
  typingTexts: [
    'MERN Stack Developer',
    'React Native Developer',
    'Full Stack Enthusiast',
    'Problem Solver',
    'AI Explorer',
  ],
};

export const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript (ES6+)', level: 80 },
      { name: 'React.js', level: 85 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-emerald-500 to-green-400',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 75 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-amber-500 to-yellow-400',
    skills: [{ name: 'MongoDB', level: 75 }],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'from-violet-500 to-purple-400',
    skills: [{ name: 'React Native', level: 70 }],
  },
  {
    title: 'Tools',
    icon: GitBranch,
    color: 'from-rose-500 to-pink-400',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Thunder client', level: 75 },
    ],
  },
  {
    title: 'Additional Knowledge',
    icon: Brain,
    color: 'from-teal-500 to-cyan-400',
    skills: [
      { name: 'Artificial Intelligence', level: 60 },
      { name: 'API Integration', level: 75 },
      { name: 'UI/UX Principles', level: 70 },
    ],
  },
];

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export const projectCategories = [
  'All',
  'MERN Stack',
  'React',
  'React Native',
  'APIs',
  'Landing Pages',
];

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];

  image: string;
  GitHub: string;
  liveDemo: string;
}

export const projects: Project[] = [
  {
    id: 1,
  title: 'Woodline E-Commerce Website',
  description:
    'A responsive furniture e-commerce website built using HTML and CSS with a modern, user-friendly interface.',

  longDescription:
    'Woodline is a stylish furniture e-commerce website designed using HTML and CSS. The project focuses on creating a clean, responsive, and visually appealing shopping experience. It includes a well-structured homepage, featured products section, category listings, promotional banners, customer testimonials, and a professional footer. The layout is fully responsive, ensuring an excellent user experience across desktop, tablet, and mobile devices.',

  technologies: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Responsive Design'],

  features: [
    'Modern & Responsive UI',
    'Furniture Product Showcase',
    'Featured Categories Section',
    'Hero Banner with Call-to-Action',
    'Customer Testimonials',
    'Newsletter Subscription Section',
    'Responsive Navigation Menu',
    'Clean & Organized Layout'
  ],

  

  image:
    'src/assets/images/woodline image.png',

  GitHub: 'https://github.com/sana/woodline-ecommerce',

  liveDemo: 'https://sanakhan319.github.io/Woodline-Ecommerce-Website/',
},
 {
    id: 2,
  title: 'Green Garden Website',

  description:
    'A modern and responsive gardening website designed with HTML and CSS to showcase plants, gardening services, and nature-inspired content.',

  longDescription:
    'Green Garden is a beautifully designed frontend website created using HTML and CSS. The project features a clean, nature-inspired interface with responsive layouts that provide an engaging browsing experience across all devices. It includes a welcoming hero section, plant categories, featured products, gardening services, customer testimonials, and a contact section. The design emphasizes simplicity, usability, and a fresh visual aesthetic suitable for gardening and landscaping businesses.',

  technologies: [
    'HTML5',
    'CSS3',
    'Flexbox',
    'CSS Grid',
    'Responsive Design'
  ],

  features: [
    'Responsive & Modern Design',
    'Beautiful Hero Section',
    'Plant & Flower Categories',
    'Featured Products Showcase',
    'Gardening Services Section',
    'About Us Section',
    'Customer Testimonials',
    'Contact Form',
    'Newsletter Subscription',
    'Smooth Navigation'
  ],

  

  image:
    'src/assets/images/Green Garden.png',

  GitHub: 'https://github.com/sana/green-garden',

  liveDemo: 'https://green-garden.vercel.app',
},
  {
    id: 2,
    title: 'Weather Application',
    description:
      'Real-time weather app with location-based forecasts, search functionality, and beautiful weather animations.',
    longDescription:
      'A sleek weather application that fetches real-time data from OpenWeatherMap API. Features include city search, current conditions, 5-day forecast, location-based weather, and dynamic backgrounds that change based on weather conditions.',
    technologies: ['React.js', 'OpenWeatherMap API', 'CSS'],
    features: [
      'Real-time Weather Data',
      'City Search Functionality',
      '5-Day Forecast',
      'Location-based Weather',
      'Dynamic Backgrounds',
      'Responsive Design',
    ],
  
    image:
      'src/assets/images/Weather App.png',
    GitHub: 'https://GitHub.com/sana/weather-app',
    liveDemo: 'https://sanakhan319.github.io/Weather-App/',
  },
  {
    id: 3,
    title: 'Counter App',
    description:
      'An interactive counter application built with HTML, CSS, and JavaScript featuring increment, decrement, and reset functionality.',
    longDescription:
      'The Counter App is a simple yet interactive JavaScript project designed to demonstrate DOM manipulation and event handling. Users can increase, decrease, and reset the counter with a single click. The application updates the counter value dynamically without refreshing the page and includes a clean, responsive interface for a smooth user experience.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
     'Increment Counter',
      'Decrement Counter',
       'Reset Counter',
        'Real-Time Value Updates',
         'DOM Manipulation',
          'Event Handling',
           'Responsive User Interface',
            'Clean & Minimal Design'
    ],
   
    image:
      'src/assets/images/Counter App 2.png',
    GitHub: 'https://GitHub.com/sana/counter-app',
    liveDemo: 'https://counter-demo.vercel.app',
  },
  {
    id: 4,
    title: 'Portfolio Landing Page',
    description:
      'Modern and responsive portfolio landing page with smooth animations, glassmorphism effects, and dark theme.',
    longDescription:
      'A beautifully crafted portfolio landing page featuring smooth scroll animations, glassmorphism design elements, responsive layout, and a premium dark theme. Built with React and Tailwind CSS with Framer Motion animations.',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'React Router'],
    features: [
      'Smooth Scroll Animations',
      'Glassmorphism Effects',
      'Dark Theme Design',
      'Responsive Layout',
      'SEO Optimized',
      'Fast Performance',
    ],
   
    image:
      'src/assets/images/Portfolio.png',
    GitHub: 'https://GitHub.com/sana/portfolio',
    liveDemo: 'https://sana-portfolio.vercel.app',
  },
  
  {
    id: 6,
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, drag-and-drop, and team features.',
    longDescription:
      'A full-stack task management application inspired by Trello. Features include drag-and-drop task boards, real-time updates with Socket.io, team collaboration, task assignments, deadline tracking, and activity logging.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    features: [
      'Drag & Drop Boards',
      'Real-time Updates',
      'Team Collaboration',
      'Task Assignment',
      'Deadline Tracking',
      'Activity Logging',
    ],
   
    image:
      'src/assets/images/Task Manager.png',
    GitHub: 'https://GitHub.com/sana/task-manager',
    liveDemo: 'https://taskmanager-demo.vercel.app',
  },
  
  
 
];

export const timelineEvents = [
  {
    year: '2022',
    title: 'Started Learning Web Development',
    description:
      'Began my journey into web development with HTML, CSS, and JavaScript fundamentals.',
  },
  {
    year: '2022',
    title: 'Learned Frontend Technologies',
    description:
      'Deepened my knowledge of CSS frameworks, responsive design, and modern JavaScript ES6+ features.',
  },
  {
    year: '2023',
    title: 'Mastered React.js',
    description:
      'Built multiple React projects and learned hooks, context API, and state management patterns.',
  },
  {
    year: '2023',
    title: 'Learned Backend Development',
    description:
      'Studied Node.js and Express.js, built REST APIs, and learned server-side development concepts.',
  },
  {
    year: '2023',
    title: 'Built MERN Stack Projects',
    description:
      'Created full-stack applications combining MongoDB, Express.js, React.js, and Node.js.',
  },
  {
    year: '2024',
    title: 'Started React Native Development',
    description:
      'Expanded into mobile development with React Native, building cross-platform mobile applications.',
  },
  {
    year: '2024',
    title: 'Exploring Artificial Intelligence',
    description:
      'Currently exploring AI technologies and their integration with web and mobile applications.',
  },
];

export const whyHireMe = [
  {
    title: 'Quick Learner',
    description: 'I rapidly adapt to new technologies and frameworks, constantly expanding my skill set.',
    icon: Brain,
  },
  {
    title: 'Problem Solver',
    description: 'I approach challenges methodically and find efficient, creative solutions.',
    icon: Code2,
  },
  {
    title: 'Team Player',
    description: 'I collaborate effectively and communicate clearly to deliver outstanding team results.',
    icon: Globe,
  },
  {
    title: 'Strong MERN Foundation',
    description: 'Solid understanding of the full MERN stack for building complete applications.',
    icon: Database,
  },
  {
    title: 'Passionate About Technology',
    description: 'Genuine passion drives me to go above and beyond in every project I undertake.',
    icon: Palette,
  },
];

export const stats = [
  { label: 'Projects Built', value: 11 },
  { label: 'Technologies', value: 15 },
  { label: 'GitHub Repos', value: 8 },
  { label: 'Lines of Code', value: 50 },
];
