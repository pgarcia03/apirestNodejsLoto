const express=require('express')

const cliente=require('../controllers/ClienteController');

const Router=express.Router();

Router.get('/',cliente.index)
      .get('/test',cliente.testcon)
      .get('/:key/:value',cliente.find,cliente.show)
      .post('/',cliente.create)
      .put('/:key/:value',cliente.find,cliente.update)
      .delete('/:key/:value',cliente.find,cliente.remove);

module.exports=Router;