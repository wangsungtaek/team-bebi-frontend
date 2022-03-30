<template>
  <v-container class="lighten-5">
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <v-card class="pa-2" tile height="400">
          <h3 class="rounded-lg">N O W</h3>
          <p>2022.03 - 2022.05</p>
          <ul>
            <li>
              <b
                >"META BUNNY" 세계관 창궐
                <span class="rounded-lg completed">COMPLETED</span></b
              >
              <p>NFT에 등장한 귀여운 신인 META BUNNY!</p>
            </li>
            <li>
              <b>Web Site 개발<span class="rounded-lg">진행중</span></b>
              <p>META BUNNY 웹 사이트 개발</p>
            </li>
          </ul>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="pa-2 colorR" tile height="400">
          <h3 class="rounded-lg">N E X T</h3>
          <p>2022.06 ~ 2022.08</p>
          <ul>
            <li>
              <b>"META BUNNY"와 친구들!</b>
              <p>BUNNY의 새로운 친구들을 만나보세요!</p>
            </li>
            <li>
              <b>"Project Babi"와 동료들! </b>
              <p>META BUNNY를 함께 만들어가실 동료를 구해요!</p>
            </li>
          </ul>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="pa-2 colorY" tile height="400">
          <h3 class="rounded-lg">L A T E R</h3>
          <p>2022.08 ~</p>
          <ul>
            <li>
              <b>"META BUNNY" 홍보&마케팅</b>
              <p>META BUNNY가 여러분께 찾아갈게요!</p>
            </li>
          </ul>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },

  watch: {},

  methods: {},
};
</script>

<style scoped>
.container {
  padding-top: 70px;
}
.container .v-card {
  background: rgb(233, 230, 223);
}

.v-card h3 {
  font-size: 1.4em;
  padding: 10px;
  margin: 10px;
  background: rgb(100, 197, 184);
  color: #fff;
  text-align: center;
}

ul span.completed {
  background: rgb(123, 126, 133);
}
.v-card.colorR h3,
.v-card.colorR ul span.completed {
  background: rgb(216, 125, 109);
}

.v-card.colorR > p {
  color: rgb(216, 125, 109);
}

.v-card.colorY h3,
.v-card.colorY ul span.completed {
  background: rgb(218, 199, 119);
}

.v-card.colorY > p {
  color: rgb(218, 199, 119);
}

.v-card > p {
  padding: 5px 10px;
  margin: 10px;
  font-size: 1em;
  color: rgb(100, 197, 184);
  font-weight: 600;
  text-align: center;
  background: #fff;
}

ul {
  list-style: inside;
}

ul li {
  font-size: 0.8em;
  margin-top: 30px;
}

ul span {
  background: rgb(22, 35, 71);
  color: #fff;
  font-size: 0.6em;
  padding: 2px 5px;
  margin-left: 3px;
}
</style>
