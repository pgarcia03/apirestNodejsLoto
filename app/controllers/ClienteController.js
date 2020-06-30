const Cliente=require('../models/cliente');

function index(req,res){
     Cliente.find({})
              .then(clientes=>{
                     if(clientes.length) return res.status(200).send({clientes});
                     return res.status(204).send({message:"No Registros"})
     }).catch(error=>res.status(500).send({error}));
}


function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(req.body.clientes) return res.status(200).send(req.body.clientes);
    return res.status(404).send({message:"NOT FOUND"});
}


function create(req,res){
  new Cliente(req.body).save()
           .then(cliente=>res.status(201).send({cliente}))
           .catch(error=>res.status(500).send({error}));
}


function update(req,res){
  if(req.body.error) return status(500).send({error});
  if(!req.body.clientes)return res.status(404).send({message:"NOT FOUND"});

  let cliente=req.body.clientes[0];
  cliente=Object.assign(cliente,req.body);
  cliente.save().then(cliente=>res.status(200).send({message:"UPDATE",cliente}))
                 .catch(error=>res.status(500).send(error));

}

function remove(req,res){
    if(req.body.error) return status(500).send({error});
    if(!req.body.clientes) return res.status(404).send({message:"NOT FOUND"}) ;
      req.body.clientes[0].remove().then(cliente=>res.status(200).send({message:"REMOVED",cliente}))
      .catch(error=>res.status(500).send({error}));
}

function find(req,res,next){
  let query={};

  query[req.params.key]=req.params.value

  Cliente.find(query)
          .then(clientes=>{
                if(!clientes.length) return next();
                req.body.clientes=clientes;
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