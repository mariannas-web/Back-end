const db = require('../data/dbConfig')

module.exports = {
    add,
    find,
    findBy,
    findById
}

function find(){
    return db('user').select('id', 'username')
}

function findBy(user){
    return db('user').where(user)
}

async function add(user){
    const [id] = await db('user').insert(user)

    return findById(id)
}

function findById(id){
    return db('user').where({id}).first()
}