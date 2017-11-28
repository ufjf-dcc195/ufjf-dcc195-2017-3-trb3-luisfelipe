var Produto = require('mongoose').model('Produto');
module.exports.novoProduto = function(req, res, next) {
  if(req.method=='GET'){
   res.render('produto/novo',{'clienteLogado':req.session.clienteLogado});
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
     recalculaPrecos(produtos)
     res.render('produto/listar',{'produtos': produtos,'clienteLogado':req.session.clienteLogado});
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
          res.render('produto/editar', {'produto': produto,'clienteLogado':req.session.clienteLogado});
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
        res.render('produto/detalhes', {'produto': produto,'clienteLogado':req.session.clienteLogado});
      },
      function (err){
        next(err);
      }
    );
}
function salvaProduto(produto){
  Produto.findByIdAndUpdate(
    produto._id,
    produto,
    {new: true}
  ).then(
    function (p){},
    function(err) {
      return next(err);
    }
  );
}
function recalculaPrecos(produtos){
  var maior_interesse=produtos[0];
  for(var i in produtos){
    var p = produtos[i]
    if(p.soma_interesses>maior_interesse.soma_interesses){
      maior_interesse=p;
    }
  }
  if(maior_interesse.soma_interesses!=0){
    for(var i in produtos){
      var p = produtos[i]
      p.preco=p.preco_base+p.preco_base*(p.soma_interesses/maior_interesse.soma_interesses);
      salvaProduto(p)
    }
  }else{
    for(var i in produtos){
      var p = produtos[i]
      p.preco=p.preco_base
      salvaProduto(p)
    }
  }

}
module.exports.adicionarInteresse = function(req,res,next){
  if(req.session.clienteLogado){
    if(req.method=="GET"){
      Produto.findOne(
      {"_id": req.query.id}).then(
        function(produto) {
          console.log(produto);
          req.session.produto=produto;
          res.render('produto/interesse', {'produto': produto,'clienteLogado':req.session.clienteLogado});
        },
        function (err){
          next(err);
        }
      );
    }else{
        var interesse= req.body.interesse;
        var valor=0;
        if(interesse=='Baixo interesse'){
          valor = 1
        }else if(interesse=='Tenho interesse'){
                valor=2;
              }else if(interesse=='Muito interessado'){
                      valor = 3;
                    }
        var p = req.session.produto;
        var avaliado =false;
        var nota="";
        for(var i in p.interesses){
            var aux = p.interesses[i];
            if(req.session.clienteLogado._id==aux.id_cliente){
              avaliado = true;
              nota= aux.valor;
              break;
            }
        }
        if(!avaliado){
          p.soma_interesses =  p.soma_interesses+valor;
          p.interesses[p.numero_interessados]={id_cliente:req.session.clienteLogado._id,cliente:req.session.clienteLogado.nome,'valor':interesse}
          p.numero_interessados=p.numero_interessados+1;
          Produto.findByIdAndUpdate(
            p._id,
            p,
            {new: true}
          ).then(
            function (produto){
              res.redirect("/produto/listar.html")
            },
            function(err) {
              return next(err);
            }
          );
        }else res.render("produto/ja_avaliado",{'produto': p ,'nota':nota,'clienteLogado':req.session.clienteLogado})
      }
    } else res.redirect("/index.html")
}
