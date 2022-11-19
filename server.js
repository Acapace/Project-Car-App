const express = require ('express');
const mongoose = require('mongoose');

const Projectmgt= require('./models/projectmgtSchema.js');
const app = express();

// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


/////////////////////////////////////////////////////////////////////////////////////


//////MAIN PAGE ROUTE
// app.get('/', (req, res) =>{
//     res.send('hello world');
// });


/////EDIT ROUTE//////

// app.get('projectmgt/:id/edit', (req, res) =>{
//     Projectmgt.findById(req.params.id, (err, foundPart)=>{
//         res.render('edit.ejs',{
//             part: foundPart
//         });
//     });
// });



//////INDEX ROUTE///MAIN PAGE///////

app.get('/projectmgt', (req, res) =>{
    Projectmgt.find({}, (error, allTasks) =>{
        res.render('index.ejs', {
            tasks: allTasks
        });
    });
});



/////// NEW ROUTE ///////




///////SHOW ROUTE : DYNAMIC ROUTE //////


app.get('parts/:id', (req, res) => {
    res.render('shows.ejs');
});


/////////POST 









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