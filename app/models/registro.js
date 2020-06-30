const mongoose=require('mongoose')

const registroSchema=new mongoose.Schema({
    cliente: {  //nombre Cliente
        type: String,
        required: true
    },
    jugado:
    [{
        numero:{ //numero judado
            type: Number,
            require: true,
        },
        monto:{// inversion 
            type: Number, 
            required: true
        },
        premio:{//valor del premio inversion*60
            type:Number,
            required:true
        }
    }],
    date:{
        type: Date,
        default: Date.now()    
    },
    sorteoDia:{
            type:String,
            required:true
    },
    vendedor:{
        type:String,
        required:true
    },   
    estado:{
        type:String,
    },
    reciboEmitido:{
        type:Boolean
    },
    fechaSorteo:{
        type:Date,
        required:true
    },
    eliminado:{
        type:Boolean
    }

})

module.exports=mongoose.model('Registro',registroSchema);

