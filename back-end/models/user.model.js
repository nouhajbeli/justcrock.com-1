const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');


const User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
    },
    email: {
        type:DataTypes.STRING,
        validate:{
            notEmpty:{
                args:true,
                msg:"Email-id required"
            },
            isEmail:{
                args:true,
                msg:'Valid email-id required'
            }
        },
       unique: { msg: 'Email address already in use!' }
      },
      password: {
        type: DataTypes.STRING,
      },
      
      createdAt: {
          type: DataTypes.DATE,
          defaultValue: sequelize.fn('now'),

      },
      updatedAt: {
          type: DataTypes.DATE,
          defaultValue: sequelize.fn('now'),

      },

  }
    
       
       
        
    );
 
  


User.beforeCreate((user, options) => {

    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
});



module.exports = User;
