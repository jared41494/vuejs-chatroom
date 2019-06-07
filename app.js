const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const app = express()
app.use(serveStatic(path.join(__dirname, '/dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const server = app.listen(process.env.PORT || 5000, () => {

})

function getConnectedUsers (io, connectedUsers) {
  io.emit('userlistupdate', connectedUsers)
}

let connectedUsers = []
let messages = []
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  let username = socket.handshake.query.username
  connectedUsers.push(username)
  io.emit('newuserconnected', username + ' has connected!')
  getConnectedUsers(io, connectedUsers)

  socket.on('disconnect', () => {
    let username = socket.handshake.query.username
    connectedUsers.splice(connectedUsers.indexOf(username), 1)
    io.emit('userdisconnected', username + ' has disconnected')
    getConnectedUsers(io, connectedUsers)
  })

  socket.on('sendmessage', (msg) => {
    const message = { content: msg, username: socket.handshake.query.username }
    messages.push(message)
    io.emit('messagereceived', messages)
  })
})
