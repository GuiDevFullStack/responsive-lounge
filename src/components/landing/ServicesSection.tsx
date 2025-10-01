/**
 * COMPONENTE: ServicesSection (Seção de Serviços)
 * 
 * Apresenta os serviços oferecidos em detalhes.
 * 
 * Estrutura:
 * - Cards grandes com descrição detalhada de cada serviço
 */

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BarChart3, Globe, Megaphone, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Projetos Power BI",
      description: "Transforme seus dados em insights poderosos com dashboards interativos e personalizados.",
      features: [
        "Dashboards executivos e operacionais",
        "Integração com múltiplas fontes de dados",
        "Relatórios automatizados",
        "Visualizações personalizadas",
        "Modelagem de dados eficiente"
      ],
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Desenvolvimento de Sites",
      description: "Sites profissionais, responsivos e otimizados para resultados.",
      features: [
        "Design moderno e responsivo",
        "SEO otimizado para Google",
        "Alta performance e velocidade",
        "Integração com sistemas",
        "Manutenção e suporte"
      ],
      color: "text-secondary"
    },
    {
      icon: Megaphone,
      title: "Landing Pages",
      description: "Páginas de vendas focadas em conversão e geração de leads qualificados.",
      features: [
        "Design focado em conversão",
        "Integração com ferramentas de marketing",
        "Otimização para anúncios",
        "Formulários inteligentes",
        "Analytics e rastreamento"
      ],
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Automação de Tarefas",
      description: "Automatize processos repetitivos e aumente a produtividade da sua equipe.",
      features: [
        "Integração entre sistemas",
        "Fluxos de trabalho automatizados",
        "Sincronização de dados",
        "Notificações inteligentes",
        "Relatórios automáticos"
      ],
      color: "text-primary"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto container-padding">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 fade-in">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Nossos Serviços
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Soluções completas para{" "}
            <span className="text-gradient">seu negócio</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Tecnologia e estratégia para alavancar seus resultados
          </p>
        </div>

        {/* GRID DE SERVIÇOS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <Card 
                key={index}
                className="card-hover border-border bg-card fade-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardHeader className="space-y-4 pb-4">
                  {/* Ícone do serviço */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-hero/10 flex items-center justify-center ${service.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Título do serviço */}
                  <h3 className="text-2xl font-bold">
                    {service.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Lista de features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <span className="text-accent text-lg">✓</span>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
