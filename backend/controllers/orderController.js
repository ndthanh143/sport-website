const Order = require('../models/order');
const Product = require('../models/product');
const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// Create a new order => localhost:4000/api/v1//order/new
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const { orderItems, shippingInfo, itemsPrice, shippingPrice, totalPrice, paymentInfo } = req.body;

    const order = await Order.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user._id,
    });

    res.status(200).json({
        success: true,
        order,
    });
});
