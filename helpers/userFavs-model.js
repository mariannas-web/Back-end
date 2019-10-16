const db = require('../data/dbConfig.js')

module.exports = {
    get, 
    add,
    getById,
    getByUserId
}

function get(){
    return db('userFavs')
    .select([
        'userFavs.id', 
        'userFavs.favNewsPub', 
        'userFavs.favGenre', 
        'userFavs.userPub',
        'user.username AS user.username',
        //'user.email AS user.email'
    ])
    .join('user', 'user.id', 'userFavs.user_id')
}

function add(user){
    return db('userFavs')
      .insert(user, 'id')
      .then(([id]) => getById(id))
}

function getById(id){
    return get().where({'userFavs.id': id}).first()
}

function getByUserId(id){
    return get().where({'userFavs.user_id': id })
}
