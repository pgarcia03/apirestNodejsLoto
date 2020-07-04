var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var numeroSchema = new Schema({
    num: String, //Numeros validos
    techo: Number,//la maxima inversion que puede tener un numero en un sorteo determinado
    acumulado:Number,//no se utilizara se realizara calculo por fecha y sorteo
    controlCon:Boolean//se utilizara para controlar la concurrencia de 
});

module.exports = mongoose.model('Numero', numeroSchema);