<template>
    <div v-bind:class="{ spin: players.length < 1 }">🎷</div>
</template>

<script>
export default {
  name: 'Spinner',
  props: { players: Array }
};
</script>

<style scoped lang="scss">
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.spin {
  animation: spin 1s infinite;
}
</style>
