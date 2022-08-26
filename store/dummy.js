const db = {
    'user':[
        {id: '1', name: 'Kennedy'},
        {id: '2', name: 'Patricia'}
    ]
}

async function list(tabla){
    return db[tabla];
}

async function get(tabla, id){
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0];
}

async function upsert(tabla, data){
    db[tabla].push(data);
    return data;
}

async function remove(tabla, id){
    return true;
}

module.exports ={
    list,
    get,
    upsert,
    remove
}