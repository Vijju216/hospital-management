var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://paligalavijay55:y1yBLDbRIYklYrZh@cluster0.dojhzeo.mongodb.net/?retryWrites=true&w=majority");

module.exports = { mongoose };
