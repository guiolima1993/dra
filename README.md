# DRA Landing

Landing page desenvolvida com Nuxt 3 e Tailwind CSS.

## Tecnologias

- Nuxt 3
- Vue 3
- Tailwind CSS

## Pre-requisitos

- Node.js 18 ou superior
- npm 9 ou superior

## Como rodar localmente

1. Instale as dependencias:

	npm install

2. Inicie o servidor de desenvolvimento:

	npm run dev

3. Abra no navegador:

	http://localhost:3000

## Scripts disponiveis

- npm run dev: inicia em modo desenvolvimento.
- npm run build: gera build de producao.
- npm run preview: sobe servidor local para testar a build.
- npm run generate: gera versao estaticamente prerenderizada.

## Fluxo de deploy (producao)

1. Gerar build:

	npm run build

2. Validar build localmente:

	npm run preview

Para hospedagem estatica, use:

	npm run generate

## Estrutura do projeto

- app.vue: entrada principal da aplicacao.
- pages/index.vue: pagina principal da landing.
- components/: secoes reutilizaveis da pagina.
- assets/css/main.css: estilos globais.
- assets/images/: imagens utilizadas na landing.
- composables/useReveal.ts: logica de animacao/reveal.
- nuxt.config.ts: configuracoes do Nuxt.
- tailwind.config.js: configuracoes do Tailwind.

## Observacoes

- O projeto utiliza fontes externas configuradas em nuxt.config.ts.
- Se mudar a porta ou host, ajuste conforme seu ambiente com as flags do Nuxt.
