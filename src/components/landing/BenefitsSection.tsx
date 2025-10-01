/**
 * COMPONENTE: BenefitsSection (Seção de Benefícios)
 * 
 * Esta seção apresenta os principais benefícios e diferenciais do curso.
 * Utiliza cards com ícones para comunicar valor de forma visual.
 * 
 * Objetivo: Reforçar porque o usuário deve escolher este curso.
 * 
 * Estrutura:
 * - Título da seção
 * - Grid de cards com ícones + título + descrição
 * - Efeito hover para interatividade
 */

import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Award, 
  Users, 
  Clock, 
  Code, 
  Headphones,
  TrendingUp,
  Shield
} from "lucide-react";

const BenefitsSection = () => {
  /**
   * Array com todos os benefícios a serem exibidos
   * Cada benefício tem: ícone, título e descrição
   */
  const benefits = [
    {
      icon: Zap,
      title: "Power BI Profissional",
      description: "Dashboards interativos que transformam dados brutos em insights acionáveis para sua empresa.",
      color: "text-accent"
    },
    {
      icon: Code,
      title: "Sites Personalizados",
      description: "Desenvolvimento de sites modernos, responsivos e otimizados para conversão.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Landing Pages",
      description: "Páginas de alta performance focadas em conversão e geração de leads qualificados.",
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "Automação de Tarefas",
      description: "Automatize processos repetitivos e ganhe tempo para focar no que realmente importa.",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Projetos entregues com excelência, seguindo as melhores práticas do mercado.",
      color: "text-primary"
    },
    {
      icon: Headphones,
      title: "Suporte Dedicado",
      description: "Acompanhamento completo durante e após a entrega do projeto.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Soluções Escaláveis",
      description: "Projetos que crescem junto com seu negócio, preparados para o futuro.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Segurança e Confiança",
      description: "Seus dados e projetos protegidos com as melhores práticas de segurança.",
      color: "text-primary"
    }
  ];

  return (
    <section id="benefits" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto container-padding">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 fade-in">
          {/* Subtítulo pequeno acima do título principal */}
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Por que escolher nossos serviços?
          </p>
          
          {/* Título principal da seção - H2 para hierarquia SEO */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Benefícios que fazem a{" "}
            <span className="text-gradient">diferença</span>
          </h2>
          
          {/* Descrição complementar */}
          <p className="text-lg text-muted-foreground">
            Muito mais do que projetos: soluções completas para seu negócio
          </p>
        </div>

        {/* GRID DE CARDS DE BENEFÍCIOS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <Card 
                key={index}
                className="card-hover border-border bg-card fade-in"
                style={{ 
                  animationDelay: `${index * 0.1}s` // Efeito cascata na animação
                }}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Ícone do benefício */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-hero/10 flex items-center justify-center ${benefit.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Título do benefício */}
                  <h3 className="text-xl font-bold">
                    {benefit.title}
                  </h3>

                  {/* Descrição do benefício */}
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
