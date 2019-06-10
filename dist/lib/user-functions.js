exports.broadcastUsers = (io, connectedUsers) => {
  io.emit('userlistupdate', connectedUsers)
}

exports.removeUser = (username, connectedUsers) => {
  return connectedUsers.filter(val => val !== username)
}
