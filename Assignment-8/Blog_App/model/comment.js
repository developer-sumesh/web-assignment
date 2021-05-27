const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    nickname:{
        type:String,
        required: true
    },
    comment:{
        type:String,
        required:true
    },
})

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;