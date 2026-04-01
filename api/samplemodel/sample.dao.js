const mongoose = require('mongoose');
const schema = require('./sample.model');

const model = mongoose.model('Sample', schema);

module.exports = model;
