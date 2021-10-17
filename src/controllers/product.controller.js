const Product = require('../models/product.model');

const getProducts = async (request, reply) => {
    try {
        const products = await Product.find();
        return reply.code(200).send(products);
    }
    catch(error) {
        return reply.code(500).send(error);
    }
}

const getProduct = async (request, reply) => {
    try {
        const product = await Product.findById(request.params.id);
        return reply.code(200).send(product);
    }
    catch(error) {
        return reply.code(500).send(error);
    }
}

const createProduct = async (request, reply) => {
    try {
        const newProduct = new Product(request.body);
        await newProduct.save();
        return reply.code(201).send(newProduct);
    }
    catch(error) {
        return reply.code(500).send(error);
    }
}

const updateProduct = async (request, reply) => {
    try {
        const product = await Product.findByIdAndUpdate(
            request.params.id,
            request.body,
            {new: true}
        )
        return reply.code(200).send(product);
    }
    catch(error) {
        return reply.code(500).send(error);
    }
    
}

const deleteProduct = async (request, reply) => {
    try {
        const product = await Product.findByIdAndDelete(request.params.id);
        return reply.code(200).send({message: 'Producto Borrado'});
    }
    catch(error) {
        return reply.code(500).send(error);
    }
}

module.exports = {
    getProducts, 
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}