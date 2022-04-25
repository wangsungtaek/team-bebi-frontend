<template>
  <v-container class="">
    <TopBar class="mb-10"/>
    <Drawer class="mb-10" />
    <MainArea class="mb-10" />
    <NFT class="mb-10" />
    <RoadMap class="mb-10" />
    <TeamArea />
  </v-container>
</template>

<script>
import TopBar from '../components/common/TopBar.vue'
import Drawer from '../components/common/Drawer.vue'
import MainArea from '../components/MainArea.vue'
import RoadMap from '../components/RoadMap.vue'
import NFT from '../components/NFT.vue'
import TeamArea from '../components/TeamArea.vue'

export default {
  components: {
    TopBar,
    Drawer,
    MainArea,
    RoadMap,
    NFT,
    TeamArea
  }
}
</script>
<style scoped>

</style>