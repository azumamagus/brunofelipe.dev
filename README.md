# brunofelipe.dev

Portfólio pessoal de Bruno Da Cunha Felipe, voltado a .NET, PHP, bancos de dados, cybersecurity e game development como hobby.

## Stack

- Vite
- React 19
- TypeScript
- Cloudflare Pages
- Terraform
- GitHub Actions
- Kool.dev

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

## Conteúdo

Os textos, links, projetos, experiência e competências ficam centralizados em `src/content.ts`.
O layout e as rotas ficam em `src/main.tsx`, e toda a identidade visual está em `src/styles.css`.
A imagem de compartilhamento social está em `public/og.png` (1200x630). Ela é gerada a partir de `scripts/og/og.html`: abra o arquivo no Chrome em 1200x630 e salve a captura em `public/og.png`.

## Build

```bash
pnpm build
```

O resultado estático é gerado em `dist/`.
