const router = require('express').Router()
const Task = require('./model')

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.getAll()
    res.json(tasks.map(t => ({
      ...t,
      task_completed: Boolean(t.task_completed)
    })))
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({
      ...task,
      task_completed: Boolean(task.task_completed)
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router