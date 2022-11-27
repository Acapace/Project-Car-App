const express = require ('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Projectmgt= require('./models/projectmgtSchema.js');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

/////////////////////////////////////////////////////////////////////////////////////


//////MAIN PAGE ROUTE
app.get('/', (req, res) =>{
    res.send('index.ejs');
});


/////EDIT ROUTE////SECOND PART/////

app.put('/projectmgt/:id', (req, res) => {
    if(req.body.bought === "on"){
        req.body.bought = true;
    } else {
        req.body.bought = false;
    };
    if (req.body.installed === "on") {
        req.body.installed = true;
    } else {
        req.body.installed = false;
    }
    Projectmgt.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
        res.redirect('/projectmgt')
    });
});


/////EDIT ROUTE//////

app.get('/projectmgt/:id/edit', (req, res) =>{
    Projectmgt.findById(req.params.id, (err, foundTask)=>{
        res.render('edit.ejs',{
            data: foundTask
        });
    });    
});


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
    Projectmgt.findById(req.params.id, (error, foundTask) => {
        res.render('show.ejs', 
        {
            data:foundTask
        });
    });
});


/////////POST ROUTE////BOUGHT CHECKBOX///INSTALLED CHECKBOX/////////

app.post('/projectmgt', (req, res) => {
    //////if checkbox is checked
    if(req.body.bought === "on") {
        req.body.bought = true;
    } else {
        req.body.bought = false;
    };
    if(req.body.installed === "on") {
        req.body.installed = true;
    } else {
        req.body.installed = false;
    };
    Projectmgt.create(req.body, (error, createdTask) =>{
        res.redirect('/projectmgt');
    });
});


//////INDEX ROUTE///////

app.get('/projectmgt', (req, res) =>{
    Projectmgt.find({}, (error, alltasks) =>{
        res.render('index.ejs', {
            data: alltasks
        });
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