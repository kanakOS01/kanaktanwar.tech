import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, BookOpen, Heart, FileText } from "lucide-react";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import TypewriterEffect from "./TypewriterEffect";
import portfolioData from "@/data/portfolio";

const Header = () => {
  const { name, titles, socials, resumeUrl } = portfolioData;
  
  return (
    <header className="w-full px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl font-bold text-primary">
            <TypewriterEffect text={name} />
          </h1>
          <div className="text-sm mt-1 space-y-1">
            {titles.map((title, index) => (
              <p key={index}>{title}</p>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3 flex-wrap justify-center">
          <a 
            href={socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary hover-glow transition-colors mx-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href={socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary hover-glow transition-colors mx-1"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={socials.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary hover-glow transition-colors mx-1"
            aria-label="Twitter Profile"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a 
            href={socials.codechef} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary hover-glow transition-colors mx-1"
            aria-label="CodeChef Profile"
          >
            <SiCodechef className="w-5 h-5" />
          </a>
          <a 
            href={socials.leetcode} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary hover-glow transition-colors mx-1"
            aria-label="LeetCode Profile"
          >
            <SiLeetcode className="w-5 h-5" />
          </a>
          <a 
            href={socials.email} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary hover-glow transition-colors mx-1"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center md:justify-start space-x-3">
        <Button 
          variant="outline" 
          size="sm"
          className="border-primary/70 text-primary hover:bg-primary/30 hover:border-primary hover:text-primary hover-glow transition-all duration-300 h-8 px-3"
          asChild
        >
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <FileText className="w-4 h-4 " />
            resume
          </a>
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="border-primary/70 text-primary hover:bg-primary/30 hover:border-primary hover:text-primary hover-glow transition-all duration-300 h-8 px-3"
          asChild
        >
          <a href="/blog" rel="noopener noreferrer">
            <BookOpen className="w-4 h-4 " />
            blogs
          </a>
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="border-primary/70 text-primary hover:bg-primary/30 hover:border-primary hover:text-primary hover-glow transition-all duration-300 h-8 px-3"
          asChild
        >
          <a href="https://github.com/sponsors/kanakOS01" target="_blank" rel="noopener noreferrer">
            <Heart className="w-4 h-4 " />
            sponsor
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
