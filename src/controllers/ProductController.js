const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async get(req, res) {
        // The first object from paginate is used to where clause
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },

    async getById(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async create(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        // "new:true" returns the updated product
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async delete(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}