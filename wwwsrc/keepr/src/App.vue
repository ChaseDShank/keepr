<template>
  <div id="app">
     <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar,
  },
  mounted() {
    this.$store.dispatch('authenticate')
  },
  computed: {
    user(){
      return this.$store.state.user
    }
  }
}
</script>
<style>
body{
  font-family: 'Quattrocento Sans', sans-serif;
}
</style>
