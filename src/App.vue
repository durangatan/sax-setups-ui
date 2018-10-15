<template>
  <div id="app">
    <Header/>
    <PlayerCards v-bind:players="players" />
    <Footer/>
  </div>
</template>

<script>
import { PlayerCards, PlayerCard } from "./components/player";
import Setup from "./components/setup/Setup.vue";
import Voice from "./components/setup/Voice.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import json from "../data.json";
export default {
  name: "app",
  components: {
    PlayerCards,
    PlayerCard,
    Setup,
    Voice,
    Header,
    Footer
  },
  data: function() {
    return {
      players: json.players
    };
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
