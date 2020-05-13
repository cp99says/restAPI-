const express = require('express');
const app = express.Router();

const Post = require('../models/Post');
const Post1 = require('../models/Post1');



app.get('/dell', (req, res) => {
    Post1.find()
        .then(d => {
            console.log(d);
            res.render('dell',{symptom:d[d.length-1].symptom})
        })

})
app.post('/mongo', (req, res) => {
        console.log(req.body)
        const post = new Post({
            symptom: req.body.sym
        })
        post.save()
            .then(data => {
                setTimeout(() => {
                    res.redirect('/posts/dell')
                }, 1000)

            })
            .catch(err => {
                res.json({ message: err })
            })

    })
    
app.post('/', (req, res) => {
        const post = new Post({
            symptom: req.body.symptom
        })
        post.save()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json({ message: err })
            })

    })
    

    
console.log('posts are up')
module.exports = app;