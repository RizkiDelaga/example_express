require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const productController = require('../app/controllers/productController')

app.use(express.json())
// Routing
app.get('/api/v1/product', productController.getAll)
app.get('/api/v1/product/:id', productController.getById)
app.get('/api/v1/product/:name', productController.getByName)
app.post('/api/v1/product', productController.createProduct)
app.put('/api/v1/product/:id', productController.updateProduct)
app.delete('/api/v1/product/:id', productController.deleteProduct)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

