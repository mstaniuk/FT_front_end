<template>
  <button
    :class="[
      $style['button'],
      $style['button--' + type],
      $style['button--' + radius]
    ]"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "fill"
    },
    radius: {
      type: String,
      default: "pill"
    }
  }
};
</script>

<style lang="scss" module>
@import "../style/lib/mixins";
@import "../style/lib/colors";

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  border-radius: 0;
  padding: 0;

  &--fill {
    transition: background-color 250ms ease-in-out;
    padding: 15px 22px;
    background-color: $color-green;
    color: $color-gray-light;
    font-weight: 700;

    &:hover,
    &:focus,
    &:active {
      background-color: darken($color-green, 10);
    }
  }

  &--pill {
    border-radius: 100px;
  }
}
</style>
