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
        "slackUsername": "oedjoat",
        "backend": true,
        "age": 34,
        "bio": "My name is dolapo, loving HNG already but no lies this thing don choke from the 'benigning' oo"
    });
});


app.use('/products', productRoutes);

module.exports = app;