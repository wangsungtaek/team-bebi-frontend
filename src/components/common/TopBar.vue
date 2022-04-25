<template>
  <v-app-bar app flat class="colorP">
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
      color="white"
    />

    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-img
          :src="require('@/assets/images/logo.png')"
          class="mr-5"
          contain
          height="50"
          width="50"
          @click="$vuetify.goTo(0)"
        />

        <v-btn
          v-for="(link, i) in links"
          :key="i"
          v-bind="link"
          class="hidden-sm-and-down"
          text
          @click="onClick($event, link)"
          color="white"
        >
          {{ link.title }}
        </v-btn>
        <v-spacer />

        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark v-bind="attrs" v-on="on" fab small icon>
                <v-icon color="white">mdi-web</v-icon>
              </v-btn>
            </template>
            <v-list width="150" height="300" justify="center" color="">
              <v-list-item
                v-for="(community, i) in communities"
                :key="i"
                class=""
              >
                <a href="#">
                  <v-row
                    align="center"
                    justify="center"
                    class="white--text pa-3"
                  >
                    <img width="25" :src="community.link" />
                    <span class="pl-3">{{ community.title }}</span>
                  </v-row>
                </a>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
// Utilities
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TopBar",
  data() {
    return {
      communities: [
        { title: "GitHub", link: require("@/assets/images/icon_github.png") },
        { title: "Kakao", link: require("@/assets/images/icon_kakao.png") },
        { title: "Discord", link: require("@/assets/images/icon_discord.png") },
        { title: "Twitter", link: require("@/assets/images/icon_twitter.png") },
        {
          title: "Instagram",
          link: require("@/assets/images/icon_instagram.png"),
        },
        { title: "Youtube", link: require("@/assets/images/icon_youtube.png") },
      ],
    };
  },
  computed: {
    ...mapGetters(["links"]),
  },

  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();

      if (item.to || !item.href) return;

      this.$vuetify.goTo(item.href.endsWith("!") ? 0 : item.href);
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.colorP.theme--light.v-app-bar.v-toolbar.v-sheet {
  background: rgb(77, 76, 76);
}

.v-sheet.v-list:not(.v-sheet--outlined) {
  background: rgba(139, 92, 92, 0.671);
}
</style>
