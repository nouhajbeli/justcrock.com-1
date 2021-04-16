const sequelize = require('../config/config');
const { DataTypes,Sequelize } = require('sequelize');

var recipe = sequelize.define('recipe', {
  id: {
      type: DataTypes.BIGINT,
      field: 'id',
      primaryKey: true,
  autoIncrement: true,
  allowNull: false,
  },
  titre: {
  type: DataTypes.STRING(255),

  },
  image: {
  type: DataTypes.STRING(255),

  },
  pdf:{
    type: DataTypes.STRING(255),

  },
  ingredient: {
  type: DataTypes.STRING(255),


 
  },
  description: {
  type: DataTypes.STRING(255),
 

  },
  categorie:{
    type: DataTypes.STRING(255),
   

  }
  },
  
);

module.exports = recipe;
