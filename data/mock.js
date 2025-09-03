// Mock data for portfolio


  const generateRandomColor = () => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
      '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

export const mockData = {
  // Hero section data
  hero: {
    name: "Алексей",
    title: "Frontend Developer",
    subtitle:
      "Создаю современные веб-приложения с фокусом на пользовательский опыт",
    description:
      "Специализируюсь на React, Next.js, TypeScript и современных веб-технологиях",
    email: "test@example.com",
    location: "Earth",
  },

  // Navigation menu
  navigation: [
    { id: "hero", label: "Главная", href: "#hero" },
    { id: "skills", label: "Навыки", href: "#skills" },
    { id: "portfolio", label: "Работы", href: "#portfolio" },
    { id: "contact", label: "Контакты", href: "#contact" },
  ],

  // Skills data
  skills: {
    title: "Навыки и технологии",
    subtitle: "Технологии, с которыми я работаю",
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "React", level: 95, icon: "/icons/react.svg", color:generateRandomColor() },
          { name: "Next.js", level: 90, icon: "/icons/nextjs.svg", color:generateRandomColor()  },
          { name: "TypeScript", level: 85, icon: "/icons/typescript.svg", color:generateRandomColor()  },
          { name: "JavaScript ES6+", level: 95, icon: "/icons/javascript.svg", color:generateRandomColor()  },
          { name: "HTML5/CSS3", level: 90, icon: "/icons/html5.svg", color:generateRandomColor()  },
          { name: "Tailwind CSS", level: 70, icon: "/icons/tailwind.svg", color:generateRandomColor()  },
          { name: "MySQL", level: 90, icon: "/icons/mysql.svg", color:generateRandomColor()  },
          { name: "BEM", level: 90, icon: "/icons/bem.svg", color:generateRandomColor()  },
          { name: "Wordpress", level: 90, icon: "/icons/wordpress.svg", color:generateRandomColor()  },
          { name: "Elementor", level: 80, icon: "/icons/elementor.svg", color:generateRandomColor()  },
        ],
      },
      {
        title: "Tools & Libraries",
        skills: [
          { name: "Git/GitHub", level: 90, icon: "/icons/github.svg" },
          { name: "Webpack", level: 65, icon: "/icons/webpack.svg" },
          {
            name: "Gulp / Vite / Parcel bundlers",
            level: 80,
            icon: "/icons/vitejs.svg",
          },
          { name: "Three.js", level: 70, icon: "/icons/threejs.svg" },
          { name: "Docker", level: 60, icon: "/icons/docker.svg" },
          { name: "GSAP animation", level: 70, icon: "/icons/gsap.svg" },

          { name: "phpMyAdmin", level: 60, icon: "/icons/myadmin.svg" },
          { name: "Linux", level: 85, icon: "/icons/linux.svg" },
          {
            name: "Visual Studio Code",
            level: 80,
            icon: "/icons/vs.svg",
          },
        ],
      },
      {
        title: "Design & UX",
        skills: [
          { name: "Figma", level: 80, icon: "/icons/figma.svg" },
          { name: "Adobe Photoshop", level: 75, icon: "/icons/adobe.svg" },
          {
            name: "Responsive Design",
            level: 95,
            icon: "/icons/devices-1.svg",
          },
          { name: "Pixel Perfect", level: 95, icon: "/icons/monitor.svg" },
          {
            name: "Accessibility",
            level: 80,
            icon: "/icons/accses.svg",
          },
          { name: "Performance", level: 85, icon: "/icons/perfomance.svg" },
        ],
      },
    ],
  },

  // Portfolio projects
  portfolio: {
    title: "Мои работы",
    subtitle: "Избранные проекты, над которыми я работал",
    projects: [
      {
        id: 1,
        title: "E-commerce Platform",
        description:
          "Современная платформа электронной коммерции с React и Next.js",
        longDescription:
          "Полнофункциональная платформа электронной коммерции с корзиной покупок, системой платежей, админ-панелью и мобильной адаптацией.",
        technologies: ["React", "Next.js", "TypeScript", "Stripe", "MongoDB"],
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        demoUrl: "https://demo-ecommerce.example.com",
        githubUrl: "https://github.com/example/ecommerce",
        category: "Веб-приложение",
        featured: true,
      },
      {
        id: 2,
        title: "Task Management App",
        description:
          "Приложение для управления задачами с drag-and-drop функциональностью",
        longDescription:
          "Интуитивное приложение для управления проектами и задачами с возможностью совместной работы в команде.",
        technologies: ["React", "Redux", "Node.js", "Socket.io", "PostgreSQL"],
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        demoUrl: "https://demo-tasks.example.com",
        githubUrl: "https://github.com/example/task-manager",
        category: "Веб-приложение",
        featured: true,
      },
      {
        id: 3,
        title: "Weather Dashboard",
        description:
          "Интерактивная панель управления погодой с 3D визуализацией",
        longDescription:
          "Современный weather dashboard с красивыми анимациями, прогнозом на неделю и интерактивными 3D элементами.",
        technologies: ["React", "Three.js", "OpenWeather API", "Framer Motion"],
        image:
          "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
        demoUrl: "https://demo-weather.example.com",
        githubUrl: "https://github.com/example/weather-dashboard",
        category: "Веб-приложение",
        featured: false,
      },
      {
        id: 4,
        title: "Portfolio Website",
        description:
          "Адаптивный сайт-портфолио с анимациями и современным дизайном",
        longDescription:
          "Полностью responsive портфолио с плавными анимациями, темной/светлой темой и оптимизацией производительности.",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
        demoUrl: "https://demo-portfolio.example.com",
        githubUrl: "https://github.com/example/portfolio",
        category: "Лендинг",
        featured: false,
      },
      {
        id: 5,
        title: "Real Estate Platform",
        description:
          "Платформа для поиска и аренды недвижимости с интерактивными картами",
        longDescription:
          "Комплексная платформа недвижимости с поиском, фильтрацией, интерактивными картами и системой бронирования.",
        technologies: [
          "Next.js",
          "TypeScript",
          "Mapbox",
          "Prisma",
          "PostgreSQL",
        ],
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        demoUrl: "https://demo-realestate.example.com",
        githubUrl: "https://github.com/example/real-estate",
        category: "Веб-приложение",
        featured: true,
      },
      {
        id: 6,
        title: "Crypto Trading Dashboard",
        description: "Реального времени панель для торговли криптовалютами",
        longDescription:
          "Продвинутая торговая панель с real-time данными, графиками, техническими индикаторами и системой уведомлений.",
        technologies: [
          "React",
          "Chart.js",
          "WebSocket",
          "Redux Toolkit",
          "TailwindCSS",
        ],
        image:
          "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
        demoUrl: "https://demo-crypto.example.com",
        githubUrl: "https://github.com/example/crypto-dashboard",
        category: "Финтех",
        featured: false,
      },
    ],
  },

  // Contact information
  contact: {
    title: "Свяжитесь со мной",
    subtitle: "Готов обсудить ваш проект",
    email: "alex.petrov@example.com",
    phone: "+1234567890",
    location: "",
    social: [
      { name: "GitHub", url: "https://github.com/alexdev", icon: "github" },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/alexdev",
        icon: "linkedin",
      },
      { name: "Telegram", url: "https://t.me/alexdev", icon: "message-circle" },
      { name: "Twitter", url: "https://twitter.com/alexdev", icon: "twitter" },
    ],
  },

  // Theme configurations
  themes: {
    light: {
      name: "Светлая",
      primary: "#000000",
      secondary: "#666666",
      accent: "#0066FF",
      background: "#FFFFFF",
      surface: "#F8F9FA",
      text: "#000000",
      textSecondary: "#666666",
    },
    dark: {
      name: "Темная",
      primary: "#FFFFFF",
      secondary: "#CCCCCC",
      accent: "#00D4FF",
      background: "#0F0F10",
      surface: "#1A1A1B",
      text: "#FFFFFF",
      textSecondary: "#CCCCCC",
    },
    minimal: {
      name: "Минимал",
      primary: "#000000",
      secondary: "#808080",
      accent: "#FF6B6B",
      background: "#FAFAFA",
      surface: "#FFFFFF",
      text: "#000000",
      textSecondary: "#808080",
    },
  },
};

export default mockData;
