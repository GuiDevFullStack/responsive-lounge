/**
 * COMPONENTE: FAQSection (Perguntas Frequentes)
 * 
 * Responde as dúvidas mais comuns para reduzir objeções de compra.
 * Utiliza accordion para economizar espaço na página.
 * 
 * Objetivo: Eliminar barreiras e objeções antes da conversão.
 * 
 * Estrutura:
 * - Título da seção
 * - Accordion com perguntas e respostas
 * - Cada item é expansível
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  /**
   * Array com perguntas e respostas frequentes
   * Em produção, pode vir de CMS ou banco de dados
   */
  const faqs = [
    {
      question: "Preciso ter conhecimento prévio em programação?",
      answer: "Não! O curso foi projetado para iniciantes absolutos. Começamos do zero, explicando cada conceito de forma clara e didática. Se você sabe usar um computador e tem vontade de aprender, você consegue!"
    },
    {
      question: "Quanto tempo tenho para concluir o curso?",
      answer: "Você tem acesso vitalício! Pode assistir as aulas no seu próprio ritmo, pausar e retomar quando quiser. Em média, nossos alunos completam o curso em 3 meses estudando 2-3 horas por dia, mas não há prazo limite."
    },
    {
      question: "O certificado é reconhecido no mercado?",
      answer: "Sim! Nosso certificado é digital, tem validade em todo território nacional e é aceito por empresas em processos seletivos. Além disso, você terá um portfólio com 10+ projetos reais que impressionam recrutadores."
    },
    {
      question: "Consigo tirar dúvidas durante o curso?",
      answer: "Com certeza! Todos os planos incluem suporte. No plano Básico via e-mail, no Profissional via WhatsApp prioritário, e no Premium VIP você tem mentorias individuais. Nossa comunidade Discord também é super ativa!"
    },
    {
      question: "Como funciona a garantia de 30 dias?",
      answer: "Simples: você se inscreve, acessa todo o conteúdo e se por qualquer motivo não gostar, basta enviar um e-mail em até 30 dias e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia."
    },
    {
      question: "As aulas são ao vivo ou gravadas?",
      answer: "As aulas principais são gravadas em alta qualidade, permitindo que você assista quando e quantas vezes quiser. Nos planos Profissional e Premium oferecemos mentorias ao vivo semanais/mensais como bônus."
    },
    {
      question: "Vou conseguir um emprego após o curso?",
      answer: "Não podemos garantir emprego (isso depende de diversos fatores), mas fornecemos todas as ferramentas: conhecimento técnico atualizado, projetos para portfólio, certificado, preparação para entrevistas e networking com empresas parceiras."
    },
    {
      question: "Qual é a forma de pagamento?",
      answer: "Aceitamos cartão de crédito (até 12x), PIX (com desconto adicional) e boleto bancário. O pagamento é 100% seguro processado por plataforma certificada. Seus dados estão protegidos."
    },
    {
      question: "O conteúdo fica desatualizado?",
      answer: "Não! Atualizamos o curso regularmente com as novidades do mercado. Como você tem acesso vitalício, todas as atualizações e novos módulos que adicionarmos são liberados gratuitamente para você."
    },
    {
      question: "Posso assistir pelo celular ou tablet?",
      answer: "Sim! Nossa plataforma é totalmente responsiva. Você pode estudar em qualquer dispositivo: computador, notebook, tablet ou smartphone. Baixe os materiais e estude até offline."
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto container-padding">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 fade-in">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Dúvidas Frequentes
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Perguntas{" "}
            <span className="text-gradient">frequentes</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas antes de começar
          </p>
        </div>

        {/* ACCORDION COM FAQS */}
        <div className="max-w-4xl mx-auto fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                {/* PERGUNTA (clicável) */}
                <AccordionTrigger className="hover:no-underline py-6 text-left">
                  <h3 className="text-lg font-bold pr-4">
                    {faq.question}
                  </h3>
                </AccordionTrigger>

                {/* RESPOSTA (expansível) */}
                <AccordionContent className="pb-6 pt-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA ADICIONAL - Pergunta não respondida */}
        <div className="text-center mt-12 fade-in">
          <p className="text-muted-foreground mb-4">
            Não encontrou sua dúvida?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2"
          >
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
