var Cliente = require('mongoose').model('Cliente');
module.exports.novoCliente = function(req, res, next) {
  if(req.method=='GET'){
   res.render('cliente/novo',{'clienteLogado':req.session.clienteLogado});
 }else {
   var novo = new Cliente(req.body);
   novo.save().then(
   function(u){
       res.redirect("/cliente/listar.html");
   },
   function(err){
     return next(err);
   });
 }
}
module.exports.listar = function(req,res,next){
  Cliente.find({}).then(
   function(clientes){
     res.render('cliente/listar',{'clientes': clientes,'clienteLogado':req.session.clienteLogado});
   },
   function(err){
     return next(err);
   });
}

module.exports.remove = function(req,res,next){
    if(req.session.clienteLogado){
      if(req.session.clienteLogado._id==req.body.id){
        req.session.clienteLogado=null;
      }
    }
    Cliente.findByIdAndRemove(
      req.body.id
    ).then(
      function(produto){
        res.redirect("/cliente/listar.html");
      },
      function(err){
        return next(err);
      }
    )
}
module.exports.alterar = function(req,res,next){
    if(req.method=='GET'){
      Cliente.findOne(
      {"_id": req.query.id}).then(
        function(cliente) {
          console.log(cliente);
          res.render('cliente/editar', {'cliente': cliente,'clienteLogado':req.session.clienteLogado});
        },
        function (err){
          next(err);
        }
      );
    }else{
      Cliente.findByIdAndUpdate(req.body.id, { $set: {nome: req.body.nome,email: req.body.email }}, { new: true }, function (err, produto) {
        if (err) return handleError(err);
        res.redirect('/cliente/listar.html')
      });
    }


}
module.exports.detalhes = function(req,res,next){
    Cliente.findOne(
    {"_id": req.query.id}).then(
      function(cliente) {
        console.log(cliente);
        res.render('cliente/detalhes', {'cliente': cliente,'clienteLogado':req.session.clienteLogado});
      },
      function (err){
        next(err);
      }
    );
}
module.exports.login = function(req,res,next){
  if(req.query.id){
    Cliente.findOne(
    {"_id": req.query.id}).then(
      function(cliente) {
        console.log(cliente);
        req.session.clienteLogado=cliente;
        res.redirect('/index.html');
      },
      function (err){
        next(err);
      }
    );
  }else{
    res.redirect('/index.html');
  }
}
module.exports.logout = function(req,res,next){
  req.session.clienteLogado=null;
  res.redirect('/index.html');
}
