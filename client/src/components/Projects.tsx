import { Github, ExternalLink } from "lucide-react";
import portfolioData from "@/data/portfolio";

const Projects = () => {
  const { projects } = portfolioData;
  
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-6">
        <span className="text-primary">■</span> Projects
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="p-3 border border-dashed border-primary/50 relative flex flex-col h-full hover-neon transition-all duration-300 group">
            <div className="absolute top-[-5px] left-[10px] bg-background text-primary px-1 text-sm glow group-hover:bg-background">{project.title}</div>
            <p className="text-sm text-gray-300 mt-2 mb-4">{project.description}</p>
            <div className="flex justify-end space-x-3 mt-auto">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary hover-glow transition-colors"
                aria-label={`${project.title} GitHub repository`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={project.githubUrl.replace('github.com', 'github.io').replace(/\/[^\/]+$/, '')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary hover-glow transition-colors"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;