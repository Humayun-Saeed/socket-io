const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var name;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index2.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.id=name
io.emit('new user','a new user is connnected',name)

    //console.log("a new user is connected");
    socket.on('chat message', (msg,sockets) => {
      socket.broadcast.emit('chat message', msg,socket.id);
      
    
socket.on('disconnect',()=>{
     io.emit('b','user disconnects')
 })

})
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});