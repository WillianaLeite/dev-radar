const express = require('express');//importando o módulo para uma variável constante, o express é um mini framework
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');//importando arquivo de rotas

const app = express(); //criando a aplicação, o express é uma função

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-y1953.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useNewUrlParser: true,
});

app.use(cors())

app.use(express.json());//informando para o express que o padrão será json/para entender requisições no formato json

app.use(routes); //usando as rotas

app.listen(3333);//definindo qual porta o localhost vai ficar disponível

