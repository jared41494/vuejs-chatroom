<template>
  <b-container class="chat-room-container">
    <Notification :content="alertcontent" :audiosource="audiosource" />
    <b-row>
      <b-col>
        <h2>Welcome Back, {{ username }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Messages :messages="messages" />
      </b-col>
      <b-col>
        <Users :users="users" />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <EnterMessage :socket="socket" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Notification from './Notification.vue'
import Messages from './Messages.vue'
import Users from './Users.vue'
import EnterMessage from './EnterMessage.vue'
import io from 'socket.io-client'

export default {
  name: 'ChatRoom',
  components: {
    Notification,
    Messages,
    Users,
    EnterMessage
  },
  props: {
    username: String
  },
  data () {
    return {
      messages: [],
      users: [],
      socket: io('localhost:8080', { 'query': { username: `${this.username}` } }),
      alertcontent: '',
      audiosource: ''
    }
  },
  mounted () {
    this.socket.on('userlistupdate', users => { this.users = users })

    this.socket.on('messagereceived', messages => { this.messages = messages })

    this.socket.on('newuserconnected', notification => {
      this.alertcontent = notification
      this.audiosource = 'https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg'
    })

    this.socket.on('userdisconnected', notification => {
      this.alertcontent = notification
      this.audiosource = 'https://actions.google.com/sounds/v1/cartoon/cartoon_cowbell.ogg'
    })
  },
  methods: {
    setNotification (notification) {
      this.alertcontent = notification
    }
  }
}
</script>

<style scoped>

</style>
