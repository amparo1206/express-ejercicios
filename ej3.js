const express = require("express");
const path = require("path");
const { report } = require("process");
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

app.put('/products/:id', (req, res) => {
    const found = products.some(product => product.id === +req.params.id)

    if (found) {
        products.forEach(product => {
            if (product.id === +req.params.id) {
                product.nombre = req.body.nombre ? req.body.nombre : product.nombre,
                product.precio = req.body.precio ? req.body.precio : product.precio
                
                res.json(product)
            }
        })
    } else {
        res.status(404).json({msg:`Miembro con el id ${req.params.id} no se encuentra`})
    }
})

app.delete('/products/:id', (req, res) => {
    const found = products.some(product => product.id === req.params.id)

    if (found) {
        res.json(products.filter(product => product.id !== req.params.id))
    } else {
        res.status(404).json({msg:`Miembro con el id ${req.params.id} no se encuentra`})
    }
})

app.get('/products/:precio'), (req, res) => {
    console.log(req.params.precio)
    const found = products.some(product => product.precio === +req.params.precio)

    if (found) {
        res.json(products.filter(product => product.precio === +req.params.precio))
    } else {
        res.status(404).json({msg:`Mienbro con el id ${req.params.precio} no se encuentra`})
    }
}

app.get('/products/:precio', (req, res) => {
    res.json(products.precio.filter(product=>product.precio > 50 && product.precio < 250))
})


app.get('/products/:id'), (req, res) => {
    console.log(req.params.id)
    const found = products.some(product => product.id === +req.params.id)

    if (found) {
        res.json(products.filter(product => product.id === +req.params.id))
    } else {
        res.status(404).json({msg:`Mienbro con el id ${req.params.id} no se encuentra`})
    }
}

app.get('/products/:nombre', (req, res) => {
    const found = products.some(product => product.nombre === req.params.nombre)
    if (found) {
        res.json(products.filter(product => product.nombre === req.params.nombre))
    } else {
        res.status(404).json({msg:`Mienbro con el id ${req.params.nombre} no se encuentra`})
    }
})


app.listen(3000, () => {
    console.log("el servidor est?? en el puerto 3000")
})
