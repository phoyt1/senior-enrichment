'use strict'
const router = require('express').Router()
const models = require('../../db/models')

const Campus = models.Campus;
module.exports = router;

router.get('/',(req, res, next) => {
  console.log("SERVER ROUTE!!!!!!")
  Campus.findAll()
    .then((allCampuses) => {res.send(allCampuses)})
    .catch(next);
})

router.get('/:id',(req, res, next) => {
  Campus.findById(req.params.id)
    .then((foundCampus) => {res.send(foundCampus)})
    .catch(next);
})

var data = {
  name: 'Test Campus',
  image: 'test image'
}

router.post('/',(req, res, next) => {
  Campus.create(data)
    .then((created) => {res.status(201).send(created)})
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
    .then((foundCampus) => {
      if(!foundCampus) return res.status(500).send();

      return foundCampus.update({
        name: req.body.name || foundCampus.name,
        image: req.body.image || foundCampus.image
        }, {
          returning: true
        })
    })
    .then((updated) => {res.send(`Updated to ${updated.name}`)})
    .catch(next)
})

router.delete('/:id',(req, res, next) => {
  Campus.destroy({where: { id: req.params.id}})
    .then((deleted)=>{res.send(`Deleted ${deleted} records`)})
    .catch(next);
})

