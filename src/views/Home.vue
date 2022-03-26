<template>
    <div>
        <TopBar/>
        <Drawer />
        <MainArea />
    </div>
</template>

<script>
import TopBar from '../components/common/TopBar.vue'
import Drawer from '../components/common/Drawer.vue'
import MainArea from '../components/MainArea.vue'


export default {
  components: {
    TopBar,
    Drawer,
    MainArea
  }
}
</script>