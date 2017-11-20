module.exports.sobre = function (req, res, next){
  res.render('autor/sobre',{nome: "Luis Felipe de Almeida Nascimento",curso: "Ciência da Computação", matricula: "201465577C",email: "luis.felipe.almeida.nascimento@gmail.com"})
}
