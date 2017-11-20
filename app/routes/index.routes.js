module.exports = function (app){
  var manipulador = require("../controllers/index.controllers")
  app.use("/",manipulador.enderecos)
  app.use("/index.html",manipulador.enderecos)
}
