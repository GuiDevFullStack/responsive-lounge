/**
 * COMPONENTE: ContentSection (Seção de Conteúdo do Curso)
 * 
 * Apresenta os módulos e conteúdo programático do curso.
 * Mostra a estrutura completa do que será aprendido.
 * 
 * Objetivo: Demonstrar a abrangência e profundidade do conteúdo.
 * 
 * Estrutura:
 * - Título da seção
 * - Lista de módulos em accordion (expansível)
 * - Cada módulo mostra aulas e duração
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, PlayCircle } from "lucide-react";

const ContentSection = () => {
  /**
   * Array com todos os módulos do curso
   * Cada módulo contém: título, duração, número de aulas e lista de tópicos
   */
  const modules = [
    {
      title: "Módulo 1: Fundamentos da Web",
      duration: "8 horas",
      lessons: 12,
      topics: [
        "Como a internet funciona",
        "HTML5 semântico e acessível",
        "CSS3 moderno e Flexbox",
        "CSS Grid para layouts complexos",
        "Projeto prático: Landing Page responsiva"
      ]
    },
    {
      title: "Módulo 2: JavaScript Essencial",
      duration: "12 horas",
      lessons: 18,
      topics: [
        "Variáveis, tipos de dados e operadores",
        "Funções e arrow functions",
        "Arrays e objetos avançados",
        "DOM manipulation e eventos",
        "ES6+ features modernas",
        "Projeto prático: Calculadora interativa"
      ]
    },
    {
      title: "Módulo 3: JavaScript Avançado",
      duration: "10 horas",
      lessons: 15,
      topics: [
        "Programação assíncrona e Promises",
        "Async/Await e tratamento de erros",
        "API REST e fetch",
        "LocalStorage e SessionStorage",
        "Projeto prático: Aplicativo de Tarefas"
      ]
    },
    {
      title: "Módulo 4: React Fundamentals",
      duration: "14 horas",
      lessons: 20,
      topics: [
        "Componentes e Props",
        "State e Lifecycle",
        "Hooks (useState, useEffect, useContext)",
        "React Router para navegação",
        "Formulários e validação",
        "Projeto prático: E-commerce"
      ]
    },
    {
      title: "Módulo 5: Ferramentas Profissionais",
      duration: "8 horas",
      lessons: 12,
      topics: [
        "Git e GitHub",
        "Versionamento de código",
        "Deploy e hospedagem",
        "Performance e otimização",
        "Boas práticas e Clean Code"
      ]
    },
    {
      title: "Módulo 6: Projeto Final",
      duration: "10 horas",
      lessons: 8,
      topics: [
        "Planejamento do projeto",
        "Desenvolvimento completo",
        "Testes e debugging",
        "Deploy em produção",
        "Apresentação e portfólio"
      ]
    }
  ];

  /**
   * Calcula totais do curso
   */
  const totalHours = modules.reduce((acc, module) => {
    return acc + parseInt(module.duration);
  }, 0);

  const totalLessons = modules.reduce((acc, module) => {
    return acc + module.lessons;
  }, 0);

  return (
    <section id="content" className="py-16 lg:py-24">
      <div className="container mx-auto container-padding">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 fade-in">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Conteúdo Programático
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            O que você vai{" "}
            <span className="text-gradient">aprender</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6">
            Currículo completo e atualizado com as tecnologias mais demandadas
          </p>

          {/* Badges com informações resumidas */}
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <PlayCircle className="mr-2 h-4 w-4" />
              {totalLessons} aulas
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              {totalHours} horas de conteúdo
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              10+ projetos práticos
            </Badge>
          </div>
        </div>

        {/* ACCORDION COM OS MÓDULOS */}
        <div className="max-w-4xl mx-auto fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => (
              <AccordionItem 
                key={index} 
                value={`module-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                {/* CABEÇALHO DO MÓDULO (clicável) */}
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-start gap-4 text-left w-full">
                    {/* Número do módulo */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Informações do módulo */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">
                        {module.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span>⏱️ {module.duration}</span>
                        <span>•</span>
                        <span>📚 {module.lessons} aulas</span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>

                {/* CONTEÚDO DO MÓDULO (expansível) */}
                <AccordionContent className="pt-2 pb-6">
                  <ul className="space-y-3 ml-14">
                    {module.topics.map((topic, topicIndex) => (
                      <li 
                        key={topicIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        {/* Ícone de check */}
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
