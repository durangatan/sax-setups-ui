<template>
    <dd>{{saxophone.year||''}} {{saxophone.material||''}} {{saxophone.finish||''}} {{saxophone.make||''}} {{saxophone.model||''}} {{saxophone.serial? `#${saxophone.serial}` : ''}}</dd>
</template>

<script>
export default {
  name: 'Saxophone',
  props: { saxophone: Object }
};
</script>

