const express = require('express')
const app = express();
const port = 3500;

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get("/produtos",(request, response)=> {
    try {
        console.log('Requisicao recebida');

        // require(__dirname + '/db.js?username=vitorbank');
        const { listaProdutos } = require('./models/produtos');
        response.send(listaProdutos);
    } catch(error) {
        response.status(500).send('Infelizmente estamos com problemas :/');
    }
})

app.get('/home', (request, response) => {
    const tituloCabecalho = 'Homepage';
    
    response.render('index', { tituloCabecalho });
})

app.get('/cadastro', (request, response) => {
    const tituloCabecalho = 'Cadastro de usuário';

    response.render('cadastro', { tituloCabecalho });
})

app.listen(port, () => {
    console.log('Serviço na porta: '+ port)
})
