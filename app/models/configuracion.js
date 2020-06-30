var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var configuracionSchema = new Schema({
    numero: Number,
    estado: Boolean,
    fecha:{  type: Date, default: Date.now() }
});

module.exports = mongoose.model("configuracion", configuracionSchema);