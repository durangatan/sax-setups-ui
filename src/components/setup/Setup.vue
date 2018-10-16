<template>
    <dl class="Setup">
        <Voice v-if="setup.voice" v-bind:voice="setup.voice"/>
        <div class="attribute">
            <dt v-if="setup.saxophone">Saxophone</dt>
            <dd v-if="setup.saxophone">{{setup.saxophone}}</dd>
        </div>
        <div class="attribute">
            <dt v-if="setup.mouthpiece">Mouthpiece</dt>
            <dd v-if="setup.mouthpiece">{{setup.mouthpiece}}</dd>
        </div>
        <div class="attribute">
            <dt v-if="setup.reed || setup.reeds">Reed</dt>
            <dd v-if="setup.reed || setup.reeds">{{setup.reed||setup.reeds}}</dd>
        </div>
                <div class="attribute">
            <dt v-if="setup.misc || setup.miscs">Misc</dt>
            <dd v-if="setup.misc || setup.miscs">{{setup.misc||setup.reeds}}</dd>
        </div>
    </dl>
</template>

<script>
import Voice from "./Voice.vue";
export default {
  name: "Setup",
  props: { setup: Object },
  components: { Voice }
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
