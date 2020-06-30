const express=require('express')

const numero=require('../controllers/NumeroController');

const Router=express.Router();

Router.get('/',numero.index)
      .get('/:key/:value',numero.find,numero.show)
      .post('/',numero.create)
      .put('/:key/:value',numero.find,numero.update)
      .delete('/:key/:value',numero.find,numero.remove);

module.exports=Router;