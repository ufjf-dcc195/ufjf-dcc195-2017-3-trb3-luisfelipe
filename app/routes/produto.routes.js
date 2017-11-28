module.exports = function (app){
  var manipulador = require("../controllers/produto.controllers")
  app.use("/produto/novo.html",manipulador.novoProduto)
  app.use("/produto/listar.html",manipulador.listar)
  app.use("/produto/excluir.html",manipulador.remove)
  app.use("/produto/alterar.html",manipulador.alterar)
  app.use("/produto/detalhes.html",manipulador.detalhes)
  app.use("/produto/adicionar-interesse.html",manipulador.adicionarInteresse)
}
