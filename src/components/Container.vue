<template>
  <div :class="$style['container']">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container"
};
</script>

<style lang="scss" module>
@import "../style/lib/mixins";

.container {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  @include respond-to("smaller") {
    margin: 0 auto;
    width: $breakpoint-smaller;
  }

  @include respond-to("small") {
    width: $breakpoint-small;
  }

  @include respond-to("medium") {
    width: $breakpoint-medium;
  }

  @include respond-to("large") {
    width: $breakpoint-large;
  }
}
</style>
