-- Dois Lados, passo 2: campos do perfil e travas extras de segurança.
-- Rode uma vez no Supabase, em SQL Editor > New query > Run. Pode rodar de novo sem problema.

-- Campos do perfil, com as mesmas regras que o site usa (o banco recusa qualquer coisa fora disso).
alter table public.perfis add column if not exists instituicao text not null default '';
alter table public.perfis add column if not exists nivel text not null default '';
alter table public.perfis add column if not exists uf text not null default '';
alter table public.perfis add column if not exists interesses text[] not null default '{}';

alter table public.perfis drop constraint if exists perfis_nome_ok;
alter table public.perfis add constraint perfis_nome_ok check (char_length(nome) <= 40 and nome !~ '[<>[:cntrl:]]');
alter table public.perfis drop constraint if exists perfis_instituicao_ok;
alter table public.perfis add constraint perfis_instituicao_ok check (char_length(instituicao) <= 80 and instituicao !~ '[<>[:cntrl:]]');
alter table public.perfis drop constraint if exists perfis_nivel_ok;
alter table public.perfis add constraint perfis_nivel_ok check (nivel in ('', 'medio', 'cursinho', 'graduacao', 'pos', 'formado', 'nao-estuda'));
alter table public.perfis drop constraint if exists perfis_uf_ok;
alter table public.perfis add constraint perfis_uf_ok check (uf = '' or uf in ('AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'));
alter table public.perfis drop constraint if exists perfis_interesses_ok;
alter table public.perfis add constraint perfis_interesses_ok check (cardinality(interesses) <= 20 and array_to_string(interesses, ',') ~ '^([a-z-]{1,30}(,[a-z-]{1,30})*)?$');

-- O conteúdo salvo (lista de leituras) tem formato e tamanho limitados, para ninguém usar o banco como depósito.
alter table public.perfis drop constraint if exists perfis_dados_ok;
alter table public.perfis add constraint perfis_dados_ok check (jsonb_typeof(dados) = 'object' and pg_column_size(dados) <= 200000);

-- Visitantes sem login não têm nenhum acesso à tabela; logados só leem, criam e alteram (as regras de linha limitam ao próprio perfil).
revoke all on table public.perfis from anon;
revoke all on table public.perfis from authenticated;
grant select, insert, update on table public.perfis to authenticated;
