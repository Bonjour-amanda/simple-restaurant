'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menus', [{
      label: "A",
      price: 20000,
      description: 'mie keriting polos',
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }, {
      label: "B",
      price: 15000,
      description: 'nasi hainam polos',
      createdAt: "2020-01-02",
      updatedAt: "2020-02-02"
    }, {
      label: "C",
      price: 17000,
      description: 'mie gendut polos',
      createdAt: "2020-01-02",
      updatedAt: "2020-02-02"
    }])
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('menus', null, {})
  }
};
