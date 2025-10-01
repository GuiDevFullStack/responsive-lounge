/**
 * COMPONENTE: Footer (Rodapé)
 * 
 * Rodapé da página com informações da empresa e links úteis.
 * 
 * Características:
 * - Logo e descrição breve
 * - Links para páginas legais
 * - Redes sociais
 * - Copyright
 */

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  /**
   * Links organizados por categoria
   */
  const footerLinks = {
    course: {
      title: "Curso",
      links: [
        { label: "Conteúdo Programático", href: "#content" },
        { label: "Depoimentos", href: "#testimonials" },
        { label: "Preços", href: "#pricing" },
        { label: "FAQ", href: "#faq" }
      ]
    },
    company: {
      title: "Empresa",
      links: [
        { label: "Sobre Nós", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Carreiras", href: "#" },
        { label: "Contato", href: "#" }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { label: "Termos de Uso", href: "#" },
        { label: "Política de Privacidade", href: "#" },
        { label: "Política de Reembolso", href: "#" },
        { label: "Cookies", href: "#" }
      ]
    }
  };

  /**
   * Redes sociais
   */
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto container-padding">
        
        {/* SEÇÃO PRINCIPAL DO FOOTER */}
        <div className="py-12 lg:py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          
          {/* COLUNA 1 - Logo e descrição */}
          <div className="lg:col-span-2 space-y-4">
            {/* Logo */}
            <a 
              href="#hero" 
              className="flex items-center gap-2 font-bold text-xl text-gradient w-fit"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span>WebMaster Pro</span>
            </a>

            {/* Descrição */}
            <p className="text-muted-foreground max-w-sm">
              Transformamos iniciantes em desenvolvedores web profissionais através 
              de um método prático e comprovado.
            </p>

            {/* Redes sociais */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary transition-colors flex items-center justify-center group"
                  >
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* COLUNAS 2-4 - Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SEÇÃO INFERIOR - Copyright */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} WebMaster Pro. Todos os direitos reservados.
            </p>
            
            <p>
              CNPJ: 00.000.000/0001-00 | Desenvolvido com ❤️ no Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
