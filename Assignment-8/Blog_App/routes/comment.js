const express = require('express');
const router = express.Router();
const Blog = require('../model/blog');
const Comment = require('../model/comment');

// Creating a new comment
router.post('/blogs/:id/comment',async (req,res)=>{
    
    const blog = await Blog.findById(req.params.id);
    const comment = new Comment(req.body.comment);
    blog.comments.push(comment);

    await comment.save();
    await blog.save();

    res.redirect(`/blogs/${req.params.id}`);
})

module.exports = router;