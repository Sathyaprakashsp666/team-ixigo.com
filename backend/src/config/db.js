const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
     return mongoose.connect(process.env.MONGO_API, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
