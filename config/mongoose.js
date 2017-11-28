var config = require('./config');
var mongoose = require('mongoose');

module.exports = function(){
  console.log("Conectando a base de dados");
  mongoose.connect(config.db, {useMongoClient: true});
  console.log("Conexao concluida");
  mongoose.Promise = global.Promise;
  require("../app/models/produto.model");
  require("../app/models/cliente.model");
  return mongoose;
}
