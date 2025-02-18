const db = require('../../data/dbConfig')

function getAll() {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.*', 'p.project_name', 'p.project_description')
}

async function create(task) {
  const [id] = await db('tasks').insert(task)
  return db('tasks').where('task_id', id).first()
}

module.exports = {
  getAll,
  create,
}