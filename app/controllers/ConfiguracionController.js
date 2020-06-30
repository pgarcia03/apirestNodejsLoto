const Configuracion=require('../models/configuracion');

function index(req,res){
     Configuracion.find({})
              .then(configuracions=>{
                     if(configuracions.length) return res.status(200).send({configuracions});
                     return res.status(204).send({message:"No Registros"})
     }).catch(error=>res.status(500).send({error}));
}


function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(req.body.configuracions) return res.status(200).send(req.body.configuracions);
    return res.status(404).send({message:"NOT FOUND"});
}


function create(req,res){
  new Configuracion(req.body).save()
           .then(configuracion=>res.status(201).send({configuracion}))
           .catch(error=>res.status(500).send({error}));
}


function update(req,res){
  if(req.body.error) return status(500).send({error});
  if(!req.body.configuracions)return res.status(404).send({message:"NOT FOUND"});

  let configuracion=req.body.configuracions[0];
  configuracion=Object.assign(cliente,req.body);
  configuracion.save().then(configuracion=>res.status(200).send({message:"UPDATE",configuracion}))
                 .catch(error=>res.status(500).send(error));

}

function remove(req,res){
    if(req.body.error) return status(500).send({error});
    if(!req.body.configuracions) return res.status(404).send({message:"NOT FOUND"}) ;
      req.body.configuracions[0].remove().then(configuracion=>res.status(200).send({message:"REMOVED",configuracion}))
      .catch(error=>res.status(500).send({error}));
}

function find(req,res,next){
  let query={};

  query[req.params.key]=req.params.value

  Configuracion.find(query)
          .then(clientes=>{
                if(!configuracions.length) return next();
                req.body.configuracions=configuracions;
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