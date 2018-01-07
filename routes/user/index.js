const router = require('express').Router();
const create = require('./create');
const getAll = require('./getAll');
const get = require('./get');

router.post('/user', create);
router.get('/user', getAll);
router.get('/user/:id', get);

module.exports = router;