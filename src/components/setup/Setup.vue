<template>
    <dl class="Setup">
        <Voice v-if="setup.voice !== 'Unknown'" v-bind:voice="setup.voice"/>
        <div class="attribute">
            <dt v-if="setup.saxophones && setup.saxophones.length">Saxophone</dt>
            <Saxophone v-for="saxophone in setup.saxophones" v-bind:saxophone="saxophone" v-bind:key="saxophone.id"/>
        </div>
        <div class="attribute">
            <dt v-if="setup.mouthpieces && setup.mouthpieces.length">Mouthpiece</dt>
            <Mouthpiece v-for="mouthpiece in setup.mouthpieces" v-bind:mouthpiece="mouthpiece" v-bind:key="mouthpiece.id"/>

        </div>
        <div class="attribute">
            <dt v-if="setup.reeds && setup.reeds.length">Reed</dt>
            <Reed v-for="reed in setup.reeds" v-bind:reed="reed" v-bind:key="reed.id"/>
        </div>
    </dl>
</template>

<script>
import Voice from './Voice.vue';
import Saxophone from './Saxophone.vue';
import Mouthpiece from './Mouthpiece.vue';
import Reed from './Reed.vue';
export default {
  name: 'Setup',
  props: { setup: Object },
  components: { Voice, Saxophone, Mouthpiece, Reed }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
dt {
  font-weight: bold;
  display: block;
}
dd {
  margin-inline-start: 0px;
}

.attribute {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-transform: capitalize;
}
</style>
