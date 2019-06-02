const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 1003;

app.use(cors());

const getProducts = async () => {
    let response = await axios.get('https://next.json-generator.com/api/json/get/EkzBIUWNL');
    return response.data;
}

const getProduct = async (id) => {
    let response = await axios.get('https://next.json-generator.com/api/json/get/EkzBIUWNL');
    let product = response.data.find(product => product._id === id);

    return product;
}

app.get('/products', async (req, res, next) => {
    let products = await getProducts();
    res.send(products);
});

app.get('/product/:id', async (req, res) => {
    let product = await getProduct(req.params.id);
    res.send(product);
});

app.listen(port, () => {
    console.log(`Product API listening on port ${port}`);
});