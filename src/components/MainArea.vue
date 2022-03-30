<template>
  <v-row class="ma-0 pa-0" id="mainArea">
    <div id="content">
      <div id="coverImg">
        <img src="@/assets/images/mainBunny.png" alt="Main Bunny" />
      </div>

      <div id="coverText">
        The Bunny are unique and randomly generated 3D NFT PFP.<br />
        Not only that, Bunny can make coins and can breed baby Bunny.<br />
        What an aweeeeeesome creature it is!
      </div>
    </div>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
#mainArea {
  height: 100vh;
  width: 100%;
}
#mainArea #content {
  text-align: center;
  /* background-image: url(../assets/images/mainAreaImg5.jpg);
  background-position: center;
  background-size: cover; */
  background: rgb(209, 159, 159);
  max-height: 100vh;
  width: 100%;
  opacity: 0.7;
  text-align: center;
}

#mainArea #content #coverImg {
  /* border: 1px solid rgb(182, 182, 182); */
  border-radius: 100em;
  width: 20em;
  height: 20em;
  background: #fff;
  /* padding: 30px; */
  margin: 24vh auto 40px;
}

#mainArea #content #coverImg img {
  width: 80px;
  margin-top: 6em;
}

#mainArea #content #coverText {
  font-size: 1em;
  text-shadow: 1px 2px 2px grey;
  color: rgba(235, 235, 235, 0.863);
}
</style>
