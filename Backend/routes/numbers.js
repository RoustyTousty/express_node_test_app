const express = require('express');
const router = express.Router();

const numbersController = require('../controllers/numbersController');

router.route('/').post(numbersController.getNumbers);
router.route('/:id').post(numbersController.getNumberById);

module.exports = router;