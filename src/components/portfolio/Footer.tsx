import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/ViniCerqueira", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/viniciusfsc/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/VCerqueira_dev", label: "Twitter" },
    { icon: Mail, href: "mailto:ctt.cerqueira@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-gradient mb-2">
                Vinicius Cerqueira<span className="text-primary">.</span>
              </p>
              <p className="text-muted-foreground text-sm">
                © {currentYear} Todos os direitos reservados.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Built With */}
            <p className="text-muted-foreground text-sm font-mono">
              Feito com <span className="text-primary">♥</span> e React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
