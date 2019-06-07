<template>
  <div id="app">
    <Header />
    <ChatRoom v-if="username.length" :username="username" />
    <NewUser v-else v-on:loginUser="loginUser" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ChatRoom from './components/ChatRoom.vue'
import NewUser from './components/NewUser.vue'

export default {
  name: 'app',
  data () {
    return {
      username: ''
    }
  },
  components: {
    Header,
    ChatRoom,
    NewUser,
    Footer
  },
  methods: {
    loginUser (newusername) {
      this.username = newusername
    }
  }
}
</script>

<style>

</style>
