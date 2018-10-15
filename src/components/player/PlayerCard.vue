<template>
  <div class="player-card">
  <h2>{{ firstName }} {{lastName}}</h2>
  <Setup v-for="setup in setups" v-bind:key="setup.saxophone + String(Math.random())" v-bind:setup="setup"/>
  </div>
</template>

<script>
import Setup from "../setup/Setup.vue";
export default {
  name: "PlayerCard",
  props: {
    firstName: String,
    lastName: String,
    setups: Array
  },
  components: {
    Setup
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.player-card {
  width: 50%;
  margin: 50px 0;
  padding-bottom: 25px;
  box-sizing: border-box;
  /* border-bottom: 1px solid gray; */
  /* &:nth-child(odd) {
    border-right: 1px solid gray;
  } */
}
h2 {
  padding: 10px 20px;
  display: inline-block;
  color: goldenrod;
  border: 1px solid goldenrod;
}
</style>
