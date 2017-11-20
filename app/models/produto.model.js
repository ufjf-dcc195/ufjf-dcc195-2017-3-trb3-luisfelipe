var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProdutoSchema = new Schema({
  nome: String,
})
mongoose.model('Produto',ProdutoSchema)
