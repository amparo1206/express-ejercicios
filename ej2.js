const express = require("express");
const path = require("path")
const app = express();

app.use(express.json())

/* app.get('/',(req,res)=>{
    res.send('Welcome, ¡hola Mundo!')
}) */

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
}) 

app.use(express.static(path.join(__dirname, 'public')));

app.listen(4050, () => {
    console.log("el servidor está en el puerto 4050")
})
