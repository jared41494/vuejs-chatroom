<template>
  <b-container class="new-user-container">
    <b-row>
      <b-col align-self="center">
        <h2>Chatroom Login</h2>
        <b-form @submit.prevent="loginUser">
          <b-form-group
            id="input-group-1"
            label="Username:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="newusername"
              type="text"
              required
              placeholder="Enter Username"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Continue</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'NewUser',
  data () {
    return {
      newusername: ''
    }
  },
  methods: {
    loginUser () {
      if (this.newusername.length > 8) {
        this.$emit('loginUser', this.newusername)
      }
    }
  }
}
</script>

<style scoped>

</style>
