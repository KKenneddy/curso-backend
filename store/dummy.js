const db = {
    "user":[
        {id: '1', name: 'Kennedy'},
        {id: '2', name: 'jean'},
    ]
}

async function list(tabla){
    return db[tabla];
}

async function get(tabla, id){
    let users = await list(tabla);
    return users.find(user => user.id === id);
}

async function upsert(tabla, data){
    db[tabla].push(data);
    return data;
}

async function remove(tabla, id){
    let users = await list(tabla);
    let index = users.findIndex(user => user.id === id);
    db[tabla].splice(index, 1);
    return true;
}

module.exports ={
    list,
    get,
    upsert,
    remove
}