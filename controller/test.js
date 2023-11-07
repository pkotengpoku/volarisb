const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

router.get(
    "/testy",
     (req, res, next) => {
        res.status(201).json({
         hellp,
    })
     }
)

  module.exports = router;
