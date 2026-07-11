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
      title: "software development engineer i",
      company: "vetic",
      location: "gurgaon, india",
      period: "jul 2026 to present",
      responsibilities: [
        "developing and maintaining pyvetic, a shared backend platform library providing authentication, database, queuing, observability, and common infrastructure for vetic's backend applications.",
        "engineered centralized authentication in pyvetic and migrated 15+ backend services to it, standardizing access control and eliminating duplicated implementations."
      ]
    },
    {
      title: "software development intern",
      company: "vetic",
      location: "gurgaon, india",
      period: "apr 2025 to jun 2026",
      responsibilities: [
        "built a config-driven dsl rule engine for appointment exemptions and architected an automated clinic day-closing reconciliation system.",
        "scaled payment processing by integrating pine labs and razorpay, and designed a centralized cash ledger service for multi-clinic operations.",
        "developed an llm-assisted ocr pipeline for structured vaccination record extraction, using redis, mongodb transactions, and rabbitmq."
      ]
    },
    {
      title: "ai intern",
      company: "mentorpal.ai",
      location: "remote",
      period: "jun 2024 to jul 2024",
      responsibilities: [
        "developed a chrome extension generating personalized linkedin outreach messages using llms.",
        "built internal resume qa tool using langchain and llms, boosting qa efficiency by 40%."
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
      category: "languages & frameworks",
      items: "python, go, fastapi, django, flask, gin"
    },
    {
      category: "databases",
      items: "postgresql, mysql, mongodb, redis, elasticsearch"
    },
    {
      category: "infrastructure & devops",
      items: "docker, aws, linux, git, grafana, loki, prometheus"
    },
    {
      category: "misc",
      items: "rest apis, rabbitmq, llms, rag, mcp, agentic ai"
    }
  ],
  projects: [
    {
      title: "pair programmer (pp)",
      description: "an agentic cli coding assistant with a rich tui for autonomous codebase exploration, reasoning, and modification using llms.",
      githubUrl: "https://github.com/kanakOS01/pair-programmer",
      techStack: ["python", "typer", "rich", "mcp", "agentic ai"]
    },
    {
      title: "git chat",
      description: "a rag-based chatbot for conversational question answering over public github repositories using langchain and weaviate.",
      githubUrl: "https://github.com/kanakOS01/gitchat",
      techStack: ["fastapi", "weaviate", "mongodb", "langchain"]
    },
    {
      title: "social media api",
      description: "api for a social app. fastapi + postgres, with ci/cd, docker, tests.",
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
