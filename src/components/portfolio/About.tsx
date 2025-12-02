import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Escrevo código legível, escalável e bem documentado seguindo as melhores práticas.",
    },
    {
      icon: Palette,
      title: "Design Focado",
      description: "Transformo wireframes em interfaces pixel-perfect com atenção aos detalhes.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimizo cada linha para garantir aplicações rápidas e responsivas.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// Sobre Mim</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Quem <span className="text-gradient">Sou Eu</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Sou um desenvolvedor front-end apaixonado por criar experiências
                digitais memoráveis. Com mais de <span className="text-foreground font-medium">1 anos de experiência</span>,
                tenho trabalhado com startups produtos
                que fazem a diferença para o cliente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Minha jornada começou com curiosidade sobre como sites funcionam,
                e hoje transformo essa curiosidade em soluções elegantes usando
                <span className="text-primary"> React</span>,
                <span className="text-primary"> JavaScript</span> e
                <span className="text-primary"> Tailwind</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Quando não estou codando, você pode me encontrar explorando
                novas tecnologias, contribuindo para projetos open-source ou
                tomando um bom café enquanto desenho interfaces.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-xl bg-card border border-border card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
