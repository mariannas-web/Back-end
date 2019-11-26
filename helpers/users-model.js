const db = require('../data/dbConfig')
const UserPost = require('./userPost-model')

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
        return UserPost.getByUserId(id)
          .then(userPost => {
              user.userPost = userPost
              return user
          })
    })
}



