const express = require('express');
const app = express();
const port = 3200;

app.use(express.json());

app.post('/login', async (req, resp) => {
    const { email, password } = req.body;

    if (email == 'joao@gmail.com' && password == '12345678') {
        //TODO verificar se email e senha corretos e retornar para o cliente com o ID
        const { conectar } = require('./config/db');
        const sequelizeConexao = conectar();

        const { Usuario } = require('./models/usuario');
        const usuario = await Usuario(sequelizeConexao).findOne({
            where: {
                email,
                senha: password
            }
        });

        resp.send(usuario);
    } else {

        resp.send({ message: 'Dados inválidos' });
    }
})

/*
app.post('/logout', (req, resp) => {
    resp.send('deslogado');
})

app.post('/verificaLogin', (req, resp) => {
    resp.send({ logado: true })
})*/

app.listen(port, () => {
    console.log('Servidor executando na porta ' + port);
})