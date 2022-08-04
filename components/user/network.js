const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function (req, res) {
  controller
    .addUser(req.body.name)
    .then((data) => {
      response.succes(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Internal error', 500, e);
    });
});

router.get('/', (req, res) => {
  controller
    .getUserList()
    .then((userList) => {
      response.succes(req, res, userList, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Unexpected error', 500, e);
    });
});

module.exports = router;
