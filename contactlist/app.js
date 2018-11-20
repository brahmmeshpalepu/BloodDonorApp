
//Importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();


// Connect to MongoDb
mongoose.connect('mongodb://localhost:27017/contactslist');
 
//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to the mongodb #27017');
})

//on connection
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error while connecting to mongodb'+err);
    }   
})

//For routes
const route = require('./routes/route');

//For Port
// const port = 3000;
const port = process.env.PORT || '3000';


//use body parser - json
app.use(bodyparser.json());

app.use('/api',route);

//Use middlewate  - cors
app.use(cors());
// app.use(cors({origin: 'http://localhost:3000',
// credentials: true}
// ));


//static files

app.use(express.static(path.join(__dirname,'public')));




//For route
app.get('/',(req,res)=>{
    res.send('Welcome to my world Mean app');
});

app.listen(port,() =>{
    console.log('Server started at port,'+port);
});




