const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
//app.set('views', './views');

let menu = [
  { rota: '/', titulo: 'Home' },
  { rota: '/sobre', titulo: 'Sobre' }
]

app.get('/', (request, response) => {
  let titulo = "Bem vindo a Escola Feliz";

  response.render('pages/home', { titulo, menu })
})

app.get('/sobre', (request, response) => {
  let titulo = "Escola Feliz - Sobre nós";

  response.render('pages/sobre', { titulo, menu })
})

app.get('/alunos', (request, response) => {
  response.render('pages/alunos')
})

app.listen(port, () => {
  console.log('Express started at: ' + port);
})