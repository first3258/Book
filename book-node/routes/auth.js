const express = require('express')
const router = express.Router()
const Order = require('../model/order')
const Book = require('../model/bookcollection')

router.post('/register', async (req, res) => {
  const { name, id, address, book1, book2, book3, book4} = req.body;
  let priceBook = [395, 530, 365, 295];
  let book = [book1, book2, book3, book4];
  let price = 0;
  for (let i = 0; i < book.length; i++) {
    price += (priceBook[i] * book[i]);
  }
  console.log(price);

  if(!name || !id || !address) {
    return res.render('register', { message_error: 'Please try again'})
  }

  const order = new Order({
    name,
    id,
    address,
    book,
    price
  })

  await order.save();
  
  res.render('register', { message: 'Order complete'})
})

router.post('/login', (req, res) => {
  console.log(req.body)
  res.redirect('/login')
})

module.exports = router