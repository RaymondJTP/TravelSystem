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
    Email: {
      type : DataTypes.STRING,
      allowNull : false,
      unique:true,
      validate: {
        notNull : {msg : "Email cant be empty"},
        notEmpty : {msg : "Email cant be empty"},
        isEmail : {msg : "Email must be in email format"}
      }
    },
    Phone: DataTypes.STRING,
    Address: DataTypes.STRING,
    Password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        notNull : {msg : "Password cant be empty"},
        notEmpty : {msg : "Password cant be empty"}
      }
    },
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