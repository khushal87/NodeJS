const Product=require('../models/product');

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart',
        pathTitle: 'Your Cart'
    });
};
exports.getCheckout= (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout',
        pathTitle: 'Checkout'
    });
};
exports.getIndex=(req,res,next)=>
{
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            docTitle: 'Shop',
            path: '/',
            pathTitle: 'Shop'
        });
    });
}
exports.getProducts= (req, res, next) => {
        Product.fetchAll((products)=>{
        res.render('shop/product-list', {
            prods: products,
            docTitle: 'All Products',
            path: '/products',
            pathTitle: 'All Products'
        });
    });
};
