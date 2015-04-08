'use strict';

var express = require('express');
var controller = require('./benchmark.controller');

var router = express.Router();

router.get('/', controller.indexLatest);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/:id', controller.addNumberToBenchmark);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
