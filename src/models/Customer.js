const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CustomerSchema = new Schema({
    name: String,
    email: {
      type: String,
      required: true,
      unique: true
    }
});


module.exports = Customer = mongoose.model('Customer', CustomerSchema)
