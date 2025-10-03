import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  attachmentPaths?: string[];
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, subject, message, attachmentPaths }: ContactEmailRequest = await req.json();

    // Se houver anexos, baixar do storage e preparar para envio
    const attachments = [];
    
    if (attachmentPaths && attachmentPaths.length > 0) {
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
      const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      for (const path of attachmentPaths) {
        try {
          const { data, error } = await supabase.storage
            .from('contact-attachments')
            .download(path);

          if (error) {
            console.error(`Erro ao baixar arquivo ${path}:`, error);
            continue;
          }

          // Converte o blob para base64
          const arrayBuffer = await data.arrayBuffer();
          const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
          
          // Extrai o nome do arquivo original
          const filename = path.split('/').pop() || 'attachment';

          attachments.push({
            filename,
            content: base64,
          });
        } catch (err) {
          console.error(`Erro ao processar arquivo ${path}:`, err);
        }
      }
    }

    // Email para o proprietário (guigapaulino@gmail.com)
    const ownerEmailResponse = await resend.emails.send({
      from: "Contato Site <onboarding@resend.dev>",
      to: ["guigapaulino@gmail.com"],
      subject: `Novo Contato: ${subject}`,
      attachments: attachments.length > 0 ? attachments : undefined,
      html: `
        <h2>Nova mensagem de contato do site</h2>
        
        <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        
        <h3>Mensagem:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
        
        ${attachments.length > 0 ? `<p><strong>Anexos:</strong> ${attachments.length} arquivo(s) em anexo</p>` : ''}
        
        <hr />
        <p style="color: #666; font-size: 12px;">
          Esta mensagem foi enviada através do formulário de contato do site.
        </p>
      `,
    });

    // Email de confirmação para o cliente (DESABILITADO - requer domínio verificado no Resend)
    // Para habilitar: verifique um domínio em https://resend.com/domains
    // e altere o 'from' para usar seu domínio verificado (ex: contato@seudominio.com)
    /*
    const clientEmailResponse = await resend.emails.send({
      from: "Guilherme Paulino <contato@seudominio.com>", // Altere após verificar domínio
      to: [email],
      subject: "Recebemos sua mensagem!",
      html: `
        <h1>Olá, ${firstName}!</h1>
        
        <p>Recebemos sua mensagem e agradecemos pelo contato.</p>
        
        <p>Vamos analisar seu projeto e retornaremos em breve com um orçamento personalizado.</p>
        
        <h3>Resumo da sua mensagem:</h3>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p style="white-space: pre-wrap;">${message}</p>
        
        <hr />
        
        <p>Atenciosamente,<br>
        <strong>Guilherme Paulino</strong><br>
        Power BI | Desenvolvimento Web | Automações</p>
        
        <p style="color: #666; font-size: 12px;">
          Email: guigapaulino@gmail.com
        </p>
      `,
    });
    */

    console.log("Email enviado com sucesso para o proprietário:", ownerEmailResponse);

    // Limpar arquivos do storage após enviar o email (em background)
    if (attachmentPaths && attachmentPaths.length > 0) {
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
      const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
      const supabase = createClient(supabaseUrl, supabaseServiceKey);
      
      // Limpar de forma assíncrona (não bloqueia a resposta)
      supabase.storage.from('contact-attachments').remove(attachmentPaths)
        .then(() => console.log('Arquivos temporários removidos'))
        .catch(err => console.error('Erro ao remover arquivos:', err));
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        ownerEmail: ownerEmailResponse
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Erro ao enviar emails:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: "Erro ao processar sua solicitação. Tente novamente."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
