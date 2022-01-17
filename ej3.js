const express = require("express");
const path = require("path")
const app = express();

app.use(express.json())

const products = [
    {
        id: 1,
        nombre: 'Taza de Harry Potter',
        precio: 300
    },
    {
        id: 2,
        nombre: 'FIFA 22 PS5',
        precio: 1000
    },
    {
        id: 3,
        nombre: 'Figura Goku Super Saiyan',
        precio: 100
    },
    {
        id: 4,
        nombre: 'Zelda Breath of the Wild',
        precio: 200
    },
    {
        id: 5,
        nombre: 'Skin Valorant',
        precio: 120
    },
    {
        id: 6,
        nombre: 'Taza Star Wars',
        precio: 220
    }
]

app.get('/products', (req, res) => {
    res.json(products)
})

app.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio,
    }
    products.push(newProduct)
    res.json(products)
})

app.listen(3000, () => {
    console.log("el servidor está en el puerto 3000")
})
