/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Benchmark = require('./benchmark.model');

exports.register = function(socket) {
    Benchmark.schema.post('save', function (doc) {
        onSave(socket, doc);
    });
    Benchmark.schema.post('remove', function (doc) {
        onRemove(socket, doc);
    });
}

function onSave(socket, doc, cb) {
    socket.emit('benchmark:save', doc.data);
}

function onRemove(socket, doc, cb) {
    socket.emit('benchmark:remove', doc);
}
