const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('adminProducts',{
   id:{
      type: Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false ,
      primaryKey:true
   },
      imageUrl:{
         type:Sequelize.STRING,
         allowNull:false
      },
      title:{
        type:Sequelize.STRING,
        allowNull:false
      },
      price:{
         type:Sequelize.DOUBLE,
         allowNull:false
      },
      description:{
         type:Sequelize.STRING,
         allowNull:false
      },
      rating:{
         type: Sequelize.INTEGER,
         allowNull:false
      }
})


module.exports = Product; 