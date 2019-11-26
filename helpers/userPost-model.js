const db = require('../data/dbConfig.js')

module.exports = {
    get, 
    add,
    getById,
    getByUserId
}

function get(){
    return db('userPost')
    .select([
        'userPost.id', 
        'userPost.title', 
        'userPost.teaser', 
        'userPost.link',
        'userPost.youTubeVideo',
        'userPost.content',
        'userPost.genre',
        'userPost.date',
        'user.username AS user.username',
        'user.email AS user.email'
    ])
    .join('user', 'user.id', 'userPost.user_id')
}

function add(user){
    return db('userPost')
      .insert(user, 'id')
      .then(([id]) => getById(id))
}

function getById(id){
    return get().where({'userPost.id': id}).first()
}

function getByUserId(id){
    return get().where({'userPost.user_id': id })
}
