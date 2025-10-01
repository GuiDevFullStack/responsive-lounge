/**
 * PÁGINA: Index (Página Principal)
 * 
 * Esta é a página principal da landing page.
 * Importa e organiza todos os componentes/seções em sequência.
 * 
 * Estrutura da página (de cima para baixo):
 * 1. Header (fixo no topo)
 * 2. HeroSection (banner principal)
 * 3. BenefitsSection (benefícios do curso)
 * 4. ContentSection (conteúdo programático)
 * 5. TestimonialsSection (depoimentos)
 * 6. PricingSection (planos e preços)
 * 7. FAQSection (perguntas frequentes)
 * 8. CTASection (última chamada para ação)
 * 9. Footer (rodapé)
 * 
 * Características:
 * - Layout de página única (one-page)
 * - Scroll suave entre seções
 * - Totalmente responsivo
 * - Otimizado para conversão
 */

// Importação de todos os componentes da landing page
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ContentSection from "@/components/landing/ContentSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

/**
 * Componente principal da página Index
 * Renderiza todas as seções em sequência vertical
 */
const Index = () => {
  return (
    <>
      {/* 
        Header fixo - sempre visível no topo 
        Contém logo e navegação
      */}
      <Header />

      {/* 
        Main - container semântico para o conteúdo principal 
        Importante para SEO e acessibilidade
      */}
      <main className="min-h-screen">
        
        {/* Seção Hero - Primeira impressão e chamada principal */}
        <HeroSection />

        {/* Seção de Benefícios - Por que escolher este curso */}
        <BenefitsSection />

        {/* Seção de Conteúdo - O que será aprendido (módulos) */}
        <ContentSection />

        {/* Seção de Depoimentos - Prova social com histórias reais */}
        <TestimonialsSection />

        {/* Seção de Preços - Planos disponíveis e investimento */}
        <PricingSection />

        {/* Seção de FAQ - Responde dúvidas e objeções */}
        <FAQSection />

        {/* Seção CTA Final - Última oportunidade de conversão */}
        <CTASection />
      </main>

      {/* 
        Footer - Rodapé com informações adicionais 
        Links úteis, redes sociais e copyright
      */}
      <Footer />
    </>
  );
};

export default Index;
