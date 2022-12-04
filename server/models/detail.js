'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Detail.belongsTo(models.Package, {foreignKey : 'PackageId'})
      Detail.belongsTo(models.Order, {foreignKey : 'OrderId'})
    }
  };
  Detail.init({
    DetaiId : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PackageId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Detail',
    tableName: "Detail",
  });
  return Detail;
};