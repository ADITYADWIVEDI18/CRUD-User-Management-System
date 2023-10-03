const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const path = require('path');


const connectDB = require("./server/database/connection");

const app = express();


//Secret info bifurcated from the server.
dotenv.config( { path :'config.env'} )
const PORT = process.env.PORT||8080;

//log posts
app.use(morgan('tiny'));

//mongodb conncetion *
connectDB();

//parse request to bodyParser
app.use(bodyParser.urlencoded({extended:true}));

//set view engine for ejs usage
app.set("view engine","ejs");

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js' ,express.static(path.resolve(__dirname,"assets/js")))

//load router
app.use('/', require("./server/routes/router"));


app.listen(PORT , (req,res)=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})