const knex = require('../config/knex')

const getPosts = (req, res) => {
    try {
        knex.select('*').from('blog_posts')
        .then((rows) => {
            res.send(rows);
        })
        .catch((err) => {
            console.log(err);
        })
    } catch(err) {
        res.status(500).send({error: err.message})
    }
}

const getPostsById = (req, res) => {
    try {
        knex.select('*').from('blog_posts').where('id', req.params.id)

        .then((rows) => {
            res.send(rows);
        })
        .catch((err) => {
            console.log(err);
        })
        
    } catch(err) {
        res.status(500).send({error: err.message})
    }
}

const newPosts = (req, res) => {
    try {
        knex('blog_posts').insert({title: req.body.title, body: req.body.body}).then(
            res.status(201).send({title: req.body.title, body: req.body.body})
        )
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}

module.exports = {getPosts, getPostsById, newPosts}