'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('submenus', [{
      menuId: 1,
      label: "A1",
      price: 5000,
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }, {
      menuId: 1,
      label: "A2",
      price: 6000,
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }, {
      menuId: 1,
      label: "A3",
      price: 7000,
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }, {
      menuId: 2,
      label: "B1",
      price: 3000,
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }, {
      menuId: 2,
      label: "B2",
      price: 2000,
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }, {
      menuId: 3,
      label: "C1",
      price: 9000,
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }, {
      menuId: 3,
      label: "C2",
      price: 8000,
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('submenus', null, {})
  }
};
