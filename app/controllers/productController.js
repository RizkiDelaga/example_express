const {
    response
} = require('express')
const productService = require('../services/productService')

module.exports = {
    async getAll(req, res) {
        try {
            const data = await productService.getAll()
            res.status(200).json({
                status: true,
                message: "Data Berhasil di Tampilkan!",
                data: data
            })
        } catch (error) {
            res.status(404).json({
                status: false,
                message: error.message
            })
        }
    },

    async getById(req, res) {
        try {
            const data = await productService.getById(req.params.id)
            res.status(200).json({
                status: true,
                message: "Data Berhasil di Tampilkan!",
                data: data
            })
        } catch (error) {
            res.status(404).json({
                status: false,
                message: error.message
            })
        }
    },

    async createProduct(req, res) {
        try {
            const data = await productService.createProduct(req.body)
            res.status(200).json({
                status: true,
                message: "Data Berhasil di Tampilkan!",
                data: data
            })
        } catch (error) {
            res.status(404).json({
                status: false,
                message: error.message
            })
        }
    },

    async updateProduct(req, res) {
        try {
            console.log(req.body)

            await productService.updateProduct(req.params.id, {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description
            })
            console.log("salah")
            const data = await productService.getById(req.params.id)
            res.status(200).json({
                status: true,
                message: "Data Berhasil di Tampilkan!",
                data: data
            })
        } catch (error) {
            console.log(error)
            res.status(404).json({
                status: false,
                message: "error.message"
            })
        }
    },

    async deleteProduct(req, res) {
        try {
            const data = await productService.deleteProduct(req.params.id)
            if (data === 1) {
                res.status(200).json({
                    status: true,
                    message: "Data Berhasil di Tampilkan!",
                    data: data
                })
                
            }else {
                res.status(404).json({
                    status: false,
                    message: "data not found"
                })
            }
        } catch (error) {
            res.status(404).json({
                status: false,
                message: error.message
            })
        }
    }
}