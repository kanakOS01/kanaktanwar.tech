export interface Experience {
  title: string;
  company: string;
  location: string;
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
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
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
  name: "kanak tanwar",
  titles: ["backend dev", "ai engineer"],
  about: [
    "heyy, i'm kanak, a backend dev and ai engineer. i like open source.",
    "my most active social is x/twitter, you can find me there.",
    "check my github to know more about me. i also write some blogs on dev.to.",
    "ohh, and this site is completely ai generated ;))"
  ],
  socials: {
    linkedin: "https://linkedin.com/in/kanak-tanwar",
    github: "https://github.com/kanakOS01",
    twitter: "https://x.com/kanaktwts",
    email: "mailto:kanaktanwarpro@gmail.com",
    codechef: "https://www.codechef.com/users/kanaktanwarpro",
    leetcode: "https://leetcode.com/u/kanaktanwarpro"
  },
  resumeUrl: "https://kanakos01.github.io/kanakOS01/resume/resume.pdf",
  experiences: [
    {
      "title": "backend developer intern",
      "company": "vetic",
      "location": "gurgaon, india",
      "period": "apr 2025 to present",
      "responsibilities": [
        "optimized api performance by adding indexes, improving sql queries, and enabling connection pooling—reduced response time by up to 90%.",
        "built and launched an ocr feature to extract pet vaccination data from uploaded cards, reducing manual data entry and operational overhead for the ops team.",
        "refactored parts of the codebase to eliminate n+1 queries and improve readability and maintainability.",
        "fixed reported bugs and implemented minor backend features across multiple services in fastapi and django.",
        "implemented razorpay pos and payment link system for automated account closure, improving financial reconciliation accuracy."
      ]
    },
    {
      title: "ai intern",
      company: "mentorpal.ai",
      location: "remote",
      period: "jun 2024 to jul 2024",
      responsibilities: [
        "built an extension to suggest personalized messages to prospective leads on linkedin.",
        "made an internal tool to allow QA with various resumes with langchain + llms.",
        "scraped various websites using selenium and bs4 to provide client leads."
      ]
    },
    {
      title: "club lead",
      company: "deviators club",
      location: "hybrid",
      period: "feb 2024 to feb 2025",
      responsibilities: [
        "co-founded a dev club at college. 500+ folks, lot of sessions.",
        "taught git, dsa, and hosted hackathons that were more fun than exams (obviously)."
      ]
    }
  ],
  skills: [
    {
      category: "languages",
      items: "python, bash, sql, javascript"
    },
    {
      category: "frameworks",
      items: "fastapi, flask, django, langchain, bs4, selenium"
    },
    {
      category: "ai/ml",
      items: "numpy, pandas, matplotlib, scikit-learn, transformers"
    },
    {
      category: "database & orm",
      items: "postgresql, mongodb, sqlalchemy, beanie, alembic"
    },
    {
      category: "tools",
      items: "github actions, aws ec2, digitalocean droplet, docker, redis, fabric"
    }
  ],
  projects: [
    {
      title: "git chat",
      description: "ask anything about a github repo — powered by langchain & weaviate. it's like chatgpt but repo-smart.",
      githubUrl: "https://github.com/kanakOS01/git-chat",
      techStack: ["weaviate", "streamlit", "langchain"]
    },
    {
      title: "social media api",
      description: "api for a social app. fastapi + postgres, with CI/CD, docker, tests.",
      githubUrl: "https://github.com/kanakOS01/social-media-fastapi",
      techStack: ["fastapi", "postgres", "alembic", "pytest", "docker", "github actions"]
    },
    {
      title: "movie recommender",
      description: "a simple content based movie recommender system.",
      githubUrl: "https://github.com/kanakOS01/movie-recommender-system",
      techStack: ["streamlit", "numpy", "pandas", "sklearn"]
    },
    {
      title: "ascii forge",
      description: "cli tool that turns images into ascii art. super fun. super geeky.",
      githubUrl: "https://github.com/kanakOS01/ascii-forge",
      techStack: ["python", "click"],
      liveUrl: "https://pypi.org/project/ascii-forge"
    }
  ]
};

export default portfolioData;
