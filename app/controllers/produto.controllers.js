var Produto = require('mongoose').model('Produto');
module.exports.novoProduto = function(req, res, next) {
  if(req.method=='GET'){
   res.render('produto/novo');
 }else {
   var novo = new Produto(req.body);
   novo.save().then(
   function(u){
       res.redirect("/produto/listar.html");
   },
   function(err){
     return next(err);
   });
 }
}
module.exports.listar = function(req,res,next){
  Produto.find({}).then(
   function(produtos){
     res.render('produto/listar',{'produtos': produtos});
   },
   function(err){
     return next(err);
   });
}

module.exports.remove = function(req,res,next){
    Produto.findByIdAndRemove(
      req.body.id
    ).then(
      function(produto){
        res.redirect("/produto/listar.html");
      },
      function(err){
        return next(err);
      }
    )
}
module.exports.alterar = function(req,res,next){
    if(req.method=='GET'){
      Produto.findOne(
      {"_id": req.query.id}).then(
        function(produto) {
          console.log(produto);
          res.render('produto/editar', {'produto': produto});
        },
        function (err){
          next(err);
        }
      );
    }else{
      Produto.findByIdAndUpdate(req.body.id, { $set: {nome: req.body.nome,preco_base: req.body.preco_base }}, { new: true }, function (err, produto) {
        if (err) return handleError(err);
        res.redirect('/produto/listar.html')
      });
    }


}
module.exports.detalhes = function(req,res,next){
    Produto.findOne(
    {"_id": req.query.id}).then(
      function(produto) {
        console.log(produto);
        res.render('produto/detalhes', {'produto': produto});
      },
      function (err){
        next(err);
      }
    );
}
