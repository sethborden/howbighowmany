'use strict';

var _ = require('lodash');
var Benchmark = require('./benchmark.model');

// Get list of benchmarks
exports.index = function(req, res) {
    Benchmark.find(function (err, benchmarks) {
        if(err) { return handleError(res, err); }
        return res.json(200, benchmarks);
    });
};

// Get list of 50 latest benchmarks
exports.indexLatest = function(req, res) {
    var query = Benchmark.find({'whoCanAdd': 'anyone'}).select({'name': 1, 'owner': 1, '_id': 1});
    query.exec(function (err, benchmarks) {
        if (err) { return handleError(res, err); }
        return res.json(200, benchmarks);
    });
}

// Get a single benchmark
exports.show = function(req, res) {
    Benchmark.findById(req.params.id, function (err, benchmark) {
        if(err) { return handleError(res, err); }
        if(!benchmark) { return res.send(404); }
        return res.json(benchmark);
    });
};

// Creates a new benchmark in the DB.
exports.create = function(req, res) {
    Benchmark.create(req.body, function(err, benchmark) {
        if(err) { return handleError(res, err); }
        return res.json(201, benchmark);
    });
};

// Adds a number to an existing Benchmark
exports.addNumberToBenchmark = function(req, res) {
    Benchmark.findById(req.params.id, function (err, benchmark) {
        if(err) { return handleError(res, err); }
        if(!benchmark) { return res.send(404); }
        benchmark.data.push(Number(req.body.number));
        benchmark.save(function(err) {
            if (err) { return handleError(res, err); }
            return res.json(200, benchmark);
        });
    });
}

// Updates an existing benchmark in the DB.
exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    Benchmark.findById(req.params.id, function (err, benchmark) {
        if (err) { return handleError(res, err); }
        if(!benchmark) { return res.send(404); }
        var updated = _.merge(benchmark, req.body);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.json(200, benchmark);
        });
    });
};

// Deletes a benchmark from the DB.
exports.destroy = function(req, res) {
    Benchmark.findById(req.params.id, function (err, benchmark) {
        if(err) { return handleError(res, err); }
        if(!benchmark) { return res.send(404); }
        benchmark.remove(function(err) {
            if(err) { return handleError(res, err); }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}
