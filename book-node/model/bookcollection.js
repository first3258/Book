const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema({
  bookID : {
      type : Number,
  },
  title :{
      type : String
  }
})
const BookModel = mongoose.model('bookcollections', bookSchema);

module.exports = BookModel

module.exports.getAll=function(data){
  BookModel.find(data);
}
