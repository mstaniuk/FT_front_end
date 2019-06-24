<template>
  <div :class="$style['pane']">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Pane"
};
</script>

<style lang="scss" module>
@import "../style/lib/mixins";
@import "../style/lib/colors";

.pane {
  background-color: $color-light-gray;
  border-radius: 5px;
  box-shadow: 0 4px 6px -5px rgba(0, 0, 0, 0.15);
  padding: 40px 20px;
}
</style>
