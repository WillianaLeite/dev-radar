const axios = require('axios'); // Faz chamadas para outras api's no caso com o github
const Dev = require('../models/Dev');
const parseStringAsArray =  require('../utils/parseStringAsArray');


// index, show, store, update, destroy 


module.exports = {

    async index(request, response){

        const devs = await Dev.find();//pode passar filtro também

        return response.json(devs);

    },

    async store(request, response){//request é tudo que vem do front-end, tudo que o cliente manda, exemplo: informações de formulário para cadastro
        //response é o que o back end vai responder para o front end
        const { github_username, techs, latitude, longitude } = request.body;
        
        let dev = await Dev.findOne({github_username}); //pra vê se encontra repetido

        if(!dev){

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);//await pausa a execução esperando a api responder
        
            const { name = login, avatar_url, bio  } = apiResponse.data;
        
            /*
            if(!name){
                name = apiResponse.data.login;
            }*/
        
            const techsArray = parseStringAsArray(techs);//tirando os espaços e quebrando por virgula para transformar no array
        
        
            const location = {
                type:'Point',
                coordinates: [longitude, latitude],
            };
        
            dev = await Dev.create({
                name,
                github_username,
                bio,
                avatar_url,
                techs: techsArray,
                location,
            })
    
        }
        return response.json(dev);//o send envia um texto, mas sempre vamos retornar no formato json 
    }
};