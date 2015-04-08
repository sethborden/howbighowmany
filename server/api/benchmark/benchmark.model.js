'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BenchmarkSchema = new Schema({
    commentsAllowed: {type: Boolean, default: true},
    owner: {type: String, default: "Anonymous"},
    name: {type: String, require: true},
    whoCanAdd: {type: String, default: "anyone"},
    minimum: Number,
    maximum: Number,
    description: {type: String},
    question: {type: String, required: true},
    units: {type: String, required: true, default: 'units'},
    data: [],
});

module.exports = mongoose.model('Benchmark', BenchmarkSchema);
