const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('jcud4438_jcdb', 'jcud4438_nouha', 'Nouhe123456@', {
  host: 'meuh.o2switch.net',
  dialect: 'mysql',

});

module.exports = sequelize;