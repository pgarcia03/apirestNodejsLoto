const Usuario=require('../models/usuario');

function index(req,res){
     Usuario.find({})
              .then(usuarios=>{
                     if(usuarios.length) return res.status(200).send({usuarios});
                     return res.status(204).send({message:"No Registros"})
     }).catch(error=>res.status(500).send({error}));
}


function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(req.body.usuarios) return res.status(200).send(req.body.usuarios);
    return res.status(404).send({message:"NOT FOUND"});
}


function create(req,res){
      let query={"nombre":req.body.nombre};
  
       Usuario.find(query)
       .then(usuarios=>{
             if(!usuarios.length)
             {
               return  new Usuario(req.body).save()
                                            .then(usuarios=>res.status(201).send({usuarios}))             
             }
             return res.status(302).send({message:"Usuario  Existente"}) ;          
       })     
       .catch(error=>res.status(500).send({error}));
     
}

function update(req,res){
  if(req.body.error) return status(500).send({error});
  if(!req.body.usuarios)return res.status(404).send({message:"NOT FOUND"});

  let usuario=req.body.usuarios[0];
  usuario=Object.assign(usuario,req.body);
  usuario.save().then(usuarios=>res.status(200).send({message:"UPDATE",usuarios}))
                 .catch(error=>res.status(500).send(error));

}

function remove(req,res){
    if(req.body.error) return status(500).send({error});
    if(!req.body.usuarios) return res.status(404).send({message:"NOT FOUND"}) ;
      req.body.usuarios[0].remove().then(usuarios=>res.status(200).send({message:"REMOVED",usuarios}))
      .catch(error=>res.status(500).send({error}));
}

function find(req,res,next){
  let query={};

  query[req.params.key]=req.params.value

  Usuario.find(query)
          .then(usuarios=>{
                if(!usuarios.length) return next();
                req.body.usuarios=usuarios;
                return next();
          })
          .catch(error=>{
                req.body.error=error;
                next();
          })
}

function autenticar(req,res)
{
  let query={"nombre":req.body.nombre,"contras":req.body.contras};

  Usuario.find(query)
  .then(usuarios=>{
        if(!usuarios.length) return res.status(204).send({message:"Invalido"});
        return res.status(200).send({usuarios,message:"Access",token:"456"});
        
  })
  .catch(error=>{
       return res.body.error=error;
        
  })

}

module.exports={
    index,
    show,
    create,
    update,
    remove,
    find,
    autenticar
}