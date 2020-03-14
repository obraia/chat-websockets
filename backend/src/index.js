const express = require('express')
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);

let messageId = 0;

io.on('connection', socket => {
    console.log(`Socket conectado ${socket.id}`);

    socket.on('sendMessage', data => {
        data.id = messageId++;
        socket.broadcast.emit('recivedMessage', data);
        console.log(data);
    });
});

server.listen(process.env.PORT || 3333);