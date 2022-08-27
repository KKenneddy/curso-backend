const db = {
    "user":[
        {id: '1', name: 'Kennedy'},
        {id: '2', name: 'jean'},
    ]
}

async function list(tabla){
    return db[tabla] || [];
}

async function get(tabla, id){
    let users = await list(tabla);
    return users.filter(user => user.id === id )[0] || null;
}

async function upsert(tabla, data){
    if(!db[tabla]){
        db[tabla] = [];
    }
    db[tabla].push(data);
    console.log(db);
}

async function remove(tabla, id){
    let users = await list(tabla);
    let index = users.findIndex(user => user.id === id) || null;
    db[tabla].splice(index, 1);
    return true;
}

async function query(tabla, q){
    let users = await list(tabla);
    let keys = Object.keys(q);
    let key = keys[0];
    return users.filter(item => item[key] === q[key])[0] || null;
}

module.exports ={
    list,
    get,
    upsert,
    remove,
    query
}