import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEmail = () => {
    if (typeof window === "undefined") return;
    const mailto = "mailto:ctt.cerqueira@gmail.com";
    window.location.href = mailto;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 opacity-0 animate-fade-up">
            &lt;Olá, eu sou /&gt;
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-up animation-delay-100">
            Vinicius <span className="text-gradient">Cerqueira</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 opacity-0 animate-fade-up animation-delay-200">
            Desenvolvedor <span className="text-foreground">Full Stack</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up animation-delay-300">
            Elevando o padrão de produtos digitais com React, Node.js e TypeScript. Desenvolvedor <strong className="text-gradient">Full Stack</strong> focado em criar interfaces modernas, sistemas escaláveis e experiências de usuário que impulsionam o crescimento de negócios.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-up animation-delay-400">
            <Button variant="hero" size="lg" onClick={scrollToProjects}>
              Ver Projetos
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">Entrar em Contato</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 opacity-0 animate-fade-up animation-delay-500">
            <a
              href="https://github.com/ViniCerqueira"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/viniciusfsc/"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ctt.cerqueira@gmail.com"
              onClick={(e) => {
                e.preventDefault();
                handleEmail();
              }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-500">
          <button
            onClick={scrollToProjects}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 animate-float"
            aria-label="Rolar para baixo"
          >
          </button>
        </div>
      </div>
    </section >
  );
};

export default Hero;
