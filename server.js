require('dotenv').config();
const express =require('express');
const App = express();
const hostname= process.env.host;
const port = process.env.port;

App.get('/',(req, res)=>{
    res.send('Welcome toPearl server!');
});
application.listen(port,() =>{
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(`Press Ctrl+C to stop the server.`);
    console.log(`Press Ctrl+R to restart the server.`);
    console.log(`Waiting for requests...`);
})

