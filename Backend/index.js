const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = require('./config/corsOptions');

app.use(cors(corsOptions));
app.use(express.json());

app.use('/numbers', require('./routes/numbers'));
app.use('/squere', require('./routes/squere'));
app.use('/contact', require('./routes/contact'));
app.use('/posts', require('./routes/posts'));

// app.get('/posts', (req, res) => {
//     try {
//         knex.select('*').from('blog_posts')
//         .then((rows) => {
//             res.send(rows);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     } catch(err) {
//         res.status(500).send({error: err.message})
//     }
// })

// app.get('/posts/:id', (req, res) => {
//     try {
//         knex.select('*').from('blog_posts').where('id', req.params.id)

//         .then((rows) => {
//             res.send(rows);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
        
//     } catch(err) {
//         res.status(500).send({error: err.message})
//     }
// })

// app.post('/posts', (req, res) => {
//     try {
//         knex('blog_posts').insert({title: req.body.title, body: req.body.body}).then(
//             res.status(201).send({title: req.body.title, body: req.body.body})
//         )
//     } catch (err) {
//         res.status(500).send({error: err.message})
//     }
// })

const port = 5000;
app.listen(port, () => {
    console.log("Server is runnng!");
})