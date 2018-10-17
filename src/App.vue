<template>
  <div id="app">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
import { PlayerCards, PlayerCard } from "./components/players";
import Setup from "./components/setup/Setup.vue";
import Voice from "./components/setup/Voice.vue";
import Footer from "./components/Footer.vue";
import SearchBar from "./components/SearchBar.vue";
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
    SearchBar,
    Footer
  },
  data: function() {
    return {
      players: json.players,
      filter: "",
      sortBy: "lastName"
    };
  },
  methods: {
    clearFilter: function() {
      this.filter = "";
    },
    filterByName: function(players) {
      return players.filter(player =>
        `${player.firstName} ${player.lastName}`.toLowerCase().includes(this.filter.toLowerCase())
      );
    },
    applySort: function(players) {
      return players.sort((a, b) => b[this.sortBy] - a[this.sortBy]);
    }
  },
  computed: {
    filteredAndSortedPlayers: function() {
      const filteredPlayers = this.filterByName(this.players);
      if (this.sortBy) {
        return this.applySort(filteredPlayers);
      }
      return filteredPlayers;
    }
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
