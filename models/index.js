// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {
  foreignKey: '',
  onDelete: '',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: '',
  onDelete: '',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag
  },
  as: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
      model: ProductTag
  },
  as: 'product_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
