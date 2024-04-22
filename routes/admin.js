const path = require('path');
const express = require('express');
const router = express.Router();

// GET route to render the add product form
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

// POST route to handle form submission and add product
router.post('/add-product', (req, res, next) => {
    // Extract product details from the form body
    const { title, quantity } = req.body;

    // Log the product details to the console
    console.log('New Product Added:');
    console.log('Title:', title);
    console.log('Quantity:', quantity);

    // Redirect to the shop page after adding the product
    res.redirect('/'); // Assuming '/' is the route for the shop page
});

module.exports = router;
