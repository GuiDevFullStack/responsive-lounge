/**
 * COMPONENTE: TestimonialsSection (Seção de Depoimentos)
 * 
 * Exibe depoimentos reais de alunos para construir credibilidade.
 * Utiliza cards com foto, nome, cargo e depoimento.
 * 
 * Objetivo: Prova social - mostrar que outras pessoas tiveram sucesso.
 * 
 * Estrutura:
 * - Título da seção
 * - Grid de cards de depoimentos
 * - Foto, nome, cargo e avaliação em estrelas
 */

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  /**
   * Array com depoimentos de alunos
   * Em produção, estes viriam de um banco de dados ou API
   */
  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "Diretor Comercial",
      company: "Tech Solutions",
      avatar: "RM",
      rating: 5,
      text: "O dashboard em Power BI revolucionou nossa tomada de decisões. Agora conseguimos acompanhar todas as métricas em tempo real e identificar oportunidades rapidamente."
    },
    {
      name: "Fernanda Costa",
      role: "Gerente de Marketing",
      company: "Digital Plus",
      avatar: "FC",
      rating: 5,
      text: "A landing page desenvolvida superou nossas expectativas. Taxa de conversão aumentou 150% no primeiro mês. Profissionalismo e qualidade incomparáveis!"
    },
    {
      name: "Paulo Rocha",
      role: "CEO",
      company: "StartupXYZ",
      avatar: "PR",
      rating: 5,
      text: "As automações implementadas economizaram mais de 20 horas semanais da nossa equipe. Investimento que se pagou em menos de um mês. Altamente recomendado!"
    },
    {
      name: "Mariana Silva",
      role: "Diretora Financeira",
      company: "Consultoria ABC",
      avatar: "MS",
      rating: 5,
      text: "O site ficou exatamente como imaginávamos. Moderno, rápido e fácil de gerenciar. A atenção aos detalhes e o suporte foram excepcionais."
    },
    {
      name: "Carlos Oliveira",
      role: "Gerente de TI",
      company: "Indústria Tech",
      avatar: "CO",
      rating: 5,
      text: "Os relatórios automatizados em Power BI nos deram uma visão 360° do negócio. A integração com nossos sistemas foi perfeita. Excelente trabalho!"
    },
    {
      name: "Ana Beatriz",
      role: "Head de Vendas",
      company: "E-commerce Inc",
      avatar: "AB",
      rating: 5,
      text: "A landing page de vendas que criaram converteu muito além das nossas expectativas. Design impecável e totalmente otimizada para mobile. Parceria de sucesso!"
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto container-padding">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 fade-in">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Depoimentos
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Histórias de{" "}
            <span className="text-gradient">sucesso</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Veja o que nossos clientes estão dizendo sobre nosso trabalho
          </p>
        </div>

        {/* GRID DE DEPOIMENTOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="card-hover border-border bg-card fade-in"
              style={{ 
                animationDelay: `${index * 0.1}s` 
              }}
            >
              <CardContent className="p-6 space-y-4">
                
                {/* HEADER DO CARD - Foto e nome */}
                <div className="flex items-center gap-4">
                  {/* Avatar com iniciais */}
                  <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {testimonial.avatar}
                  </div>

                  {/* Nome e cargo */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg truncate">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* AVALIAÇÃO EM ESTRELAS */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* TEXTO DO DEPOIMENTO */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
