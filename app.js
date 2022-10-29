const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use((req, res, next) => {
    res.status(200).json({
        message: 'It Works!'
    });
});


app.use('/products', productRoutes);

module.exports = app;