/**
 * PÁGINA: Index (Página Principal)
 * 
 * Landing page de vendas de serviços:
 * - Projetos Power BI
 * - Sites e Landing Pages
 * - Automações de tarefas
 * 
 * Estrutura da página (de cima para baixo):
 * 1. Header (fixo no topo)
 * 2. HeroSection (banner principal)
 * 3. ServicesSection (serviços oferecidos)
 * 4. BenefitsSection (benefícios)
 * 5. TestimonialsSection (depoimentos)
 * 6. ContactSection (formulário de contato)
 * 7. Footer (rodapé)
 */

// Importação de todos os componentes da landing page
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactSection from "@/components/landing/ContactSection";
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

        {/* Seção de Serviços - Detalhamento dos serviços oferecidos */}
        <ServicesSection />

        {/* Seção de Benefícios - Por que escolher nossos serviços */}
        <BenefitsSection />

        {/* Seção de Depoimentos - Prova social com clientes reais */}
        <TestimonialsSection />

        {/* Seção de Contato - Formulário para solicitar orçamento */}
        <ContactSection />
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
