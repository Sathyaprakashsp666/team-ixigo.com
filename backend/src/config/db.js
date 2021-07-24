const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  return mongoose.connect("mongodb+srv://ixigo:ixigo@cluster0.dx5wc.mongodb.net/ixigo?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
