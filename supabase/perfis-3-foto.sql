-- Dois Lados, passo 3: foto de perfil. Rode uma vez no Supabase, em SQL Editor > New query > Run.

-- Balde PRIVADO de fotos: só JPEG (o site sempre converte para JPEG) e no máximo 300 KB por arquivo.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('avatares', 'avatares', false, 300000, array['image/jpeg'])
on conflict (id) do update set public = false, file_size_limit = 300000, allowed_mime_types = array['image/jpeg'];

-- Cada pessoa só lê, envia, troca e apaga um único arquivo: <id dela>/avatar.jpg.
drop policy if exists "avatares: ver a propria foto" on storage.objects;
create policy "avatares: ver a propria foto" on storage.objects for select to authenticated
  using (bucket_id = 'avatares' and name = (select auth.uid())::text || '/avatar.jpg');
drop policy if exists "avatares: enviar a propria foto" on storage.objects;
create policy "avatares: enviar a propria foto" on storage.objects for insert to authenticated
  with check (bucket_id = 'avatares' and name = (select auth.uid())::text || '/avatar.jpg');
drop policy if exists "avatares: trocar a propria foto" on storage.objects;
create policy "avatares: trocar a propria foto" on storage.objects for update to authenticated
  using (bucket_id = 'avatares' and name = (select auth.uid())::text || '/avatar.jpg')
  with check (bucket_id = 'avatares' and name = (select auth.uid())::text || '/avatar.jpg');
drop policy if exists "avatares: apagar a propria foto" on storage.objects;
create policy "avatares: apagar a propria foto" on storage.objects for delete to authenticated
  using (bucket_id = 'avatares' and name = (select auth.uid())::text || '/avatar.jpg');
