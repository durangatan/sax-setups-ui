<template>
  <main class="player-cards">
    <PlayerCard 
      v-for="player in players" 
      v-bind:key="player.name"
      v-bind:firstName="player.firstName"
      v-bind:lastName="player.lastName"
      v-bind:setups="player.setups"
    />
</main>
</template>

<script>
import PlayerCard from "./PlayerCard.vue";
export default {
  name: "PlayerCards",
  props: {
    players: Array
  },
  components: {
    PlayerCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.player-cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
