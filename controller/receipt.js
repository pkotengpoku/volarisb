const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const router = express.Router();
const Receipt = require('../model/receipts');
const event = require("../model/event");

router.post(
    "/paystack",
    catchAsyncErrors(async (req, res, next) => {
        // Retrieve the request's body
        try {
            const result = req.body

            const amount= result.data.amount
            const id= result.data.id
            const reference= result.data.reference
            const event = result.event
            const gateway_response = result.data.gateway_response
            const channel= result.data.channel
            const email= result.data.customer.email
            const customer_code= result.data.customer.customer_code
            const payment_status= result.data.status

            const receipt = await Receipt.create({amount,id,reference,event,gateway_response,channel,email,customer_code,payment_status});
            res.status(200).send(receipt);
            
        } catch (error) {
            console.log(error)
        }
        // Do something with event
    })
  );

  module.exports = router
