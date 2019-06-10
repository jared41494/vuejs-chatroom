<template>
  <div class="alert-container">
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="info"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      {{ content }}
    </b-alert>
    <!--<audio>
      <source v-bind:src="audiosource" type="audio/mpeg" />
    </audio>-->
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: String,
    audiosource: String
  },
  data () {
    return {
      dismissSec: 15,
      dismissCountDown: 0
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown

      if (!dismissCountDown) {
        this.content = ''
        this.audiosource = ''
      }
    }
  },
  watch: {
    content: function (val) {
      if (val.length) {
        this.dismissCountDown = this.dismissSec
        var audio = new Audio(this.audiosource)
        audio.play()
      } else {
        this.content = ''
        this.audiosource = ''
        this.dismissCountDown = 0
      }
    }
  }

}
</script>

<style scoped>

</style>
