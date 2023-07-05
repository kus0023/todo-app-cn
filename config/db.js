const mongoose = require('mongoose');

const URL = "mongodb://localhost/todo_db"
const database = mongoose.connect(URL);

database.then((data)=>{
    console.log("Connected to database.");
})
.catch(error=>{
    console.log("Error ! database connection failure", error);
})