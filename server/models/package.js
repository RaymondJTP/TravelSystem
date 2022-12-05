'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Package.init({
    PackageId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        notEmpty : {msg : "Name cant be empty"},
        notNull : {msg : "Name cant be empty"}
      }
    },
    Description: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {msg : "Description cant be empty"},
        notNull : {msg : "Description cant be empty"}
      }
    },
    Price: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notEmpty : {msg : "Price cant be empty"},
        notNull : {msg : "Price cant be empty"},
        min :{
          args: 100000,
          msg: "Price cant below 100000"
        },
      }
    },
    Image: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {msg : "Image cant be empty"},
        notNull : {msg : "Image cant be empty"},
      }
    }
  }, {
    sequelize,
    modelName: 'Package',
    tableName: "Package"
  });
  return Package;
};