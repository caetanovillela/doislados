-- Dois Lados: tabela de perfis. Rode uma vez no Supabase, em SQL Editor > New query > Run.

create table if not exists public.perfis (
  id uuid primary key references auth.users (id) on delete cascade,
  nome text not null default '' check (char_length(nome) <= 40),
  dados jsonb not null default '{}'::jsonb,
  atualizado_em timestamptz not null default now()
);

alter table public.perfis enable row level security;

-- Cada pessoa só vê e altera o próprio perfil.
drop policy if exists "ler o proprio perfil" on public.perfis;
create policy "ler o proprio perfil" on public.perfis for select to authenticated using ((select auth.uid()) = id);
drop policy if exists "criar o proprio perfil" on public.perfis;
create policy "criar o proprio perfil" on public.perfis for insert to authenticated with check ((select auth.uid()) = id);
drop policy if exists "alterar o proprio perfil" on public.perfis;
create policy "alterar o proprio perfil" on public.perfis for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

-- Botão "Apagar minha conta": apaga o login e, em cascata, o perfil.
create or replace function public.apagar_conta() returns void
language sql security definer set search_path = ''
as $$ delete from auth.users where id = auth.uid(); $$;
revoke execute on function public.apagar_conta() from public, anon;
grant execute on function public.apagar_conta() to authenticated;
