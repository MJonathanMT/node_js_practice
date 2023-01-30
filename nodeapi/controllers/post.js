const Post = require('../models/post');

exports.getPosts = (req, res) => {
    const post = Post.find().select("_id title body")
    .then(posts => {
        res.json({
           post: posts
        });
    })
    .catch(err => console.log(err))
};

exports.createPosts = (req, res) => {
    const post = new Post(req.body);
    console.log("Creating post: ", req.body);

    post.save().then(result => {
        res.status(200).json({
            post: result
        });
    })
}