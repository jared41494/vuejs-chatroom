<template>
  <div class="messages-container">
    <h3>Messages <span class="count">({{ count }})</span></h3>
    <div class="panel message-panel">
      <div class="message" v-for="(msg, index) in messages"  :key="index">
        [{{ msg.username }}] : {{ msg.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Messages',
  props: {
    messages: Array
  },
  computed: {
    count () {
      return this.messages.length
    }
  }
}
</script>

<style scoped>

</style>
