const express = require('express');
const app = express();
const port = 3200;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    console.log('Requisicao recebida');

    return response.send('Bem vindo(a)');
})

app.get('/home', (request, response) => {
    response.render('index');
});

app.listen(port, () => {
    console.log('Serviço na porta: ' + port);
})