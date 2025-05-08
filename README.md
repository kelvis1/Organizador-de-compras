# 🛒 Organizador de Compras

Um aplicativo simples e direto, feito em **React + Vite**, para te ajudar a **organizar seus gastos com compras**.

## ✨ Funcionalidades

- ✅ Adicione o **nome** do produto
- ✅ Insira o **preço unitário**
- ✅ Selecione a **quantidade desejada**
- ✅ Veja a **lista de produtos adicionados**
- ✅ O app calcula automaticamente o **valor total**

## 📸 Exemplo de uso

> _Você adiciona 2x "Arroz" a R$ 5,00 cada e 1x "Feijão" a R$ 7,00. O sistema calcula o total: R$ 17,00._

## 💡 Tecnologias usadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES6+)
- HTML/CSS básico (inline no momento)

## 📁 Estrutura do projeto
arduino
Copiar
Editar
organizador-de-compras/
├── src/
│   ├── components/
│   │   └── ProductForm.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── vite.config.js

## 🛠️ Futuras melhorias
  - Remover produtos da lista
  - Editar produtos já adicionados
  - Salvar dados no navegador (localStorage)
  - Estilização com Tailwind CSS
  - Deploy com Vercel

## 📦 Como rodar localmente

```bash
# Clone este repositório
git clone https://github.com/kelvis1/organizador-de-compras.git

# Acesse a pasta
cd organizador-de-compras

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
