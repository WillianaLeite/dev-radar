const mongoose = require('mongoose');


//Criando a tabela no banco
const PointSchema = new mongoose.Schema({
    type:{
        type: String,
        enum:['Point'],
        required: true,
    },
    coordinates:{
        type: [Number],
        required: true,
        
    },
});

module.exports = PointSchema;