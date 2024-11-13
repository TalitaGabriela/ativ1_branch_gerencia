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

app.get('/produtos', (req, res) => {
  res.render('produtos', { produtos });
});

  app.post('/carrinho', (req, res) => {
    const { id } = req.body;
    const produto = produtos.find(produto => produto.id === parseInt(id));
    if (produto) {
      carrinho.push(produto);
    }
    res.redirect('/carrinho');
  });
  
  app.get('/carrinho', (req, res) => {
    const total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);
    res.render('carrinho', { carrinho, total });
  });  

  app.get('/finalizacao', (req, res) => {
    const total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);
    res.render('finalizacao', { carrinho, total });
  });
  
  app.post('/finalizacao', (req, res) => {
    carrinho = [];
    res.send('Compra finalizada!');
  });  

// Porta do servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
