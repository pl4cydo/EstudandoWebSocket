const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const socketIo = require('socket.io');
const io = socketIo.listen(server);

server.listen(3000, () => {
    console.log("server on")
})

