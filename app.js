const express = require('express');
const path = require('path');
const app = express();

// Definir EJS como view engine
app.set('view engine', 'ejs');

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para fazer o parse do corpo das requisições
app.use(express.urlencoded({ extended: true }));

// Porta do servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
