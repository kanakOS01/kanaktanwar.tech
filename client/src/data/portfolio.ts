export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Skill {
  category: string;
  items: string;
}

export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  asciiArt: string;
}

export interface PortfolioData {
  name: string;
  titles: string[];
  about: string[];
  socials: {
    linkedin: string;
    github: string;
    twitter: string;
    email: string;
    devto: string;
    codechef: string;
    leetcode: string;
  };
  resumeUrl: string;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
}

const portfolioData: PortfolioData = {
  name: "Kanak Tanwar",
  titles: ["AI Engineer", "Backend Developer", "Problem Solver"],
  about: [
    "Hello! I'm a backend developer and AI engineer passionate about building intelligent systems. I enjoy solving complex problems with elegant solutions, experimenting with new technologies, and contributing to open source.",
    "When I'm not coding, you can find me exploring new technologies, participating in hackathons, or teaching others about programming."
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/kanaktanwar",
    github: "https://github.com/kanaktanwar",
    twitter: "https://twitter.com/kanaktanwar",
    email: "mailto:kanak.tanwar@example.com",
    devto: "https://dev.to/kanaktanwar",
    codechef: "https://www.codechef.com/users/kanaktanwar",
    leetcode: "https://leetcode.com/kanaktanwar"
  },
  resumeUrl: "/resume.pdf",
  experiences: [
    {
      title: "AI Intern",
      company: "Mentorpal.ai",
      period: "Jan 2024 to Jul 2024",
      responsibilities: [
        "Engineered an extension to suggest personalized messages to prospective leads on LinkedIn.",
        "Developed an internal tool to allow QA with various resumes using LangChain and LLM.",
        "Scraped various websites using Selenium and BeautifulSoup to provide client leads."
      ]
    },
    {
      title: "Club Lead",
      company: "Deviators Club",
      period: "Feb 2024 to Feb 2025",
      responsibilities: [
        "Co-Founded a coding and development club in college.",
        "Taught students about technologies like git, dsa and organized hackathons.",
        "Built a community of 500+ members."
      ]
    }
  ],
  skills: [
    {
      category: "Languages",
      items: "Python, Bash, SQL, JavaScript"
    },
    {
      category: "Frameworks",
      items: "FastAPI, Flask, LangChain, BS4, Selenium"
    },
    {
      category: "AI/ML",
      items: "NumPy, Pandas, Matplotlib, Scikit-Learn, Transformers"
    },
    {
      category: "Database & ORM",
      items: "PostgreSQL, SQL Alchemy, Alembic"
    },
    {
      category: "Tools",
      items: "GitHub Actions, AWS EC2, DigitalOcean Droplet, Docker"
    }
  ],
  projects: [
    {
      title: "Git Chat",
      description: "RAG-based Q&A with GitHub repositories",
      githubUrl: "https://github.com/kanaktanwar/git-chat",
      asciiArt: `
    ____  _  _____  ____  _   _    _  _____ 
   / ___|(_)(___ _)/  _ \\| | | |  / \\(___ _)
  | |  _ | |  / / | / \\|| |_| | / _ \\ / / 
  | |_| || | / /  | |-||| |_| |/ ___ \\ / / 
   \\____||_|/_/   |_| |_|\\___//_/   \\_/_/  
      `
    },
    {
      title: "Social Media API",
      description: "FastAPI CRUD ops with Postgres and CI/CD",
      githubUrl: "https://github.com/kanaktanwar/social-api",
      asciiArt: `
     ____ ___   ____ ____ ____ ____ _      ____ ____ ____ 
    (  __/ __) /  __/  _ (_  _/ ___/ \\  /|(  __/  _ \\_  _)
     ) _(\\__ \\ |  \\/| / \\| )( \\___ \\ |\\/| |  _|| / \\| )( 
    (____(___/ \\____\\_|\\_|(__/\\____/_|  |_|____\\_|\\_|(__)
      `
    },
    {
      title: "Movie Recommender",
      description: "Content based Recommendation System",
      githubUrl: "https://github.com/kanaktanwar/movie-recommender",
      asciiArt: `
    /\\/\\  /\\___/\\  /\\ /\\  /\\_/\\___
   /    \\/ / _ \\ \\/ // \\/ _ \\/\\__\\
  / /\\/\\ \\ \\_/ /\\  _/ / / \\_/ / /__
  \\/    \\/\\___/  \\/ \\/\\/\\___/\\/___/
      `
    },
    {
      title: "House Price Prediction",
      description: "ML model with Flask and AWS EC2",
      githubUrl: "https://github.com/kanaktanwar/house-price",
      asciiArt: `
    _   _  _____  _   _  ____  _____ 
   | | | |/  __/ | | | |/ ___)/  __/ 
   | |_| || |  _ | | | |\\___ \\|  \\   
   |  _  || |_| || |_| |/____/|  /_  
   |_| |_|\\____/ \\___/(\\____/\\____\\ 
      `
    }
  ]
};

export default portfolioData;
