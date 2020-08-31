const Review = require('./../models/reviewModel');
const factory = require('./handlerFactory');
const Booking = require('../models/bookingModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;

  next();
};

exports.isBookedTour = catchAsync(async (req, res, next) => {
  const { tour, user } = req.body;
  const booking = await Booking.find({ tour, user });
  if (!(booking.length > 0))
    return next(new AppError('Please book tour before reviewing!', 400));
  next();
});

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createone(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
