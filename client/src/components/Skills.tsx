import portfolioData from "@/data/portfolio";

const Skills = () => {
  const { skills } = portfolioData;
  
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-6">
        <span className="text-primary">■</span> Skills
      </h2>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="relative transition-all duration-300 hover:pl-2">
            <h3 className="text-primary text-sm font-semibold mb-2 border-b border-primary/30 pb-1">
              <span className="bg-primary/10 px-2 py-0.5 rounded hover-glow inline-block">{skill.category}</span>
            </h3>
            <p className="text-sm pl-2 border-l-2 border-primary/30 hover:border-primary transition-all duration-300">{skill.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;