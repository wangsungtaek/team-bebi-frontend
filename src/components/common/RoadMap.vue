<template>
  <div class="container">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <template v-for="n in steps">
          <v-stepper-step :key="`${n}-step`" :step="n" editable>
            Step {{ n }}
          </v-stepper-step>

          <v-divider v-if="n !== steps" :key="n"></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n">
          {{ textItem[n - 1] }}
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
      steps: 6,
      textItem: [
        "Holders with more than 15 Bunny after minting will receive an airdrop 'Limited Edition NFT'.",
        "There will be an official billboard in Seoul to celebrate Bunny NFT is sold out!",
        "Buy lands in the metaverse such as Sandbox, Decentraland, Cryptovoxels.",
        "Youtube channel Bunny will begin.",
        "Go directly to Uganda or Rwanda in Africa to support Bunnys in trouble. (Three Bunny NFT holders will be eligible for the trip.)",
        "We will hold a New Year's Eve party in the metaverse of Cryptovoxels.",
      ],
    };
  },

  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
  },

  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },
  },
};
</script>

<style scope>
.container {
  padding-top: 70px;
}
</style>