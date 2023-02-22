require('dotenv').config(); 
const express = require('express');
const cors  = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api', require('./routes/auth.routes'));
app.use('/api', require('./routes/user.routes'));

const URI = process.env.MONGO_URL;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true},
    err =>{
        if(err) throw err;
        console.log('connected to mongoDB')

});

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`listen on port ${port}`);
});