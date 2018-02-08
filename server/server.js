var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)

app.use(express.static(__dirname + '/node_modules'))
app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function (client) {
  console.log('Client connected...')

  client.on('join', function (data) {
    console.log('user has joined', data)
  })

  client.on('new-answer', function (data) {
    console.log('new-answer', data)
    client.emit('new-answer', data)
    client.broadcast.emit('new-answer', data)
  })

})

server.listen(3000) 