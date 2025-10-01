/**
 * COMPONENTE: CTASection (Call-to-Action Final)
 * 
 * Última chamada para ação antes do footer.
 * Reforça a proposta de valor e incentiva conversão imediata.
 * 
 * Objetivo: Última oportunidade de converter o visitante.
 * 
 * Características:
 * - Fundo com gradiente vibrante
 * - Mensagem urgente/escassez
 * - Botões grandes e destacados
 * - Garantias reforçadas
 */

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, TrendingUp } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background gradiente */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
          
          {/* Badge de urgência */}
          <Badge 
            className="bg-accent text-white border-0 px-4 py-2 text-sm font-semibold"
          >
            <Clock className="mr-2 h-4 w-4" />
            Vagas limitadas: apenas 47 disponíveis nesta turma
          </Badge>

          {/* Título principal */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            Pronto para{" "}
            <span className="text-gradient">
              transformar sua carreira?
            </span>
          </h2>

          {/* Subtítulo motivacional */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Junte-se a mais de 5.000 alunos que já mudaram de vida com o nosso método comprovado. 
            Sua jornada como desenvolvedor web começa hoje!
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:opacity-90 text-lg h-14 px-8 shadow-glow"
            >
              Garantir Minha Vaga Agora
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg h-14 px-8 border-2"
            >
              Falar com Consultor
            </Button>
          </div>

          {/* Garantias visuais */}
          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            
            {/* Garantia 1 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold">Garantia Total</p>
                <p className="text-sm text-muted-foreground">30 dias de reembolso</p>
              </div>
            </div>

            {/* Garantia 2 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-card border-2 border-accent flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="font-bold">Resultado Garantido</p>
                <p className="text-sm text-muted-foreground">Ou seu dinheiro de volta</p>
              </div>
            </div>

            {/* Garantia 3 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-card border-2 border-secondary flex items-center justify-center">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="font-bold">Acesso Imediato</p>
                <p className="text-sm text-muted-foreground">Comece agora mesmo</p>
              </div>
            </div>
          </div>

          {/* Prova social final */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              🔥 <strong className="text-foreground">127 pessoas</strong> compraram nas últimas 24 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
