/**
 * COMPONENTE: PricingSection (Seção de Preços)
 * 
 * Apresenta os planos de pagamento disponíveis.
 * Mostra preço, benefícios inclusos e botão de compra.
 * 
 * Objetivo: Converter visitantes em clientes com proposta clara.
 * 
 * Estrutura:
 * - Título da seção
 * - Cards de planos (Basic, Pro, Premium)
 * - Destaque para o plano recomendado
 * - Lista de features incluídas
 */

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingSection = () => {
  /**
   * Array com os planos disponíveis
   * highlighted = true para destacar o plano recomendado
   */
  const plans = [
    {
      name: "Básico",
      price: "497",
      originalPrice: "997",
      description: "Perfeito para começar sua jornada",
      highlighted: false,
      features: [
        "Acesso aos 6 módulos completos",
        "62 horas de conteúdo em vídeo",
        "10 projetos práticos",
        "Certificado de conclusão",
        "Acesso vitalício ao conteúdo",
        "Atualizações gratuitas",
        "Suporte via e-mail"
      ],
      cta: "Começar Agora"
    },
    {
      name: "Profissional",
      price: "797",
      originalPrice: "1497",
      description: "Mais popular entre nossos alunos",
      highlighted: true, // Plano em destaque
      badge: "MAIS POPULAR",
      features: [
        "Tudo do plano Básico",
        "Comunidade exclusiva no Discord",
        "Mentorias em grupo semanais",
        "Material complementar (e-books)",
        "Suporte prioritário via WhatsApp",
        "Desafios extras e gamificação",
        "Networking com empresas parceiras"
      ],
      cta: "Garantir Vaga"
    },
    {
      name: "Premium VIP",
      price: "1.497",
      originalPrice: "2997",
      description: "Acompanhamento personalizado",
      highlighted: false,
      features: [
        "Tudo do plano Profissional",
        "5 mentorias individuais 1:1",
        "Revisão de código personalizada",
        "Preparação para entrevistas",
        "Indicação para vagas parceiras",
        "Acesso a cursos extras (bônus)",
        "Suporte vitalício prioritário"
      ],
      cta: "Quero o VIP"
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="container mx-auto container-padding">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 fade-in">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Investimento
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Escolha o plano ideal{" "}
            <span className="text-gradient">para você</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Todos os planos com garantia incondicional de 30 dias
          </p>
        </div>

        {/* GRID DE PLANOS */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`
                relative border-2 fade-in
                ${plan.highlighted 
                  ? 'border-primary shadow-glow scale-105 md:scale-110' 
                  : 'border-border'
                }
              `}
              style={{ 
                animationDelay: `${index * 0.1}s` 
              }}
            >
              {/* Badge "Mais Popular" no plano destacado */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-hero text-white shadow-lg px-4 py-1">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                {/* Nome do plano */}
                <h3 className="text-2xl font-bold mb-2">
                  {plan.name}
                </h3>

                {/* Descrição breve */}
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                {/* PREÇO */}
                <div className="space-y-2">
                  {/* Preço original riscado */}
                  <p className="text-sm text-muted-foreground line-through">
                    De R$ {plan.originalPrice}
                  </p>

                  {/* Preço com desconto */}
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-sm font-semibold">R$</span>
                    <span className="text-5xl font-bold text-gradient">
                      {plan.price}
                    </span>
                  </div>

                  {/* Parcelamento */}
                  <p className="text-sm text-muted-foreground">
                    ou 12x de R$ {Math.ceil(parseFloat(plan.price.replace('.', '')) / 12)}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* LISTA DE FEATURES */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start gap-3"
                    >
                      {/* Ícone de check */}
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      {/* Texto da feature */}
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* BOTÃO DE COMPRA */}
                <Button 
                  size="lg"
                  className={`
                    w-full
                    ${plan.highlighted 
                      ? 'bg-gradient-hero hover:opacity-90 shadow-glow' 
                      : 'bg-gradient-cta hover:opacity-90'
                    }
                  `}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GARANTIA - Reforço de segurança */}
        <div className="text-center mt-12 fade-in">
          <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
            <span className="text-2xl">🛡️</span>
            <p className="text-sm font-semibold">
              Garantia de 30 dias ou seu dinheiro de volta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
