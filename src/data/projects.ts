export interface Project {
  title: string;
  category: string;
  type: "mobile" | "web";
  description: string;
  extendedDescription: string;
  features: string[];
  tags: string[];
  images: string[];
  liveUrl?: string;
}

export const projectList: Project[] = [
  {
    title: "Notepad App",
    category: "Mobile App • Full-Stack",
    type: "mobile",
    description: "A feature-rich Android notepad application with seamless note-sharing, real-time push notifications, and built-in ad monetization.",
    extendedDescription: "A feature-rich Android notepad application with seamless note-sharing, real-time push notifications, and built-in ad monetization..",
    features: ["Real-time note sharing", "Push notifications via Firebase", "AdMob integration", "Secure remote database sync"],
    tags: ["React Native", "TailwindCSS", "Node.js", "MongoDB"],
    images: [
      "/images/projects/notepad-1.jpg",
      "/images/projects/notepad-2.jpg",
      "/images/projects/notepad-3.jpg",
      "/images/projects/notepad-4.jpg"
    ]
  },
  {
    title: "Bar Menu & Dashboard",
    category: "Web App • Full-Stack",
    type: "mobile",
    description: "An elegant digital menu system for bars, complete with a powerful custom administration panel for real-time product management.",
    extendedDescription: "An elegant digital menu system for bars, complete with a powerful custom administration panel for real-time product management.",
    features: ["Dynamic category controls", "Real-time menu updates", "Protected admin authentication"],
    tags: ["React", "TailwindCSS", "Node.js", "MongoDB"],
    images: [
      "/images/projects/hoi-menu-1.png",
      "/images/projects/hoi-menu-2.png",
      "/images/projects/hoi-menu-3.png",
      "/images/projects/hoi-menu-4.png"
    ]
  },
  {
    title: "PAR-SEK",
    category: "Web Platform • Frontend",
    type: "web",
    description: "An analytical web platform for searching and evaluating corporate entities and manufactured products, featuring custom interactive data charts.",
    extendedDescription: "Participated in the frontend development of a data-driven web application designed for comprehensive company search and industrial product analysis. Focused on building a clean user interface and implementing dynamic analytical charts to represent complex market data visually.",
    features: [
      "Interactive data visualization and statistical charts using D3.js",
      "Advanced search functionality with complex product filtration",
      "Optimized and modular DOM manipulation with native JS and jQuery",
      "Responsive and lightweight layout tailored for deep corporate analytics"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "D3.js"],
    images: [
      "/images/projects/parsek-1.png",
      "/images/projects/parsek-2.png",
      "/images/projects/parsek-3.png"
    ],
    liveUrl: "https://par-sek.com"
  },
  {
    title: "Notepad Web",
    category: "Full-Stack Web App",
    type: "web",
    description: "A full-stack productivity web application featuring secure user authentication, customizable themes, and robust note management.",
    extendedDescription: "Engineered a modern web application designed for seamless note-taking and organization. Built with React and TypeScript on the frontend for high performance, backed by a Node.js REST API with MongoDB for persistent storage, user authorization, and real-time state updates.",
    features: [
      "Secure user authentication (JWT-based login and registration)",
      "Full CRUD capabilities for notes with instant UI updates",
      "Responsive design optimized for both mobile and desktop screens",
      "RESTful API integration with efficient error handling and state management"
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    images: [
      "/images/projects/notepad-web-1.png",
      "/images/projects/notepad-web-2.png",
      "/images/projects/notepad-web-3.png",
      "/images/projects/notepad-web-4.png"
    ],
    liveUrl: "https://notepadch.netlify.app"
  },
  {
    title: "Notepad Vue",
    category: "Full-Stack Web App",
    type: "web",
    description: "A reactive full-stack note-taking platform featuring group workspace collaboration, Google OAuth, and a modern dark glassmorphism design.",
    extendedDescription: "Engineered a high-performance web application for personal productivity and team collaboration. Built with Vue 3 (Composition API) and Pinia for efficient, centralized state management, backed by a Node.js and Express REST API with MongoDB for persistent data storage, user authorization, and real-time UI synchronization.",
    features: [
      "Reactive state management and smooth UI flow powered by Vue 3 Composition API and Pinia",
      "Collaborative group workspaces with flexible access management for team members",
      "Multi-provider authentication system supporting both JWT credentials and Google OAuth",
      "RESTful API integration with robust error handling and automated state updates"
    ],
    tags: ["Vue 3", "Pinia", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    images: [
      "/images/projects/notepad-vue-1.png",
      "/images/projects/notepad-vue-2.png",
      "/images/projects/notepad-vue-3.png",
      "/images/projects/notepad-vue-4.png"
    ],
    liveUrl: "https://notepad-vue.netlify.app"
  },
  {
    title: "MCH Devices",
    category: "E-Commerce • Shopify Store",
    type: "web",
    description: "A custom Shopify e-commerce store optimized for electronics and modern tech accessories with tailored Liquid theme architecture.",
    extendedDescription: "Designed and developed a fully customized Shopify storefront tailored for modern electronics and device retail. Focused on creating a sleek, high-converting shopping experience using custom Liquid templates, modular theme settings, and responsive UI layouts built for optimal core web vitals. Password: skeuly",
    features: [
      "Custom Liquid theme development and dynamic section architecture",
      "Tailored product display pages with flexible variant pickers and schemas",
      "Fully responsive layout designed for high-performance mobile browsing",
      "Customizable theme settings schema for easy store administration"
    ],
    tags: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript", "E-Commerce"],
    images: [
      "/images/projects/mchdevices-1.png",
      "/images/projects/mchdevices-2.png",
      "/images/projects/mchdevices-3.png",
      "/images/projects/mchdevices-4.png",
      "/images/projects/mchdevices-5.png"
    ],
    liveUrl: "https://mchdevices.myshopify.com"
  }
];