<template>
    <dd>{{reed.make||''}} {{reed.model||''}} {{reed.material}}</dd>
</template>

<script>
export default {
  name: 'Reed',
  props: { reed: Object }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
dt {
  font-weight: bold;
}
dd {
  margin-inline-start: 10px;
}

.attribute {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media only screen and (max-width: 53.125em) {
  dt,
  dd {
    display: block;
  }
  .attribute {
    display: block;
  }
}
</style>
