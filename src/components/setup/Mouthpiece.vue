<template>
    <dd>{{mouthpiece.year||''}} {{mouthpiece.material||''}} {{mouthpiece.finish||''}} {{mouthpiece.make||''}} {{mouthpiece.model||''}} {{mouthpiece.tipOpening}}</dd>
</template>

<script>
export default {
  name: 'Mouthpiece',
  props: { mouthpiece: Object }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
