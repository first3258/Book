const { names } = require('debug');
var express = require('express');
const OrderModel = require('../model/order');
const { find } = require('../model/order');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login',(req, res)=>{
  OrderModel.find(function (err, orders){
    res.render('login', {orders : orders})
  })
})

router.get('/register', (req, res)=>{
  res.render('register')
})


module.exports = router;
