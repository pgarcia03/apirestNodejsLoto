const express=require('express')

const usuario=require('../controllers/UsuarioController');

const Router=express.Router();

Router.get('/',usuario.index)
      .get('/:key/:value',usuario.find,usuario.show)
      .post('/',usuario.create)
      .put('/:key/:value',usuario.find,usuario.update)
      .delete('/:key/:value',usuario.find,usuario.remove)
      .post('/autenticar',usuario.autenticar);

module.exports=Router;