const express = require('express');
const path = require('path');
const app = express();

// Definir EJS como view engine
app.set('view engine', 'ejs');

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para fazer o parse do corpo das requisições
app.use(express.urlencoded({ extended: true }));

// Rota de Cadastro de Usuários
app.get('/cadastro', (req, res) => {
    res.render('cadastro');
  });
  
  app.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;
    usuarios.push({ nome, email, senha });
    res.redirect('/login');
  });

  // Rota de Login de Usuários
  app.get('/login', (req, res) => {
    res.render('login');
  });
  
  app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const usuario = usuarios.find(user => user.email === email && user.senha === senha);
    if (usuario) {
      res.redirect('/produtos');
    } else {
      res.send('Credenciais incorretas!');
    }
  });

// Porta do servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
