const express=require('express')
const bodyParser=require('body-parser')

const App=express();

const Registros=require('./routes/registro');
const Clientes=require('./routes/cliente');
const Usuarios=require('./routes/usuario');
const Numeros=require('./routes/numero');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));

App.use('/registro',Registros);
App.use('/cliente',Clientes);
App.use('/usuario',Usuarios);
App.use('/numero',Numeros);

module.exports=App
