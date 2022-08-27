const express = require('express');
const router = express.Router();

const response = require('../../../network/response');
const Controller = require('./index');

//Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);
router.delete('/:id', remove);

//Internal functions
function list(req, res) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
};

function get(req, res) {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
};

function upsert(req, res) {
    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
}

function remove (req, res) {
    Controller.remove(req.params.id)
        .then((user)=>{
            response.success(req, res, user, 200);
        })
        .catch((err)=>{
            response.error(req, res, err.message, 500);
        });
}

module.exports = router;