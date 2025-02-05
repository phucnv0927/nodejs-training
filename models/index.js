const Product = require('./product.model');
const User = require('./user.model');

Product.belongsTo(User, { onDelete: 'CASCADE' });

module.exports = {
    Product,
    User
}