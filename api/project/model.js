const db = require('../../data/dbConfig')

function getAll() {
  return db('projects').select('*')
}

async function create(project) {
  const [id] = await db('projects').insert(project)
  return db('projects').where('project_id', id).first()
}

module.exports = {
  getAll,
  create,
}
