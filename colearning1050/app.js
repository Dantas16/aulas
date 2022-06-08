const express = require('express');
const app = express();
const port = 3400;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public/'))

app.get('/', (request, response) => {
    response.render('index')
})

app.get('/tarefas', (req, resp) => {
    const { tarefasLista } = require('./model/tarefas')
    resp.send(tarefasLista)
})

app.listen(port, () => {
    console.log(`Ouvindo na porta: ${port}`)
})