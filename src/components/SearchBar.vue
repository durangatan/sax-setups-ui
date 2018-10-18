<template>
    <div class="search">
        <input type="text" 
          v-bind:value="value"      
          v-on:input="$emit('input', $event.target.value)">
        <button v-on:click="$emit('clear-filter')">ⓧ</button>
    </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    value: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    font-size: 24px;
    z-index: 10;
    width: 80%;
  }
  button {
    padding: 9px;
    background: transparent;
    border: none;
    margin-left: -32px;
    z-index: 12;
    cursor: pointer;
  }
}
</style>
