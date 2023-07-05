const express = require("express");

//Global variables
const PORT = 8000;
const app = express();

//ejs config
app.set("view engine", "ejs");
app.set("views", "./views");

//server setup
app.listen(PORT, ()=>{

    console.log(`Server started on PORT: ${PORT} Visit: http://localhost:${PORT}`);
}).on('error', (err)=>{
    if(err){
        console.log(`Cannot open server on PORT: ${PORT}, Descrption: ${err}`);
        return;
    }
});

