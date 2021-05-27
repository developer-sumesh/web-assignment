const mongoose = require('mongoose');
const Comment = require('./comment');

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
})

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;