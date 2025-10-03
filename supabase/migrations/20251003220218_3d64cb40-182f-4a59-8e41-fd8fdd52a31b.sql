-- Criar bucket de storage para anexos de contato
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'contact-attachments',
  'contact-attachments',
  false,
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'application/pdf', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv']
);

-- Permitir upload público (qualquer pessoa pode fazer upload)
CREATE POLICY "Allow public upload"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'contact-attachments');

-- Permitir leitura autenticada (para a edge function processar)
CREATE POLICY "Allow authenticated read"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'contact-attachments');

-- Permitir delete autenticado (para limpar arquivos após enviar email)
CREATE POLICY "Allow authenticated delete"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'contact-attachments');