const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { required: true, type: String },
    password: { required: true, type: String },
    tickets: [
      {
        seatId: [Number],
        routeId: { type: Schema.Types.ObjectId, ref: 'route' },
        holder:{
            name:{type:String, required:true},
            age:{type:Number, required:true},
            gender:{type:String,required:true}
        }
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);