# Portfólio Profissional

Um portfólio moderno e responsivo desenvolvido com tecnologias web de ponta, apresentando projetos, habilidades e informações de contato de forma elegante e interativa.

## 📋 Sobre o Projeto

Este portfólio é uma aplicação web single-page (SPA) que apresenta:

- **Header**: Navegação responsiva com links para todas as seções
- **Hero**: Seção de destaque com apresentação pessoal impactante
- **Sobre**: Informações detalhadas sobre quem você é e sua experiência
- **Projetos**: Galeria dos seus principais projetos com descrições e demonstrações
- **Habilidades**: Apresentação das competências técnicas e profissionais
- **Contato**: Formulário e informações para comunicação
- **Footer**: Links adicionais e informações de rodapé

## 🛠️ Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

- **Vite**: Ferramenta de build rápida e moderna
- **React 18**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset do JavaScript com tipagem estática
- **Tailwind CSS**: Framework de CSS utilitário para estilização
- **shadcn/ui**: Componentes React acessíveis e customizáveis
- **PostCSS**: Processador CSS com plugins
- **ESLint**: Linter para garantir qualidade do código

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── NavLink.tsx                 # Componente de navegação
│   ├── portfolio/
│   │   ├── Header.tsx              # Cabeçalho com navegação
│   │   ├── Hero.tsx                # Seção de apresentação
│   │   ├── About.tsx               # Seção sobre você
│   │   ├── Projects.tsx            # Galeria de projetos
│   │   ├── Skills.tsx              # Seção de habilidades
│   │   ├── Contact.tsx             # Formulário de contato
│   │   └── Footer.tsx              # Rodapé da página
│   └── ui/                         # Componentes reutilizáveis shadcn
├── hooks/
│   ├── use-mobile.tsx              # Hook para detectar dispositivo mobile
│   └── use-toast.ts                # Hook para notificações
├── lib/
│   └── utils.ts                    # Utilitários e funções auxiliares
├── pages/
│   ├── Index.tsx                   # Página principal
│   └── NotFound.tsx                # Página 404
├── App.tsx                         # Componente raiz da aplicação
├── main.tsx                        # Ponto de entrada
├── App.css                         # Estilos globais
└── index.css                       # Reset e variáveis CSS
```

## 🚀 Como Começar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou bun como gerenciador de pacotes

### Instalação

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd portifolio
```

2. Instale as dependências:
```bash
npm install
# ou
bun install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
bun run dev
```

O projeto estará acessível em `http://localhost:5173`

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Faz o build da aplicação para produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Executa o ESLint para verificar qualidade do código

## 🎨 Personalização

### Modificar Conteúdo

Edite os arquivos em `src/components/portfolio/` para atualizar:
- Informações pessoais (Header, Hero, About)
- Projetos (Projects.tsx)
- Habilidades (Skills.tsx)
- Dados de contato (Contact.tsx, Footer.tsx)

### Temas e Cores

O Tailwind CSS permite fácil customização de cores e estilos. Modifique o arquivo `tailwind.config.ts` para alterar o tema visual.

## 🌐 Deploy

O projeto pode ser facilmente deployado em plataformas como:

- **Vercel**: Integração direta com repositório Git
- **Netlify**: Suporte a Vite e build automático
- **GitHub Pages**: Deploy estático
- **Azure Static Web Apps**: Serviço da Microsoft

## 📝 Licença

Este projeto é licenciado sob a MIT License.

## 📧 Suporte

Para dúvidas ou sugestões sobre este portfólio, entre em contato através do formulário disponível na seção de Contato.
