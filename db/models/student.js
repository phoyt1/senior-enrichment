'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
//var Campus = Sequelize.import('./campus');
//const Campus = require('./campus');

module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {isEmail: true}}
})


// ,{
//   classMethods: {
//     findById(id){
//       console.log('MODELS',Sequelize.models)
//       var Campus = Sequelize.models.Campus;
//       return
//     }
//   }
// })
