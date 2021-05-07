const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://first:12345@cluster0.po2mh.mongodb.net/bookdatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

