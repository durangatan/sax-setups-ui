<template>
  <div id="app">
    <Header v-bind:players="players"/>
    <SearchBar v-model="filter" v-on:clear-filter="clearFilter"/>
    <PlayerCards v-bind:players="filteredAndSortedPlayers"/>
    <Footer/>
  </div>
</template>

<script>
import { PlayerCards, PlayerCard } from './components/players';
import Setup from './components/setup/Setup.vue';
import Voice from './components/setup/Voice.vue';
import Footer from './components/page/Footer.vue';
import SearchBar from './components/page/SearchBar.vue';
import Header from './components/page/Header.vue';
import gql from 'graphql-tag';

export default {
  name: 'app',
  apollo: {
    players: gql`
      query {
        players {
          firstName
          lastName
          images {
            full {
              source
            }
            thumb {
              source
            }
          }
          setups {
            voice
            mouthpieces {
              make
              model
              material
              year
              tipOpening
            }
            reeds {
              make
              model
              material
            }
            saxophones {
              make
              model
              material
              finish
              year
              serial
            }
          }
        }
      }
    `
  },
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
      players: [],
      filter: '',
      sortBy: 'lastName'
    };
  },
  methods: {
    clearFilter: function() {
      this.filter = '';
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
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100vw;
}
</style>
