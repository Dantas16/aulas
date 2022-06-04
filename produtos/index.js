const express = require('express')
const app = express();
const port = 3500;

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get("/produtos",(request, response)=> {
    console.log('Requisicao recebida');
 var listaProdutos =[ 
     {id:0, name:"café"},
     {id:1, name:"agua"},
     {id:2, name:"arroz"},
    ]

    return response.send(listaProdutos);
})

app.get('/home', (request, response) => {
    response.render('index');
})

app.listen(port, () => {
console.log('Serviço na porta: '+ port)
})
