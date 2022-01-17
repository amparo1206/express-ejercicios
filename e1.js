const express = require("express");
const app = express();
app.use(express.json())

/* app.listen(4050, () => {
    console.log("el servidor está en el puerto 4050")
})
app.listen(4050, (err) => {
    if (err) {
        console.log(`Servidor levantado en el puerto ${puerto}`)
    } else {
        console.log(`Servidor no se ha levantado en el puerto ${puerto}`)
    }
}) */
app.get('/',(req,res)=>{
    res.send('Bienvenidos a Node.js Server Side')
})