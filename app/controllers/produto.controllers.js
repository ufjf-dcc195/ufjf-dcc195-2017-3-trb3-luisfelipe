var Produto = require('mongoose').model('Produto');
module.exports.novoProduto = function(req, res, next) {
  var novo = new Produto({nome:"feijão"});
  novo.save().then(
  function(u){
    res.json(u);
  },
  function(err){
    return next(err);
  });
}
