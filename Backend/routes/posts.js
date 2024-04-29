const express = require('express');
const router = express.Router();

const postsController = require('../controllers/postsController');

router.route('/').get(postsController.getPosts);
router.route('/:id').get(postsController.getPostsById);

router.route('/').post(postsController.newPosts);

module.exports = router;