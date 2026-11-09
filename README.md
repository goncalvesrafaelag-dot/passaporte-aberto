# Passaporte Aberto · página de vendas

Página de vendas do guia **Passaporte Aberto** (quiz de destino → VSL → oferta de R$ 20).

## Antes de anunciar
Abra `index.html` e cole o link do checkout em `CHECKOUT_URL` (perto do topo do arquivo).
Enquanto estiver vazio, os botões levam só até a seção da oferta.

## Estrutura
- `index.html` — a página inteira (HTML, CSS e JS).
- `public/assets/` — VSL, capa, fotos dos países (Unsplash) e bandeiras.
- Projeto Vite simples: `npm install`, `npm run dev`, `npm run build` (gera `dist/`).

## Publicação
- GitHub Pages: o workflow em `.github/workflows/deploy.yml` publica a cada push na `main`.
- Lovable / domínio próprio: o mesmo projeto roda com `vite build`; basta apontar o domínio.
