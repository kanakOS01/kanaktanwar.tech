import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import portfolioData from "@/data/portfolio";

const Projects = () => {
  const { projects } = portfolioData;
  
  return (
    <section className="w-full px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">
        <span className="text-primary">■</span> projects
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="p-3 border border-dashed border-primary/30 relative flex flex-col h-full hover-neon transition-all duration-300 group">
            <div className="absolute top-[-5px] left-[10px] bg-background text-primary/70 px-1 text-sm font-bold group-hover:bg-background group-hover:text-primary group-hover:glow-subtle transition-all duration-300">{project.title}</div>
            <p className="text-sm text-gray-300 mt-2 mb-3">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 my-4">
              {project.techStack.map((tech, idx) => (
                <Badge key={idx} variant="outline" className="text-xs border-primary/30 text-primary">
                  {tech}
                </Badge>
              ))}
            </div>
            
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
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary hover-glow transition-colors"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;