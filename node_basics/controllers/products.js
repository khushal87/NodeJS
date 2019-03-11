const products = [];
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        pathTitle: 'Add Product'
    });
};

exports.postAddProducts = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
};

exports.getProducts= (req, res, next) => {
    res.render('shop', {
        prods: products,
        docTitle: 'Shop',
        path: '/',
        pathTitle: 'Shop'
    });
};