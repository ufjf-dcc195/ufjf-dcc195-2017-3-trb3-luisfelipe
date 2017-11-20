module.exports.enderecos = function(req,res,next){
  res.render('enderecos',{enderecos : [
    {questao:"/",link :"/"},
    {questao:"index.html",link :"/index.html"},
    {questao:"Sobre",link :"/sobre.html"}
  ]})
}
