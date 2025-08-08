require('dotenv').config();
const express =require('express');
const mongoose =require('mongoose');
const cors =require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('Connected to mongodb'))
.catch(err=>console.error('MongoDB connection error:', err))

const postSchema= new mongoose.Schema({
    caption:{type:String, required:true},
    imageUrl:{type:String, required:true}
});
const Post = mongoose.model('Post',
postSchema);
app.get('/posts',(req, res)=>{
    const posts=await.find();
    res.json(posts);
});
app.post('/posts', async(req,res)=>{
    const{caption,imageUrl}= req.body;
    const newPost = new post({caption, imageUrl});
    await newPost.save();
    res.status(201).json(newPost)
})
    
const hostname= process.env.host;
const port = process.env.port;

app.get('/',(req, res)=>{
    res.send('Welcome toPearl server!');
});
app.listen(port,() =>{
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(`Press Ctrl+C to stop the server.`);
    console.log(`Press Ctrl+R to restart the server.`);
    console.log(`Waiting for requests...`);
})

