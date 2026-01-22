const Skills = () => {
  const technologies = [
    "TypeScript", "JavaScript", "React", "Node.js", "Tailwind CSS", "PostgreSQL"
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// Habilidades</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Tech <span className="text-gradient">Stack</span>
            </h2>
          </div>
          {/* Technologies Cloud */}
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-mono bg-muted/50 text-muted-foreground rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default Skills;
