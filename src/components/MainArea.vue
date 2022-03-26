<template>
    <v-row class="ma-0 pa-0" id="mainArea">

        <div id="content">
            <div id="coverImg">
                <img src="@/assets/images/mainBunny.png" alt="Main Bunny">
            </div>

            <div id="coverText">
                The Bunny are unique and randomly generated 3D NFT PFP.<br>
                Not only that, Bunny can make coins and can breed baby Bunny.<br>
                What an aweeeeeesome creature it is!
            </div>
        </div>

    </v-row>
</template>

<script>
export default {

}
</script>

<style scoped>
#mainArea {
    background-image: url('../assets/images/mainAreaImg5.jpg');
    background-position: center;
    background-size: 100%;
    height: 800px;
    width: 100%;
    opacity: 0.7;
    text-align: center;
}
#mainArea #content {
    position: absolute;
    bottom: 200px;
    right: 30%;
    text-align: center;
}

#mainArea #content #coverImg {
    border: 1px solid rgb(182, 182, 182);
    border-radius: 10px;
    width: 40%;
    padding: 30px;
    margin: auto;
    margin-bottom: 40px;    
}

#mainArea #content #coverImg img {
    width: 80px;
}

#mainArea #content #coverText {
    font-size: 20px;
    text-shadow: 5px 5px 2px gray;
    color: rgba(235, 235, 235, 0.863);
}
</style>