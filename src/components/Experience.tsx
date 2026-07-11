import portfolioData from "@/data/portfolio";
import { MapPin, Calendar } from "lucide-react";

interface GroupedExperience {
  company: string;
  location: string;
  roles: {
    title: string;
    period: string;
    responsibilities: string[];
  }[];
}

const Experience = () => {
  const { experiences } = portfolioData;

  // Group consecutive experiences by company
  const groupedExperiences: GroupedExperience[] = [];
  experiences.forEach((exp) => {
    const lastGroup = groupedExperiences[groupedExperiences.length - 1];
    if (lastGroup && lastGroup.company.toLowerCase() === exp.company.toLowerCase()) {
      lastGroup.roles.push({
        title: exp.title,
        period: exp.period,
        responsibilities: exp.responsibilities,
      });
    } else {
      groupedExperiences.push({
        company: exp.company,
        location: exp.location,
        roles: [{
          title: exp.title,
          period: exp.period,
          responsibilities: exp.responsibilities,
        }],
      });
    }
  });
  
  return (
    <section className="w-full px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">
        <span className="text-primary">■</span> experience
      </h2>
      
      <div className="space-y-6">
        {groupedExperiences.map((group, index) => (
          <div key={index} className="p-4 border border-dashed border-primary/30 relative hover-neon transition-all duration-300 group">
            {/* Company name at the box top */}
            <div className="absolute top-[-5px] left-[10px] bg-background text-primary/70 text-sm px-1 font-bold group-hover:bg-background group-hover:text-primary group-hover:glow-subtle transition-all duration-300">
              {group.company}
            </div>
            
            {/* First Role */}
            <div className="flex flex-col justify-between mt-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-300 font-semibold">{group.roles[0].title}</span>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{group.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{group.roles[0].period}</span>
              </div>
            </div>
            <ul className="text-sm space-y-2 mt-3">
              {group.roles[0].responsibilities.map((resp, idx) => (
                <li key={idx}>
                  {resp}
                </li>
              ))}
            </ul>

            {/* Subsequent Roles (with division lines) */}
            {group.roles.slice(1).map((role, rIdx) => (
              <div key={rIdx} className="mt-4">
                <div className="border-t border-dashed border-primary/20 pt-4 group-hover:border-primary/50 group-hover:filter group-hover:drop-shadow-[0_0_2px_hsl(var(--primary)/0.5)] transition-all duration-300" />
                
                <div className="flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-300 font-semibold">{role.title}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{role.period}</span>
                  </div>
                </div>
                <ul className="text-sm space-y-2 mt-3">
                  {role.responsibilities.map((resp, idx) => (
                    <li key={idx}>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;