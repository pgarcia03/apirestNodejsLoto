const mongoose=require('mongoose');
const CONFIG=require('./config');


module.exports={
    connection:null,
    connect:function(){
        if (this.connection) return this.connection;
          return mongoose.connect(CONFIG.DB,{useNewUrlParser:true,useUnifiedTopology: true}).then(connection=>{
              this.connection=connection;
              console.log('conexion a base de datos exitosa');
          }).catch(error=>console.log(error));
          
    }
}


//, { useNewUrlParser: true }

/*
let mongoose = require('mongoose');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'Practica';      // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()

*/