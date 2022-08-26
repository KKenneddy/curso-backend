const express = require('express');

const config = require('../config.js');
const user = require('./components/user/network');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// router
app.use('/api/user', user);

app.listen(config.api.PORT, ()=>{
    console.log('Api escuchando en el puerto ', config.api.PORT);
});