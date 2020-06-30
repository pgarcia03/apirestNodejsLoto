const Numero=require('../models/numero');

function index(req,res){
     Numero.find({})
              .then(numeros=>{
                     if(numeros.length) return res.status(200).send({numeros});
                     return res.status(204).send({message:"No Registros"})
     }).catch(error=>res.status(500).send({error}));
}


function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(req.body.numeros) return res.status(200).send(req.body.numeros);
    return res.status(404).send({message:"NOT FOUND"});
}


function create(req,res){
  new Numero(req.body).save()
           .then(numero=>res.status(201).send({numero}))
           .catch(error=>res.status(500).send({error}));
}


function update(req,res){
  if(req.body.error) return status(500).send({error});
  if(!req.body.numeros)return res.status(404).send({message:"NOT FOUND"});

  let numero=req.body.numeros[0];
  numero=Object.assign(numero,req.body);
  numero.save().then(numero=>res.status(200).send({message:"UPDATE",numero}))
                 .catch(error=>res.status(500).send(error));

}

function remove(req,res){
    if(req.body.error) return status(500).send({error});
    if(!req.body.numeros) return res.status(404).send({message:"NOT FOUND"}) ;
      req.body.numeros[0].remove().then(numero=>res.status(200).send({message:"REMOVED",numero}))
      .catch(error=>res.status(500).send({error}));
}

function find(req,res,next){
  let query={};

  query[req.params.key]=req.params.value

  Numero.find(query)
          .then(numeros=>{
                if(!numeros.length) return next();
                req.body.numeros=numeros;
                return next();
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
    find

}