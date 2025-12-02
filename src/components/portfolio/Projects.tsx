import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Catalogo Web",
      description:
        "O sistema centraliza informações para sanar dúvidas dos clientes, apresentar tratamentos fornecido pela empresa, esclarecer valores e otimiza o processo de agendamento através da integração com o WhatsApp.",
      technologies: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com/ViniCerqueira/catalogo-web.git",
      live: "https://catalogo-web-iota.vercel.app/",
      image: "../public/image.png",
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
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Project Image */}
                <div
                  className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                >
                  <div className="relative overflow-hidden rounded-xl border border-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Project Info */}
                <div className={index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}>
                  <p className="text-primary font-mono text-sm mb-2">Projeto em Destaque</p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
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
                      href="https://github.com/ViniCerqueira/catalogo-web.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      aria-label="Ver código no GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://catalogo-web-iota.vercel.app/"
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
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/ViniCerqueira/catalogo-web.git"
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
