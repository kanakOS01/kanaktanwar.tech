import portfolioData from "@/data/portfolio";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const { experiences } = portfolioData;
  
  return (
    <section className="w-full px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">
        <span className="text-primary">■</span> experience
      </h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="p-4 border border-dashed border-primary/70 relative hover-neon transition-all duration-300 group">
            <div className="absolute top-[-5px] left-[10px] bg-background text-primary text-sm px-1 glow group-hover:bg-background">{exp.title}</div>
            <div className="flex flex-col justify-between mt-2">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-300 font-semibold">{exp.company}</p>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{exp.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{exp.period}</span>
              </div>
            </div>
            <ul className="text-sm space-y-2 mt-3">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;