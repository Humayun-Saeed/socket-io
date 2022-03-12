const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server, Socket } = require("socket.io");
const io = new Server(server);
var clients=0;

app.get('/', (req, res) => {
  
    res.sendFile(__dirname + '/index.html');
  });

  io.on('connection', (socket) => {
    console.log("a new user is connected");
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
      
    });
  // });
//   io.on('connection', function(socket){
//     console.log("a new user connects");
//     clients++;
//     io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});
//     socket.on('disconnect', function () {
//        clients--;
//        io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});
//     });
//  });
io.on('connection',(socket)=>{
  console.log("a new user is connected: ");
  socket.broadcast.emit('broadcast','hi')
  })

  
  

server.listen(30000,()=>{
    console.log("server is running on the port: ");
})