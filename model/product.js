const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your product name!"],
  },
  description: {
    type: String,
    required: [true, "Please enter your product description!"],
  },
  category: {
    type: String,
    required: [true, "Please enter your product category!"],
  },
  tags: {
    type: String,
  },
  originalPrice: {
    type: Number,
  },
  discountPrice: {
    type: Number,
    required: [true, "Please enter your product price!"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter your product stock!"],
  },
  deliveryBy: {
    type: String,
    required: [true, "Please enter Delivery Method!"],
  },
  deliveryTime: {
    type: String,
    required: [true, "Please enter delivery time!"],
  },
  images: [
    {
      public_id: {
        type: String,
        default: ["Image1"],
        required: false,
      },
      url: {
        type: String,
        required: false,
        default: ["https://th.bing.com/th/id/R.f71b7c0a29e6ba9392dc275ee2d4957f?rik=poU1T2TvJsnUaw&pid=ImgRaw&r=0"],
      },
    },
  ],
  reviews: [
    {
      user: {
        type: Object,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
      productId: {
        type: String,
      },
      createdAt:{
        type: Date,
        default: Date.now(),
      }
    },
  ],
  ratings: {
    type: Number,
  },
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
