import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const featuredProjects = [
    {
      title: "DonaK Beauty",
      subtlitle: "Catalogo Web",
      description:
        "O sistema centraliza informações para sanar dúvidas dos clientes, apresentar tratamentos fornecido pela empresa, esclarecer valores e otimiza o processo de agendamento através da integração com o WhatsApp.",
      technologies: ["React", "TypeScript", "Tailwind", "Node.js"],
      github: "https://github.com/ViniCerqueira/DonaK-Beauty",
      live: "https://www.donakbeauty.com/",
    },
    {
      title: "Method 4M",
      subtlitle: "Funil Gamificado",
      description:
        "Interface web minimalista desenvolvida para um funil de marketing gamificado. O projeto utiliza o conceito de simulação de interface de smartphone para criar um ponto de contacto altamente imersivo. Desenvolvido com foco em interatividade e psicologia do utilizador, o projeto faz parte de um sistema de conversão de leads que privilegia o conteúdo narrativo e a simplicidade de uso.",
      technologies: ["React", "TypeScript", "Tailwind", "Node.js"],
      github: "https://github.com/ViniCerqueira/Method-4M",
      live: "https://4m-nine.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// Projetos</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Trabalhos <span className="text-gradient">Recentes</span>
            </h2>
          </div>

          {/* Featured Projects */}
          <div className="space-y-20 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`gap-8 items-center "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Project Info */}
                < div className={index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}>
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <h4 className="text-gradient mb-4">{project.subtlitle}</h4>
                  <div className="p-6 rounded-xl bg-card border border-border mb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "lg:justify-end" : ""
                      }`}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""
                      }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      aria-label="Ver código no GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      aria-label="Ver projeto ao vivo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          < div className="text-center mt-12" >
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/ViniCerqueira"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Mais no GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
