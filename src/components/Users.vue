<template>
  <div class="users-container">
    <h3>Users <span class="count">({{ count }})</span></h3>
    <div class="panel users-panel">
      <div class="user" v-for="(user, index) in users" :key="index">
        {{ user }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Users',
  props: ['users'],
  computed: {
    count () {
      return this.users.length
    }
  }
}
</script>

<style scoped>

</style>
