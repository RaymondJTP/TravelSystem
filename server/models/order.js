'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Customer, {foreignKey : 'CustomerId'})
    }
  };
  Order.init({
    OrderId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    OrderNumber: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    TotalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
    tableName: "Order"
  });
  return Order;
};