'use strict'
const router = require('express').Router()
const models = require('../../db/models')

const Student = models.Student;
const Campus = models.Campus;
module.exports = router;

router.get('/', (req, res, next) => {
  Student.findAll({
    include: [{
      model: Campus
    }]
  })
    .then((allStudents) => {res.send(allStudents)})
    .catch(next);
})

router.get('/:id', (req, res, next) => {
  Student.findOne({
    where: {id: req.params.id},
    include: [{
      model: Campus
    }]
  })
    .then(student=>{
      res.send(student);
    })
    .catch(next)
})
// var data = {
//   name: 'Test Student',
//   email: 'test@test.com'
// }

router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then((created) => {res.status(201).send(created)})
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Student.findById(req.params.id)
    .then((foundStudent) => {
      if(!foundStudent) return res.status(500).send();
      return foundStudent.update({

        name: req.body.name || foundStudent.name,
        email: req.body.email || foundStudent.email,
        campusId: req.body.campusId
        }, {
          returning: true,
        })
    })
    .then((updated) => { res.send(updated) })
    .catch(next)
})

router.delete('/:id',(req, res, next) => {
  Student.destroy({where: { id: req.params.id}})
    .then((deleted)=>{res.status(204).send(`Deleted ${deleted} students`)})
    .catch(next);
})
