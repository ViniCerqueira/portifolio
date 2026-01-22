import { Brain, Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Desenvolvo arquiteturas ponta a ponta utilizando Node.js e TypeScript, garantindo sistemas escaláveis, manuteníveis e integrados com bancos de dados como PostgreSQL.",
    },
    {
      icon: Palette,
      title: "Design Focado",
      description: "Transformo visões de design em interfaces modernas com React e Tailwind CSS, focando em storytelling e experiências imersivas que guiam o usuário de forma orgânica e intuitiva.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimizo aplicações para alta performance e SEO, garantindo carregamento rápido e fluidez, além de automatizar processos para reduzir o tempo de resposta e impulsionar conversões.",
    },
    {
      icon: Brain,
      title: "Pensamento Analítico",
      description: "Aplico conceitos de Complexidade de Algoritmos e estruturas de dados para resolver problemas lógicos complexos, garantindo que cada funcionalidade seja tão eficiente quanto elegante.",
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
                Sou um Desenvolvedor Full Stack apaixonado por transformar designs complexos em experiências digitais imersivas e funcionais. Com experiência prática em projetos que unem criatividade e estratégia, foco no desenvolvimento de produtos que realmente fazem a diferença para o usuário e para o negócio.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Minha jornada começou com a curiosidade técnica que me levou a cursar <span className="text-foreground">Ciência da Computação</span>. Hoje, transformo essa base teórica em soluções elegantes utilizando o ecossistema
                <span className="text-primary font-medium"> JavaScript</span>, com especialidade em <span className="text-primary font-medium">React</span>,
                <span className="text-primary font-medium"> Node.js</span> e <span className="text-primary font-medium">TypeScript</span>. Tenho um interesse profundo por conceitos de computabilidade e complexidade de algoritmos, o que aplico em projetos autorais como o <span className="text-foreground">"Speed Run Complexidade Quiz"</span>, uma ferramenta voltada para o ensino de Big O notation.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Atualmente, dedico-me ao projeto <span className="text-foreground">"4m"</span>, onde desenvolvi um funil de marketing gamificado focado em storytelling e interação textual, priorizando uma experiência de usuário sem fricções iniciais. Além disso, possuo uma base sólida em suporte de TI e infraestrutura, fruto de mais de dois anos resolvendo problemas técnicos e otimizando fluxos de trabalho corporativos
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Quando não estou codando, você pode me encontrar explorando novos conceitos de linguagens formais, aprimorando interfaces modernas com <span className="text-primary font-medium">Tailwind CSS</span> ou resolvendo desafios de Sudoku para manter o raciocínio lógico afiado.
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
