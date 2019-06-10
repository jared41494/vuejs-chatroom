<template>
  <div class="enter-message-container">

    <b-form @submit.prevent="SendMessage">
      <b-form-group
        id="input-group-1"
        label="Message:"
        label-for="input-1"
        label-sr-only="true"
      >
        <b-form-input
          id="input-1"
          v-model="message"
          type="text"
          required
          placeholder="Enter Message"
        ></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>
<script>
export default {
  name: 'EnterMessage',
  props: ['socket'],
  data () {
    return {
      message: ''
    }
  },
  methods: {
    SendMessage () {
      this.socket.emit('sendmessage', this.message)
      this.message = ''
    }
  }
}
</script>

<style scoped>

</style>
