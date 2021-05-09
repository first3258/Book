const mongoose = require('mongoose')
const Schema = mongoose.Schema
const orderSchema = new Schema({
  name: String,
  id: {
    type: String,
    unique: true
  },
  address: String,
  book: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number
  }
})

const OrderModel = mongoose.model('orders', orderSchema);

module.exports = OrderModel

module.exports.getAll=function(data){
  OrderModel.find(data);
}
