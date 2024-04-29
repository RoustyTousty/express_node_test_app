const express = require('express');
const router = express.Router();

const squereController = require('../controllers/squereConroller');

router.route('/').post(squereController.squereForm);

module.exports = router;