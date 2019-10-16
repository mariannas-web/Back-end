const db = require('../data/dbConfig')
const UserFavs = require('./userFavs-model')

module.exports = {
    add,
    find,
    findBy,
    findByUsername,
    findById,
}

function find(){
    return db('user').select('id', 'username')
}

function findBy(user){
    return db('user').where(user)
}

function findByUsername(username){
    return findBy({username}).first()
}

function add(user){
    return db('user')
      .insert(user, 'id')
      .then(([id]) => findById(id))
}

function findById(id){
    return db('user').where({id}).first()
    .then(user => {
        return UserFavs.getByUserId(id)
          .then(userFavs => {
              user.userFavs = userFavs
              return user
          })
    })
}

