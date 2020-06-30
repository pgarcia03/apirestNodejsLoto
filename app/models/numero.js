var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var numeroSchema = new Schema({
    num: String,
    techo: Number,
    acumulado:Number,
    controlCon:Boolean
});

module.exports = mongoose.model('Numero', numeroSchema);