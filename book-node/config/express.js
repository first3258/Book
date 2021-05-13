var express = require('express')

module.exports = function(){
    var app = express();
    require('../app')(app);
    return app;
}