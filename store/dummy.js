const db = {
    'user':[
        {id: 1, name:'Kennedy'},
    ],
};

function list(tabla){
    return db[tabla];
}

function get(tabla, id){
    let col = list(tabla);
    return col.filter(item => item.id===id) [0] || null;
}

function upsert(tabla, data){
    db[colletion].push(data);
}

function remove(tabla, id){
    return true;
}

module.exports ={
    list,
    get,
    upsert,
    remove
}