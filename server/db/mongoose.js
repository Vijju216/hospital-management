var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Change the database connection URL with yours
mongoose.connect("mongodb+srv://paligalavijay55:wjtLVOnprZMhuuwP@cluster0.he3hjai.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB successfully!');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

module.exports = { mongoose };
