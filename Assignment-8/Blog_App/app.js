const express = require('express');
const app = express();
const blogRoute = require('./routes/blog');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const comment = require('./routes/comment');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost:27017/blogApp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(()=>{
        console.log("DB connected");
    })
    .catch((err)=>{
        console.log("error while connecting to db");
        console.log(err);
    })


// seedDB();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{

    res.send("everything working fine");

})

app.use(blogRoute);
app.use(comment);

app.listen(3000,()=>{
    console.log("Server started at port 3000");
})