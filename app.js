const userfunc = require('./lib/user-functions')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const serveStatic = require('serve-static')
const app = express()

let connectedUsers = []
let messages = []

const server = app.listen(process.env.PORT || 5000)
const io = require('socket.io')(server)
app.use(serveStatic(path.join(__dirname, '/dist')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.post('/CheckUser', (req, res) => {
  let username = req.body.username
  let isValid = true

  if (!username.length) {
    isValid = false
  }

  if (userfunc.isUserExists(username, connectedUsers)) {
    isValid = false
  }

  res.send({ isValid: isValid })
})

io.on('connection', (socket) => {
  let username = socket.handshake.query.username
  let notification = { content: username + ' has connected!', audio: 'https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg' }
  connectedUsers = userfunc.addUser(username, connectedUsers)
  io.emit('newuserconnected', notification)
  io.emit('userlistupdate', connectedUsers)

  socket.on('disconnect', () => {
    let username = socket.handshake.query.username
    let notification = { content: username + ' has disconnected', audio: 'https://actions.google.com/sounds/v1/cartoon/cartoon_cowbell.ogg' }
    connectedUsers = userfunc.removeUser(username, connectedUsers)
    messages = userfunc.clearMessages(connectedUsers, messages)
    io.emit('userdisconnected', notification)
    io.emit('userlistupdate', connectedUsers)
  })

  socket.on('sendmessage', (msg) => {
    messages = userfunc.addMessage({ content: msg, username: socket.handshake.query.username }, messages)
    io.emit('messagereceived', messages)
  })
})
