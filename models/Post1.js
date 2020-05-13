const mongoose = require('mongoose')
const PostSchema = mongoose.Schema({
    symptom: {
        type: String,
        required: true
    }
});

const Post1 = mongoose.model('Post1', PostSchema);
module.exports = Post1