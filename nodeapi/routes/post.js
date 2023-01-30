const {createPosts, getPosts} = require('../controllers/post');
const express = require('express');
const router = express.Router();
const {createPostsValidators} = require('../validators/requestValidators');

router.get('/', getPosts);
router.post('/', createPostsValidators, createPosts);

module.exports = router;