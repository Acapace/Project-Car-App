const express = require ('express');
const mongoose = require('mongoose');
const app = express();


/////////////////////////////////////////////////////////////////////////////////////


app.get('/', (req, res) =>{
    res.send('hi');
});













/////////////////////////////////////////////////////////////////////////////////////


let PORT = 3000
if(process.env.PORT){
    PORT = process.env.PORT
};


app.listen(PORT, () => {
    console.log('listening....');
});


mongoose.connect('mongodb+srv://Acapace:!Acura123456@cluster0.cldlibi.mongodb.net/?retryWrites=true&w=majority', () =>{
    console.log('connected to mongo');
});


/////////////////////////////////////////////////////////////////////////////////////