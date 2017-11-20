module.exports = function (app){
  var manipulador = require("../controllers/produto.controllers")
  app.use("/novoProd.html",manipulador.novoProduto)
}
