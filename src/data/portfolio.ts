export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  // stacked promotions: extra role lines sharing one bullet list
  roles?: { title: string; period: string }[];
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
  resumeUrl: "https://www.kanaktanwar.tech/resume.pdf",
  experiences: [
    {
      title: "sde 1",
      company: "vetic",
      location: "gurgaon, india",
      period: "jun 2026 to present",
      roles: [
        { title: "sde 1", period: "jun 2026 to present" },
        { title: "sde intern", period: "apr 2025 to jun 2026" }
      ],
      responsibilities: [
        "scaled multi-vendor payment processing across razorpay, payu and pine labs, handling 80k+ monthly transactions and improving payment adherence from 90% to 99.7%.",
        "developed pai, a multi-agent rag chatbot built on langchain resolving 1000+ customer queries daily.",
        "automated the reconciliation and cash-closing system, cutting daily clinic closing time from 2 hours to 5 minutes.",
        "built a dsl-based rules engine with configurable appointment exemptions, reducing revenue leakage to near 0%.",
        "centralized authentication across 15+ services through pyvetic, a shared python backend library.",
        "enhanced app booking workflows for membership and add-on sales with dynamic coupon application, supporting 7% membership and 33% add-on attach rates.",
        "hardened security across the entire vetic platform via api gateway, secrets removal, private storage, and authenticated access controls.",
        "improved backend reliability with distributed locking, db transactions, connection pooling, caching, and async database clients.",
        "defined backend architecture and coding standards for a large-scale refactor, including phased migration, testing, and release practices; introduced ai-assisted development workflows."
      ]
    },
    {
      title: "ai intern",
      company: "mentorpal.ai",
      location: "remote",
      period: "jun 2024 to jul 2024",
      responsibilities: [
        "developed a chrome extension generating personalized linkedin outreach messages using llms.",
        "built an internal resume qa tool using langchain and llms, improving qa efficiency by 40%."
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
      title: "gravitype",
      description: "a terminal typing game where words fall from the sky.",
      githubUrl: "https://github.com/kanakOS01/gravitype",
      techStack: ["python", "textual"]
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
