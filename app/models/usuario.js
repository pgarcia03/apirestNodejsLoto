var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var usuarioSchema = new Schema({
    nombre: String, //nombre de usuario
    contras: String, //password
    estado:String,  //Activo o Inactivo,Eliminado
    rol:String    // rol Admin || Vendedor
    
  
});
module.exports = mongoose.model('Usuario', usuarioSchema);