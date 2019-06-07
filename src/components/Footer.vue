<template>
  <footer>
    <p>
      Copyright &copy; {{ year }} - Jared Rummell - All Right Reserved
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>

</style>
