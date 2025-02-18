const db = require('../../data/dbConfig')

function getAll() {
  return db('resources').select('*')
}

async function create(resource) {
  const [id] = await db('resources').insert(resource)
  return db('resources').where('resource_id', id).first()
}

module.exports = {
  getAll,
  create,
}
