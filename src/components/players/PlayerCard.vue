<template>
  <div class="player-card">
  <h2>{{ firstName }} {{lastName}}</h2>
  <v-lazy-image v-if="images && images.length" v-bind:src="images[0].full && images[0].full.source" v-bind:src-placeholder="images.thumb && images.thumb.source"/>
  <Setup v-for="setup in setups" v-bind:key="setup.saxophone + String(Math.random())" v-bind:setup="setup"/>
  </div>
</template>

<script>
import Setup from '../setup/Setup.vue';
import VLazyImage from 'v-lazy-image';

export default {
  name: 'PlayerCard',
  props: {
    firstName: String,
    lastName: String,
    images: Array,
    setups: Array
  },
  components: {
    Setup,
    VLazyImage
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.player-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 50px 0;
  padding-bottom: 25px;
  box-sizing: border-box;
  @media only screen and (max-width: 53.125em) {
    width: 100%;
  }
}
h2 {
  padding: 10px 20px;
  display: inline-block;
  color: goldenrod;
  border: 1px solid goldenrod;
}
.v-lazy-image {
  width: 400px;
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  width: 400px;
  filter: blur(0);
}
</style>
