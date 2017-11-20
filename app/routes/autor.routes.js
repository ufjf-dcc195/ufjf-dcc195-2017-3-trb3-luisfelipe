module.exports = function (app) {
  var manipulador = require("../controllers/autor.controllers")
  app.use("/sobre.html",manipulador.sobre)
}
