const {
    Model
} = require('sequelize')
const {
    Product
} = require('../models')

module.exports = {
    async getAll() {
        try {
            return await Product.findAll()
        } catch (error) {
            throw error;
        }
    },
    
    async getById(id) {
        try {
            return await Product.findOne({
                where: {
                    id: id
                }
            })
        } catch (error) {
            throw error;
        }
    },

    async createProduct(createArgs) {
        try {
            return await Product.create(createArgs)
        } catch (error) {
            throw error;
        }
    },

    async updateProduct(id, updatex) {
        try {
            console.log(id)
            return await Product.update(updatex, {
                where: {
                    id: id
                }
            })
        } catch (error) {
            throw error;
        }
    },

    async deleteProduct(id) {
        try {
            return await Product.destroy({
                where: {
                    id: id
                }
            })
        } catch (error) {
            throw error;
        }
    }
}