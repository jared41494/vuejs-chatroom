exports.isUserExists = (username, connectedUsers) => {
  if (connectedUsers.indexOf(username) !== -1) {
    return true
  }

  return false
}

exports.addUser = (username, connectedUsers) => {
  if (!username) {
    return connectedUsers
  }

  return [...connectedUsers, username]
}

exports.removeUser = (username, connectedUsers) => {
  if (!username) {
    return connectedUsers
  }

  return connectedUsers.filter(val => val !== username)
}

exports.addMessage = (message, messages) => {
  if (!message) {
    return messages
  }

  return [...messages, message]
}

exports.clearMessages = (connectedUsers, messages) => {
  if (!connectedUsers.length) {
    return []
  }

  return messages
}
