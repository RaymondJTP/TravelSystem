'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Detail', {
      DetaiId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PackageId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Package'
          },
          key : 'PackageId'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      OrderId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Order'
          },
          key : 'OrderId'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      qty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Detail');
  }
};