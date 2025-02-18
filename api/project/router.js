const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.getAll()
    res.json(projects.map(p => ({
      ...p,
      project_completed: Boolean(p.project_completed)
    })))
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json({
      ...project,
      project_completed: Boolean(project.project_completed)
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router