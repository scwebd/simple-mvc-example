// Controller for our posts
// ============================
var db = require("../models");

module.exports = {
    // Find all posts
    findAll: function (req, res) {
        db.Post.findAll().then(function (posts) {
            res.json(posts);
        });
    },
    // Create a new post
    create: function (req, res) {
        db.Post.create(req.body).then(function (newPost) {
            res.json(newPost);
        });
    },
    // Delete the specified post
    delete: function (req, res) {
        db.Post.destroy({ where: { id: req.params.id } }).then(function (deletedPost) {
            res.json(deletedPost);
        });
    }
};
