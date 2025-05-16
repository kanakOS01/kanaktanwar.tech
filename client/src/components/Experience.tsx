import portfolioData from "@/data/portfolio";

const Experience = () => {
  const { experiences } = portfolioData;
  
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-6">
        <span className="text-primary">■</span> Experience
      </h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="p-4 border border-dashed border-primary/50 relative hover-neon transition-all duration-300 group">
            <div className="absolute top-[-5px] left-[10px] bg-background text-primary px-1 text-sm glow group-hover:bg-background">{exp.title}</div>
            <div className="flex flex-col justify-between mt-2">
              <p className="text-sm text-gray-300 mb-1">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
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