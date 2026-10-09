# Sistema de Login

Uma interface de login simples, responsiva e com tema escuro, criada para praticar **React**, **TypeScript** e **Tailwind CSS**.

## Sobre o projeto

A página apresenta um formulário com campos para e-mail e senha, botão de entrada e um link para cadastro. O visual usa fundo escuro, campos discretos e destaques em amarelo.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS

## Como executar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Abra no navegador o endereço mostrado no terminal — normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o projeto em modo de desenvolvimento. |
| `npm run build` | Gera uma versão otimizada para produção. |
| `npm run preview` | Visualiza localmente a versão gerada pelo build. |
| `npm run lint` | Analisa o código em busca de problemas. |

## Estrutura principal

```text
src/
├── App.tsx       # Componente principal da aplicação
├── page.tsx      # Página da tela de login
├── main.tsx      # Ponto de entrada do React
└── index.css     # Importação do Tailwind CSS
```

## Próximos passos

- Validar os campos do formulário.
- Exibir mensagens de erro ao usuário.
- Conectar o formulário a uma API de autenticação.
- Criar a página de cadastro.

---

Feito como projeto de estudo.
