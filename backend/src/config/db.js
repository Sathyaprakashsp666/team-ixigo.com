const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect("mongodb+srv://mohit512661:01712811372aA@ixigoclonecluster.vxwjp.mongodb.net/ixigo-bus-db?retryWrites=true&w=majority",{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}

module.exports = connect