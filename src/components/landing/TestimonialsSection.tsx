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
      name: "Maria Silva",
      role: "Desenvolvedora Front-end",
      company: "TechCorp",
      avatar: "MS", // Iniciais para avatar
      rating: 5,
      text: "Este curso mudou minha vida! Em 3 meses consegui meu primeiro emprego como desenvolvedora. O conteúdo é extremamente prático e os projetos me ajudaram muito nas entrevistas."
    },
    {
      name: "João Santos",
      role: "Full Stack Developer",
      company: "StartupXYZ",
      avatar: "JS",
      rating: 5,
      text: "Já tinha conhecimento básico, mas o curso me deu confiança para aplicar para vagas melhores. Hoje trabalho remotamente ganhando em dólar. Investimento que se pagou sozinho!"
    },
    {
      name: "Ana Costa",
      role: "Web Designer",
      company: "Freelancer",
      avatar: "AC",
      rating: 5,
      text: "Como designer, sempre quis codar minhas próprias criações. Consegui! A didática é incrível e o suporte da comunidade fez toda diferença. Super recomendo!"
    },
    {
      name: "Carlos Oliveira",
      role: "Desenvolvedor React",
      company: "AgênciaWeb",
      avatar: "CO",
      rating: 5,
      text: "Já fiz outros cursos mas este é disparado o melhor. Os professores são acessíveis, o conteúdo é atualizado e os projetos são desafiadores na medida certa."
    },
    {
      name: "Juliana Ferreira",
      role: "Front-end Junior",
      company: "FinTech SA",
      avatar: "JF",
      rating: 5,
      text: "Saí do zero absoluto para criar sites profissionais. O certificado me ajudou a validar meu conhecimento e hoje trabalho no que sempre sonhei. Gratidão!"
    },
    {
      name: "Pedro Almeida",
      role: "Desenvolvedor Web",
      company: "E-commerce Inc",
      avatar: "PA",
      rating: 5,
      text: "Melhor investimento que já fiz na minha carreira. Em 4 meses dobrei meu salário. O acesso vitalício é ótimo para revisar conceitos sempre que preciso."
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
            Veja o que nossos alunos estão dizendo sobre o curso
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
