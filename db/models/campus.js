'use strict'
var Sequelize = require('sequelize');
var db = require('../index.js');
const Student = db.model('student');
//console.log('DB MODEL',db.model)
module.exports = db.define('campus',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image:{
    type: Sequelize.STRING
  }
}, {
  classMethods: {
    findById(id){
      return this.findOne({
        where: {id: id},
        include:[{
          model: Student
        }]
    })
      .catch(err => console.error(err))
    }
  }
})

