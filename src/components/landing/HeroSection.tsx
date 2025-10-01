/**
 * COMPONENTE: HeroSection (Seção Principal/Banner)
 * 
 * Esta é a primeira seção que o visitante vê ao entrar na página.
 * Contém o título principal, subtítulo, CTAs e imagem/vídeo ilustrativo.
 * 
 * Objetivo: Capturar atenção e comunicar a proposta de valor em segundos.
 * 
 * Elementos:
 * - Título impactante com gradiente
 * - Subtítulo explicativo
 * - Botões de ação (CTA primário e secundário)
 * - Badges de prova social (número de alunos, avaliação)
 * - Imagem ilustrativa
 */

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-overlay"
    >
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* COLUNA ESQUERDA - Conteúdo textual */}
          <div className="text-center lg:text-left space-y-8 fade-in">
            
            {/* Badge de novidade/destaque */}
            <Badge 
              className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
            >
              🚀 Turma 2025 com 40% de desconto
            </Badge>

            {/* Título principal - H1 para SEO */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Domine o{" "}
              <span className="text-gradient">
                Desenvolvimento Web
              </span>
              {" "}em 12 Semanas
            </h1>

            {/* Subtítulo - Proposta de valor clara */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Do zero ao profissional. Aprenda HTML, CSS, JavaScript e React 
              criando projetos reais. Certificado reconhecido e suporte vitalício inclusos.
            </p>

            {/* Botões de ação (CTAs) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* CTA Primário - Maior destaque */}
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 transition-opacity text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 shadow-glow"
              >
                Garantir Minha Vaga
              </Button>
              
              {/* CTA Secundário - Alternativa menos comprometedora */}
              <Button 
                size="lg" 
                variant="outline"
                className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 border-2"
              >
                <Play className="mr-2 h-5 w-5" />
                Assistir Demonstração
              </Button>
            </div>

            {/* Prova social - Estatísticas de credibilidade */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              
              {/* Número de alunos */}
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">
                  <span className="text-foreground">+5.000</span>
                  <span className="text-muted-foreground ml-1">alunos</span>
                </span>
              </div>

              {/* Avaliação */}
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="flex">
                  {/* 5 estrelas preenchidas */}
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm font-semibold">
                  <span className="text-foreground">4.9</span>
                  <span className="text-muted-foreground ml-1">de avaliação</span>
                </span>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA - Imagem/Visual */}
          <div className="relative fade-in">
            {/* Container com efeito de profundidade */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Borda gradiente decorativa */}
              <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl"></div>
              
              {/* Imagem placeholder - Você pode substituir por uma imagem real */}
              <div className="relative bg-card rounded-2xl p-8 lg:p-12 border border-border">
                <div className="aspect-video bg-gradient-hero/10 rounded-xl flex items-center justify-center">
                  <Play className="h-16 w-16 text-primary opacity-50" />
                </div>
                
                {/* Cards flutuantes decorativos (efeito de UI moderna) */}
                <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-2xl">💻</span>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Certificado</p>
                      <p className="text-sm font-semibold">Garantido</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Acesso</p>
                      <p className="text-sm font-semibold">Vitalício</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
