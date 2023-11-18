const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  reference: {
    type: Number,
  },
  event: {
    type: String,
    default: "charge.processing",
  },
  gateway_response:{ 
    type: String,
    default:'Approved',
},
  channel :{ 
    type: String,
    default:'mobile_money',
},
email:{
    type:String,
    default:'null',
},
customer_code: {
    type: String,
    default:'null'
},
payment_status: {
    type: String,
    default: "Processing",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt:{
    type: Date,
  }
});

module.exports = mongoose.model("Receipt", receiptSchema);
