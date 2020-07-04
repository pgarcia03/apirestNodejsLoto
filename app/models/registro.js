const mongoose=require('mongoose')

const registroSchema=new mongoose.Schema({
    cliente: {  //nombre Cliente
        type: String,
        required: true
    },
    numJugado:
    [{
        numero:{ //numero judado
            type: String,
            require: true,
        },
        inversion:{// inversion 
            type: Number, 
            required: true
        },
        premio:{//valor del premio inversion*60
            type:Number,
            required:true
        }
    }],
    date:{ // fecha venta automatica
        type: Date,
        default: Date.now()    
    },
    sorteoDia:{ // numero del sorteo del dia
            type:Number,
            required:true
    },
    descripcionSorteo:{ // sorteo del dia y hora del sorteo
        type:String,
        required:true
    },
    vendedor:{ //usuario que registra la venta
        type:String,
        required:true
    },   
    estado:{   //Vendido,Pagado
        type:String,
    },
    reciboEmitido:{ //verifica si se imprimio un recibo o boleto (ticket)
        type:Boolean
    },
    fechaSorteo:{ //fecha valida para el sorteo valido
        type:Date,
        required:true
    },
    eliminado:{ // por defecto es false o null
        type:Boolean
    }

})

module.exports=mongoose.model('Registro',registroSchema);

