/**
 * COMPONENTE: Header (Cabeçalho fixo)
 * 
 * Este é o cabeçalho da página que fica fixo no topo durante o scroll.
 * Contém o logo e navegação para as seções da página.
 * 
 * Características:
 * - Posição fixa (fixed) no topo
 * - Fundo com blur para efeito glassmorphism
 * - Links de navegação smooth scroll
 * - Botão CTA de destaque
 * - Responsivo (menu hamburguer em mobile)
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  // Estado para controlar abertura/fechamento do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array com os links de navegação
  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#services" },
    { label: "Benefícios", href: "#benefits" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Contato", href: "#contact" },
  ];

  /**
   * Função para fechar o menu após clicar em um link (mobile)
   */
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* LOGO - Lado esquerdo */}
          <a 
            href="#hero" 
            className="flex items-center gap-2 font-bold text-xl lg:text-2xl text-gradient"
          >
            {/* Ícone do logo (círculo com gradiente) */}
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
              <span className="text-white font-bold text-sm lg:text-base">W</span>
            </div>
            {/* Nome da marca */}
            <span className="hidden sm:inline">Soluções Tech</span>
            <span className="sm:hidden">ST</span>
          </a>

          {/* NAVEGAÇÃO DESKTOP - Centro/Direita (oculto em mobile) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Botão CTA principal */}
            <Button 
              size="lg"
              className="bg-gradient-cta hover:opacity-90 transition-opacity shadow-md"
              asChild
            >
              <a href="#contact">Solicitar Orçamento</a>
            </Button>
          </nav>

          {/* BOTÃO MENU HAMBURGUER - Mobile apenas */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MENU MOBILE - Dropdown (visível apenas quando isMenuOpen = true) */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                size="lg"
                className="bg-gradient-cta hover:opacity-90 transition-opacity w-full"
                asChild
              >
                <a href="#contact" onClick={handleNavClick}>Solicitar Orçamento</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
