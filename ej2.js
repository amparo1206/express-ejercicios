const express = require("express");
const path = require("path")
const app = express();

app.use(express.json())
/* 
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})  */

/* app.use(express.static(path.join(__dirname, 'public'))); */

app.get('/products',(req,res)=>{
    res.send('listado de productos')
})

app.post('/products',(req,res)=>{
    res.send('crear productos')
})

app.put('/products',(req,res)=>{
    res.send('actualizar un producto')
})

app.delete('/products',(req,res)=>{
    res.send('borrar un producto')
})

app.get('/usuarios',(req,res)=>{
    res.send('listado de usuarios')
})

app.post('/usuarios', (req, res) => {
    res.send('crear usuarios')
})

app.put('/usuarios', (req, res) => {
    res.send('actualizar un usuario')
})

app.delete('/usuarios', (req, res) => {
    res.send('borrar un usuario')
})

app.listen(4050, () => {
    console.log("el servidor está en el puerto 4050")
})
