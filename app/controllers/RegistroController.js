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
    if(req.body.registros) return res.status(200).send(req.body.registros);
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

function finds(req,res,next){
  let query={

    
  };

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


module.exports={
    index,
    show,
    create,
    update,
    remove,
    find
}