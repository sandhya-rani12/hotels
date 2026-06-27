

// //define the MongoDB connection URL
// const  mongoURL = "mongodb://localhost:27017/hotels"

// // Set up MongoDB connection
// mongoose.connect(mongoURL, {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// })

// //get the default connection
// //mongoose maintains a default connection object representing the mongoDB connection.
// const db = mongoose.connection;


// //define the event listeners for database connection
// db.on('connected',() =>{
//     console.log("Connected to MongoDB server");
// })

// db.on('error',(err)=>{
//     console.log("MongoDB connection Error",err);
// })

// db.on('disconnected',() =>{
//     console.log("MongoDB disconnected");
// })

// //exports the database connection
// module.exports = db;




import mongoose from 'mongoose';

// MongoDB URL
const mongoURL = "mongodb://localhost:27017/hotels";

// Connect to MongoDB
mongoose.connect(mongoURL);

const db = mongoose.connection;

// Events
db.on('connected', () => {
    console.log("Connected to MongoDB server");
});

db.on('error', (err) => {
    console.log("MongoDB connection Error", err);
});

db.on('disconnected', () => {
    console.log("MongoDB disconnected");
});

export default db;