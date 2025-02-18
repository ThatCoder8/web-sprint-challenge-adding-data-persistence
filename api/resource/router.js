const router = require('express').Router()
const Resource = require('./model')

router.get('/', async (req, res, next) => {
  try {
    const resources = await Resource.getAll()
    res.json(resources)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const resource = await Resource.create(req.body)
    res.status(201).json(resource)
  } catch (err) {
    next(err)
  }
})

module.exports = router