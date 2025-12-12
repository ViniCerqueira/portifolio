import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    if (typeof window === "undefined") return;
    const phone = "5511916781256"; // número em formato internacional sem '+'
    const text = "Olá! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.";
    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(
      navigator.userAgent
    );
    const url = isMobile
      ? `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
        text
      )}`
      : `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
        text
      )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-primary font-mono text-sm mb-2">// Contato</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos <span className="text-gradient">Conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Se você tem uma ideia ou apenas quer trocar uma ideia sobre tecnologia,
            minha caixa de entrada está sempre aberta!
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <span>ctt.cerqueira@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>São Paulo, Brasil</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="xl" onClick={handleWhatsApp}>
            <Send className="w-5 h-5 mr-2" />
            Enviar Mensagem
          </Button>

          {/* Alternative */}
          <p className="text-muted-foreground text-sm mt-8">
            Ou me encontre nas redes sociais
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
