<template>
  <div id="app">
    <h1>🎷Sax Setups🎷</h1>
    <PlayerCard 
      v-for="player in players" 
      v-bind:key="player.name"
      v-bind:name="player.name"
      v-bind:setups="player.setups"
    />
    <Footer/>
  </div>
</template>

<script>
import PlayerCard from "./components/PlayerCard.vue";
import SetupList from "./components/SetupList.vue";
import Footer from "./components/Footer.vue";
import data from "../data.json";
export default {
  name: "app",
  components: {
    PlayerCard,
    SetupList,
    Footer
  },
  data: function() {
    return data;
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
