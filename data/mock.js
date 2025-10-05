// Mock data for portfolio

const generateRandomColor = () => {
  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#98D8C8",
    "#F7DC6F",
    "#BB8FCE",
    "#85C1E9",
    "#F8C471",
    "#82E0AA",
    "#F1948A",
    "#85C1E9",
    "#D7BDE2",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const mockData = {
  // Hero section data
  hero: {
    name: "",
    title: "Frontend Developer",
    subtitle:
      "I create modern web applications with a focus on user experience",
    description:
      "I specialize in React, Next.js, TypeScript, and modern web technologies",
    email: "",
    location: "Earth",
  },

  // Skills data
  skills: {
    title: "",
    subtitle: "",
    categories: [
      {
        title: "Frontend",
        skills: [
          {
            name: "React",
            level: 95,
            icon: "/icons/react.svg",
            color: "#0cd1fe",
          },
          {
            name: "Next.js",
            level: 90,
            icon: "/icons/nextjs.svg",
            color: "#000000",
          },
          {
            name: "TypeScript",
            level: 85,
            icon: "/icons/typescript.svg",
            color: "#0279cc",
          },
          {
            name: "JavaScript ES6+",
            level: 95,
            icon: "/icons/javascript.svg",
            color: "#f7df1d",
          },
          {
            name: "HTML5/CSS3",
            level: 90,
            icon: "/icons/html5.svg",
            color: "#f06527",
          },
          {
            name: "Tailwind CSS",
            level: 70,
            icon: "/icons/tailwind.svg",
            color: "#35bef1",
          },
          {
            name: "MySQL",
            level: 90,
            icon: "/icons/mysql.svg",
            color: "#41606e",
          },
          {
            name: "BEM",
            level: 90,
            icon: "/icons/bem.svg",
            color: "#000200",
          },
          {
            name: "Wordpress",
            level: 90,
            icon: "/icons/wordpress.svg",
            color: "#047593",
          },
          {
            name: "Elementor",
            level: 80,
            icon: "/icons/elementor.svg",
            color: "#6e2d6d",
          },
        ],
      },
      {
        title: "Tools & Libraries",
        skills: [
          {
            name: "Git/GitHub",
            level: 90,
            icon: "/icons/github.svg",
            color: "#000000",
          },
          {
            name: "Webpack",
            level: 65,
            icon: "/icons/webpack.svg",
            color: "#94d1f4",
          },
          {
            name: "Vite/ Parcel/ Gulp",
            level: 80,
            icon: "/icons/vitejs.svg",
            color: "#b739f5",
          },
          {
            name: "Three.js",
            level: 70,
            icon: "/icons/threejs.svg",
            color: "#24ae61",
          },
          {
            name: "Docker",
            level: 60,
            icon: "/icons/docker.svg",
            color: "#0794bc",
          },
          {
            name: "GSAP animation",
            level: 70,
            icon: "/icons/gsap.svg",
            color: "#8bb754",
          },

          {
            name: "phpMyAdmin",
            level: 60,
            icon: "/icons/myadmin.svg",
            color: "#e2b15e",
          },
          {
            name: "Linux",
            level: 85,
            icon: "/icons/linux.svg",
            color: "#ffd030",
          },
          {
            name: "Visual Studio Code",
            level: 80,
            icon: "/icons/vs.svg",
            color: "#007fd9",
          },
        ],
      },
      {
        title: "Design & UX",
        skills: [
          {
            name: "Figma",
            level: 80,
            icon: "/icons/figma.svg",
            color: generateRandomColor(),
          },
          {
            name: "Adobe Photoshop",
            level: 75,
            icon: "/icons/adobe.svg",
            color: generateRandomColor(),
          },
          {
            name: "Responsive Design",
            level: 95,
            icon: "/icons/devices-1.svg",
            color: generateRandomColor(),
          },
          {
            name: "Pixel Perfect",
            level: 95,
            icon: "/icons/monitor.svg",
            color: generateRandomColor(),
          },
          {
            name: "Accessibility",
            level: 80,
            icon: "/icons/accses.svg",
            color: generateRandomColor(),
          },
          {
            name: "Performance",
            level: 85,
            icon: "/icons/perfomance.svg",
            color: generateRandomColor(),
          },
        ],
      },
    ],
  },

  // Portfolio projects
  portfolio: {
    title: "My Projects",
    subtitle: "A selection of my recent work",
    projects: [
      {
        id: 1,
        title: "Web app with animation for restaurant",
        description: "Modern e-commerce platform with React and animation",
        longDescription:
          "A modern e-commerce platform for restaurants built with React. Dynamic animation guides customers from menu browsing to ordering, increasing conversion.",
        technologies: ["React", "GSAP", "TypeScript", "Tailwind", "Vite"],
        image: "/images/slide-1.png",
        demoUrl: "https://gsap-react-animation.vercel.app/",
        githubUrl: "https://github.com/adovg/gsap-react-animation",
        category: "Web-application",
        featured: true,
      },
      {
        id: 2,
        title: "Landing page for a cryptocurrency startup",
        description: "",
        longDescription:
          "A sleek and modern landing page showcasing a cutting-edge crypto project, designed to attract investors and enthusiasts. Features include bold visuals, clear tokenomics, and seamless navigation for an engaging user experience.",
        technologies: ["HTML", "SCSS", "JavaScript", "Vite"],
        image: "/images/slide-2.png",
        demoUrl: "https://adovg.github.io/spa-crypto-labs/",
        githubUrl: "https://github.com/adovg/spa-crypto-labs",
        category: "Web-application",
        featured: true,
      },
      {
        id: 3,
        title: "Landing page for a real estate rental and sale project",
        description:
          "The design emphasizes trust and clarity, using high-quality imagery and concise messaging to guide users effortlessly. Integrated contact forms and call-to-action buttons encourage conversions, making it ideal for showcasing property portfolios and driving client engagement.",
        longDescription:
          "A clean and professional landing page for a real estate platform offering property rentals and sales. ",
        technologies: ["HTML", "SCSS", "JavaScript", "Vite"],
        image:
          "/images/slide-3.png",
        demoUrl: "https://demo-weather.example.com",
        githubUrl: "https://github.com/example/weather-dashboard",
        category: "Веб-приложение",
        featured: false,
      },
      {
        id: 4,
        title: "Landing page for a poker training platform",
        description:
          "A bold and immersive full responsive landing page for a poker training platform, tailored to serious players seeking mastery.",
        longDescription:
          "Call-to-action elements and persuasive copy make it ideal for converting visitors into subscribers. The design balances entertainment and professionalism, appealing to both casual enthusiasts and competitive players",
        technologies: ["HTML", "SCSS", "JavaScript", "Vite"],
        image:
          "/images/slide-4.png",
        demoUrl: "https://demo-portfolio.example.com",
        githubUrl: "https://github.com/example/portfolio",
        category: "Landing",
        featured: false,
      },
      {
        id: 5,
        title: "Landing page for payment platform",
        description:
          "A minimalist landing page for PaymentOS, a decentralized payment solution tailored for DAOs. The design emphasizes clarity, trust, and modern aesthetics to attract crypto-native communities.",
        longDescription:
          "This site introduces a blockchain-based payment infrastructure with clean visuals.",
        technologies: ["HTML", "SCSS", "JavaScript", "Vite"],
        image:
          "/images/slide-5.png",
        demoUrl: "https://demo-realestate.example.com",
        githubUrl: "https://github.com/example/real-estate",
        category: "Landing",
        featured: true,
      },

      {
        id: 5,
        title: "Web app for startups",
        description:
          "The application was created for those who wish to post their startup ideas.",
        longDescription:
          "The app allows users to register, search for relevant articles, and publish their own posts. View statistics are also available..",
        technologies: ["NextJs", "Sanity", "JavaScript", "Vite", "Tailwind", "Sentry"],
        image:
          "/images/slide-6.png",
        demoUrl: "https://demo-realestate.example.com",
        githubUrl: "https://github.com/example/real-estate",
        category: "Landing",
        featured: true,
      },

    ],
  },

  // Contact information
  contact: {
    title: "Contact Me",
    subtitle: "send me a message",
    email: "oleksidovgalenko@gmail.com",
    phone: "+1234567890",
    location: "",
    social: [
      { name: "GitHub", url: "https://github.com/adovg", icon: "github" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/oleksii-dovgalenko-36b10416b/",
        icon: "linkedin",
      },
      { name: "Telegram", url: "https://t.me/", icon: "message-circle" },
      { name: "Twitter", url: "https://twitter.com/", icon: "twitter" },
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
