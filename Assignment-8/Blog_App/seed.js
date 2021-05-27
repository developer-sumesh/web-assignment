const mongoose = require('mongoose');
const Blog = require('./model/blog');

const Blogs =[
    {   
        title: "modern computers",
        img: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "sumesh",
        text: "Hi this is a computer article A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically. Modern computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks."
    },
    {   
        title: "modern computers",
        img: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "sumesh",
        text: "Hi this is a computer article A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically. Modern computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks."
    },
    {
        
        title: "modern computers",
        img: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "sumesh",
        text: "Hi this is a computer article A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically. Modern computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks."
    },
    {
        
        title: "modern computers",
        img: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "sumesh",
        text: "Hi this is a computer article A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically. Modern computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks."
    },
]

const seedDB = async ()=>{
    await Blog.insertMany(Blogs);
    console.log("DB seeded");
}

module.exports = seedDB;