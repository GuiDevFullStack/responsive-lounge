/**
 * COMPONENTE: ContactSection (Seção de Contato)
 * 
 * Formulário de contato que envia email para guigapaulino@gmail.com
 * 
 * Campos:
 * - Nome
 * - Sobrenome
 * - Email
 * - Assunto
 * - Descrição/Mensagem
 * 
 * Validação com zod e envio via edge function
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * Schema de validação do formulário usando Zod
 * Define regras para cada campo
 */
const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(50, { message: "Nome deve ter no máximo 50 caracteres" }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: "Sobrenome deve ter pelo menos 2 caracteres" })
    .max(50, { message: "Sobrenome deve ter no máximo 50 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "Email inválido" })
    .max(100, { message: "Email muito longo" }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Assunto deve ter pelo menos 3 caracteres" })
    .max(100, { message: "Assunto muito longo" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
    .max(1000, { message: "Mensagem muito longa (máximo 1000 caracteres)" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  /**
   * Configuração do formulário com react-hook-form e validação zod
   */
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  /**
   * Função que envia o formulário
   * Chama a edge function que envia o email
   */
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Chama a edge function send-contact-email
      const { data: responseData, error } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            subject: data.subject,
            message: data.message,
          },
        }
      );

      if (error) {
        throw error;
      }

      // Sucesso
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderemos em breve!",
      });

      // Limpa o formulário
      form.reset();
    } catch (error: any) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        title: "Erro ao enviar",
        description: "Não foi possível enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto container-padding">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 fade-in">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Entre em Contato
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Vamos conversar sobre{" "}
            <span className="text-gradient">seu projeto</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Preencha o formulário e receba um orçamento personalizado
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* COLUNA ESQUERDA - Informações de contato */}
          <div className="space-y-6 fade-in">
            <Card className="border-border bg-card">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      guigapaulino@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telefone</h3>
                    <p className="text-sm text-muted-foreground">
                      Resposta em até 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Atendimento</h3>
                    <p className="text-sm text-muted-foreground">
                      100% remoto
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 bg-gradient-hero/10 rounded-lg border border-primary/20">
              <h3 className="font-bold mb-2">⚡ Resposta Rápida</h3>
              <p className="text-sm text-muted-foreground">
                Analisamos seu projeto e enviamos um orçamento personalizado em até 24 horas.
              </p>
            </div>
          </div>

          {/* COLUNA DIREITA - Formulário */}
          <div className="lg:col-span-2 fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="border-border bg-card">
              <CardHeader>
                <h3 className="text-2xl font-bold">Solicite seu Orçamento</h3>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo com os detalhes do seu projeto
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    
                    {/* NOME E SOBRENOME */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Seu nome" 
                                {...field}
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sobrenome *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Seu sobrenome" 
                                {...field}
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* EMAIL */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="seu@email.com" 
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* ASSUNTO */}
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Assunto *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Ex: Orçamento para Dashboard Power BI" 
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* MENSAGEM */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Descrição do Projeto *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Conte-nos sobre seu projeto, objetivos e prazo desejado..."
                              rows={6}
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* BOTÃO ENVIAR */}
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-hero hover:opacity-90 transition-opacity shadow-md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
