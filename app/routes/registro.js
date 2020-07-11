
const express=require('express')

const registro=require('../controllers/RegistroController');

const Router=express.Router();

Router.get('/',registro.index)
      .get('/:key/:value',registro.find,registro.show)
      .post('/',registro.create)
      .put('/:key/:value',registro.find,registro.update)
      .delete('/:key/:value',registro.find,registro.remove)
      .post('/XfechaSorteo',registro.findXFechaSorteo);

module.exports=Router;