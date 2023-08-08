var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://paligalavijay55:wjtLVOnprZMhuuwP@cluster0.he3hjai.mongodb.net/?retryWrites=true&w=majority");

module.exports = {mongoose};
