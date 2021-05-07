const express = require('express')
const router = express.Router()
const Order = require('../model/order')

router.post('/register', async (req, res) => {
  const { name, id, address, book1} = req.body;

  if(!name || !id || !address) {
    return res.render('register', { message_error: 'Please try again'})
  }

  const order = new Order({
    name,
    id,
    address,
    book1
  })

  await order.save();
  
  res.render('register', { message: 'Order complete'})
})

router.post('/login', (req, res) => {
  console.log(req.body)
  res.redirect('/login')
})


module.exports = router