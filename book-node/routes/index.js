const { names } = require('debug');
var express = require('express');
const OrderModel = require('../model/order');
const { find } = require('../model/order');

  const Book = require('../model/bookcollection')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/listbook',(req, res)=>{
  
  OrderModel.find(function (err, orders){
    Book.find(function (err, books){
      res.render('login', 
    {orders : orders,
      books : books
    })
    })
  })
})

router.get('/addbook', (req, res)=>{
  res.render('register')
})


module.exports = router;
