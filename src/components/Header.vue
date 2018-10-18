<template>
  <header>
      <div>🎷</div>
    <h1>Sax Setups</h1>
  </header>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
header {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  flex-direction: column;

  h1 {
    margin: 0;
    @media only screen and (max-width: 53.125em) {
      font-size: 50px;
    }
  }

  div {
    font-size: 160px;
    margin: 0px;
    padding: 0px;
  }
}
</style>
