const express = require ('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Projectmgt= require('./models/projectmgtSchema.js');
const app = express();

// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

/////////////////////////////////////////////////////////////////////////////////////


//////MAIN PAGE ROUTE
// app.get('/', (req, res) =>{
//     res.send('hello world');
// });



/////EDIT ROUTE////SECOND PART/////

// app.put('projectmgt/:id', (req, res) => {
//     if(req.body.bought ===)
// })



/////EDIT ROUTE//////

app.get('projectmgt/:id/edit', (req, res) =>{
    Projectmgt.findById(req.params.id, (err, foundTask)=>{
        res.render('edit.ejs',{
            tasks: foundTask
        });
    });
});

// app.get('/projectmgt/edit', (req, res) => {
//     res.render('edit.ejs');
// });


///////DELETE ROUTE//////////


app.delete('/projectmgt/:id', (req, res) => {
    Projectmgt.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect('/projectmgt')
    });
});


/////// NEW ROUTE///STATIC ROUTE///////

app.get('/projectmgt/new', (req, res) =>{
    res.render('new.ejs');
});



///////SHOW ROUTE///DYNAMIC ROUTE//////


app.get('/projectmgt/:id', (req, res) => {
    Projectmgt.findById(req, params.id, (error, foundTask) => {
        res.render('show.ejs', {
            tasks:foundTask
        });
    });
});


// app.get('/projectmgt/show', (req, res) =>{ 
//     res.render('show.ejs');
// });


//////INDEX ROUTE///MAIN PAGE///////

app.get('/projectmgt', (req, res) =>{
    Projectmgt.find({}, (error, alltasks) =>{
        console.log(alltasks);
        res.render('index.ejs', {
            data: alltasks
        });
    });
});




/////////POST ROUTE////BOUGHT CHECKBOX///INSTALLED CHECKBOX/////////

app.post('/projectmgt', (req, res) => {
    //////if checkbox is checked
    if(req.body.itemBought === "on") {
        req.body.itemBought = true;
    } else {
        req.body.itemBought = false;
    };
    if(req.body.taskDone === "on") {
        req.body.taskDone = true;
    } else {
        req.body.taskDone = false;
    };
    Projectmgt.create(req.body, (error, createdTask) =>{
        res.redirect('/projectmgt');
    });
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