const express = require('express');
const router = express.Router();
const Blog = require('../model/blog');
const Comment = require('../model/comment');

// Display all blogs
router.get('/blogs',async (req,res)=>{
    
    const blogs = await Blog.find({}); 
    res.render('blog/index',{blogs});
})

// Get the form for new blog
router.get('/blogs/new',(req,res)=>{
    res.render('blog/new');
})

// Create new blog
router.post('/blogs',async(req,res)=>{
    console.log(req.body.blog);
    await Blog.create(req.body.blog)
    res.redirect('/blogs')
    // res.send("you hit the post route");
})

//Show particular blog
router.get('/blogs/:id',async (req,res)=>{
    const blog = await Blog.findById(req.params.id).populate('comments');  
    console.log(blog);
    res.render('blog/show',{blog});
})

// get a edit form
router.get('/blogs/:id/edit',async(req,res)=>{
    const blog = await Blog.findById(req.params.id);
    res.render('blog/edit',{blog});
})

// update the particular blog
router.patch('/blogs/:id',async(req,res)=>{
    await Blog.findByIdAndUpdate(req.params.id,req.body.blog);
    res.redirect(`/blogs/${req.params.id}`)
})

// Delete the particular blog
router.delete('/blogs/:id',async(req,res)=>{
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/blogs');
})

module.exports = router; 