const express = require('express');
const message = require('../components/message/network');
const ejemplo = require('../components/ejemplo/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');

const routes = function (server) {
  server.use('/message', message);
  server.use('/ejemplo', ejemplo);
  server.use('/user', user);
  server.use('/chat', chat);
};

module.exports = routes;
