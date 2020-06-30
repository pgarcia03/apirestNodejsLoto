var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    nombre: String,
    cedula: String
});

module.exports = mongoose.model("Cliente", clienteSchema);