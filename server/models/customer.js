'use strict';
const {
  Model
} = require('sequelize');

const {hashPassword} = require('../middlewares/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Customer.init({
    CustomerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: DataTypes.STRING,
    Email: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Address: DataTypes.STRING,
    Password: DataTypes.STRING,
    TypeUser : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: "Customer",
    hooks : {
      beforeCreate : (user,options) => {
        // console.log(user);
        user.Password = hashPassword(user.Password)
      }
    }
  });
  return Customer;
};