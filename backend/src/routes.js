const {Router} = require('express'); //importando apenas o módulo de roteametno do express

const DevController = require('./controllers/DevController');

const SearchController = require('./controllers/SearchController');

const routes = Router(); // router é uma função


//Primeiro parâmetro é a rota, segundo parÂmetro é uma função que pode ser arrow
//async significa que pode demorar pra responder, no caso a resposta do git pode demorar


routes.get('/devs', DevController.index);

routes.post('/devs', DevController.store);

routes.get('/search',SearchController.index);


module.exports = routes; // exportando esse arquivo para que o index reconheça, aí depois importa lá no index

//TIPOS DE PARÂMETROS

/*
Query Params: Acessados: request.query. São enviados por url, ficam visíveis, usados para filtros, ordenação, paginação, ...
Route Paramn: Acessados: request.params. São enviados por url, apenas o valor, usados para edição e delete dos dados, exemplo(../1)
Body: Acessados: request.body. Dados para criação, usado muito no post o no put para editar

*/
