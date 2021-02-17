var app = require("express")();
var server = require("http").Server(app);

var io = require("socket.io")(server);
server.listen(3000);

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
  console.log("hello ali zoka" );
});

io.on("connection", function (socket) {
  socket.on("msg", function (message) {

    console.log("ya zahra" );

    io.emit("msg", message)
    
  });
  console.log("socket is connected")
});


