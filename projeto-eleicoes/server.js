const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

// Configuração da sessão
app.use(session({
  secret: 'chave-secreta',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 60 * 1000 } // Sessão válida por 30 minutos
}));

// Configuração do Express para interpretar dados em JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servindo arquivos estáticos (CSS, JS, etc.)
app.use(express.static(__dirname + '/public'));

// Rota inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/login.html'); // Alterar conforme o arquivo de login
});

// Inicializando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
