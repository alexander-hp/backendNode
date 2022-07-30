const express = require('express');
const message = require('../components/message/network');
const ejemplo = require('../components/ejemplo/network');

const routes = function (server) {
  server.use('/message', message);
  server.use('/ejemplo', ejemplo);
};

module.exports = routes;
