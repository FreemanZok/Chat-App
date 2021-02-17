var app = require("express")();
var server = require("http").Server(app);

var io = require("socket.io")(server);
server.listen(3000);

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
  console.log("hello ali zoka" );
});

io.on("connection", function (socket) {
  socket.on("chat.message", function (message) {

    console.log("ya zahra" );
    io.emit("chat.message", message)
    
  });

  socket.on("disconnected", function(){
    io.emit("chat.message", "User Disconnect")

  })

  console.log("socket is connected")
});


