<template>
  <header>
    <b-jumbotron :header="title" :lead="desc" />
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'Vue Chatroom Prototype',
      desc: 'Chatroom utilizes Node.js, Express, Vue.js and Socket.io'
    }
  }
}
</script>

<style scoped>

</style>
