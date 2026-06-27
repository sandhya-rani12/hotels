// const notes = require("./notes.js");
// console.log("Server file is available");

// var age = notes.age;

// console.log(age);


// import express from 'express'
// const  app = express()
// import db from './db.js'

// app.get('/', function (req,res){
//     res.send("Welcome to my hotel.... How i can help you ?, we have list of menus ");
// })


// // app.get('/Didi',function (req,res){
// //   res.send("hello Sandhyarani")
// // })

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000')
//})


import express from 'express';
import db from './db.js';

import MenuItem from './MenuItem.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json()); // req.body

app.get('/', (req, res) => {
    res.send("Welcome to my hotel....");
});

// ================= PERSON ROUTES =================

// POST Person


// GET Person



// ================= MENU ROUTES =================

// POST Menu Item


// GET Person by work type        (Parameterized API calls)


//import the router files
import personRoutes from './routes/personRotes.js';
import menuItemRoutes from './routes/menuItemRoutes.js';

//Use the Router
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});