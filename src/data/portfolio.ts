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
      "title": "backend developer intern",
      "company": "vetic",
      "location": "gurgaon, india",
      "period": "apr 2025 to present",
      "responsibilities": [
        "worked on backend systems for high-scale clinic operations, focusing on performance, reliability, and financial workflows.",
        "built and optimized APIs, payment systems, and internal tooling using fastapi, django, postgres, redis, and async processing with queues.",
        "also explored llm-powered features like ocr pipelines for structured data extraction."
      ]
    },
    {
      title: "ai intern",
      company: "mentorpal.ai",
      location: "remote",
      period: "jun 2024 to jul 2024",
      responsibilities: [
        "worked on applied llm use-cases including lead generation, personalization, and internal tooling.",
        "built browser automation pipelines and lightweight ai tools using langchain, selenium, and python to improve workflow efficiency."
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
      category: "databases & orm",
      items: "postgresql, mysql, mongodb, redis, sqlalchemy, beanie, alembic, golang-migrate"
    },
    {
      category: "devops & tools",
      items: "git, linux, docker, aws, grafana, loki, prometheus"
    },
    {
      category: "misc",
      items: "rest apis, rabbitmq, cron jobs"
    }
  ],
  projects: [
    {
      title: "pair programmer (pp)",
      description: "a terminal-based ai coding assistant that can read, search, and modify codebases using tool-driven workflows. designed with an agentic architecture, rich tui, and support for multi-step edits across files.",
      techStack: ["python", "typer", "rich", "open router"]
    },
    {
      title: "git chat",
      description: "ask anything about a github repo — powered by streamlit, langchain & weaviate. it's like chatgpt but repo-smart.",
      githubUrl: "https://github.com/kanakOS01/gitchat",
      techStack: ["weaviate", "streamlit", "langchain", "mongodb"]
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
