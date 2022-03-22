<template>
  <v-app>
    <TopBar/>
    <Drawer />
  </v-app>
</template>

<script>
import TopBar from './components/common/TopBar.vue'
import Drawer from './components/common/Drawer.vue'

export default {
  components: {
    TopBar,
    Drawer
  }
}
</script>

<style>

</style>