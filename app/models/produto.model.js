var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProdutoSchema = new Schema({
  nome: String,
  preco_base: String,
  interesses: Array,
})
mongoose.model('Produto',ProdutoSchema)
