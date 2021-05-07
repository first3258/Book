const mongoose = require('mongoose')
const Schema = mongoose.Schema
const orderSchema = new Schema({
  name: String,
  id: {
    type: String,
    unique: true
  },
  address: String,
  date: {
    type: Date,
    default: Date.now
  }
})
const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel

module.exports.getAll=function(data){
  OrderModel.find(data);
}
