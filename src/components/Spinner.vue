<template>
    <div v-bind:class="{ spin: $apollo.loading > 0 }">🎷</div>
</template>

<script>
export default {
  name: 'Spinner'
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
div {
  .spin {
    animation: spin 1s infinite;
  }
}
</style>
