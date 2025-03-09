# Passeio Carioca - Landing Page

Uma landing page moderna e atraente para o aplicativo "Passeio Carioca", que permite aos usuários explorar o Rio de Janeiro de uma maneira única através de um mapa interativo, passeios guiados e elementos de gamificação.

## Visão Geral

Esta landing page foi criada com Vue.js e integra componentes personalizados baseados no Inspira UI, um framework de UI moderno para Vue. A página inclui:

- Barra de navegação responsiva
- Seção hero com iPhone mockup
- Seção de funcionalidades
- Seção para anunciantes
- Seção para cadastro de guias turísticos
- Rodapé com links e informações de contato

## Tecnologias Utilizadas

- Vue.js 3 com Composition API
- Vite como bundler
- TailwindCSS para estilização
- Componentes personalizados baseados no Inspira UI

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/passeio_carioca.git
cd passeio_carioca
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Para build de produção:
```bash
npm run build
```

## Estrutura do Projeto

```
/
├── public/                 # Arquivos estáticos
│   └── images/             # Imagens e recursos
├── src/                    # Código fonte
│   ├── components/         # Componentes Vue
│   │   ├── Navbar.vue      # Barra de navegação
│   │   ├── Footer.vue      # Rodapé
│   │   ├── HeroSection.vue # Seção principal
│   │   ├── ... 
│   ├── App.vue             # Componente raiz
│   └── main.js             # Ponto de entrada
├── package.json            # Dependências e scripts
└── README.md               # Este arquivo
```

## Componentes Personalizados

### ShimmerButton

Um botão com efeito de shimmer (brilho) animado nas bordas, inspirado no componente Shimmer Button do Inspira UI.

### iPhoneMockup

Um mockup de iPhone para exibir capturas de tela do aplicativo, baseado no componente iPhone Mockup do Inspira UI.

## Customização

A página utiliza o TailwindCSS para estilização, o que facilita a personalização de cores, espaçamentos e outros elementos visuais.

Para modificar o esquema de cores principal, edite as configurações no arquivo `tailwind.config.js`.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

## Contato

Para mais informações, entre em contato através de contato@passeiocarioca.com.br
