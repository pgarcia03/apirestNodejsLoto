const Registro=require('../models/registro');

function index(req,res){
     Registro.find({})
             .then(registros=>{
                if(registros.length) return res.status(200).send({registros});
                     return res.status(204).send({message:"No Registros"})
     }).catch(error=>res.status(500).send({error}));
}


function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(req.body.registros)
    {
      let registros=req.body.registros;
      return res.status(200).send({registros});
    }
    
    return res.status(404).send({message:"NOT FOUND"});
}


function create(req,res){
  new Registro(req.body).save()
           .then(registros=>res.status(201).send({registros}))
           .catch(error=>res.status(500).send({error}));
}


function update(req,res){
  if(req.body.error) return status(500).send({error});
  if(!req.body.registros)return res.status(404).send({message:"NOT FOUND"});

  let registro=req.body.registros[0];
  registro=Object.assign(registro,req.body);
  registro.save().then(registros=>res.status(200).send({message:"UPDATE",registros}))
                 .catch(error=>res.status(500).send(error));

}

function remove(req,res){
    if(req.body.error) return status(500).send({error});
    if(!req.body.registros) return res.status(404).send({message:"NOT FOUND"}) ;
      req.body.registros[0].remove().then(registros=>res.status(200).send({message:"REMOVED",registros}))
      .catch(error=>res.status(500).send({error}));
}

function find(req,res,next){
  let query={};

  query[req.params.key]=req.params.value

  Registro.find(query)
          .then(registros=>{
                if(!registros.length) return next();
                req.body.registros=registros;
                return next();
          })
          .catch(error=>{
                req.body.error=error;
                next();
          })
}
/*
function findXFechaSorteo(req,res){

          
      let query={           
            "date":{"$gte": ISODate(req.body.fechaSorteo),"$lt":ISODate(req.body.fechaSorteo)},"sorteoDia":req.body.sorteoDia
      };

      Registro.find(query)
          .then(registros=>{
                if(!registros.length) return res.status(404).send({message:"Not Found"});
                return res.status(200).send({registros});
          })
          .catch(error=>{
                req.body.error=error;
                next();
          })
}
*/
function findXFechaSorteo(req,res){
      let ms = Date.parse(req.body.fechaSorteo.substring(0,10));
      var fecha = new Date(ms);
    //  res.status(205).send({mes:fecha});
      
      //let ms = Date.parse(req.body.fechaSorteo);
      //let fecha = new Date(ms);

      var now=new Date();
      var yesterdayMs = fecha.getTime() + 1000*60*60*24*1; 
      now.setTime( yesterdayMs );

      //console.log(fecha);
      //console.log(now);
      var query="";
      if(req.body.sorteoDia!=0)         
            query={           
                  "fechaSorteo":{"$gte": fecha,"$lt":now },"sorteoDia":req.body.sorteoDia
            };
      else
            query={           
                  "fechaSorteo":{"$gte": fecha,"$lt":now }
            };
    //  console.log(query);
     // res.status(205).send({mes:query});

      Registro.find(query)
          .then(registros=>{
                if(!registros.length) return res.status(404).send({message:"Not Found"});
                return res.status(200).send({registros});
          })
          .catch(error=>{
                req.body.error=error;
                next();
          })
          
}


module.exports={
    index,
    show,
    create,
    update,
    remove,
    find,
    findXFechaSorteo
}