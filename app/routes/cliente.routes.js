module.exports = function(app){
  var manipulador =  require("../controllers/cliente.controllers")
  app.use("/cliente/novo.html",manipulador.novoCliente)
  app.use("/cliente/listar.html",manipulador.listar)
  app.use("/cliente/excluir.html",manipulador.remove)
  app.use("/cliente/alterar.html",manipulador.alterar)
  app.use("/cliente/detalhes.html",manipulador.detalhes)
  app.use("/cliente/login.html",manipulador.login);
  app.use("/cliente/logout.html",manipulador.logout)
}
