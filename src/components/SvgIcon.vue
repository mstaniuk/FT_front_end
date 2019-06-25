<template>
  <div
    :class="[$style['svg-icon'], $style['svg-icon--fill-' + fill]]"
    :style="{
      width: size[0] + 'px',
      height: size[1] + 'px'
    }"
    v-bind="$props"
    v-html="content"
  ></div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      content: null
    };
  },
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Array,
      default: () => [12, 12]
    },
    fill: {
      type: String,
      default: "gray-light"
    }
  },
  async created() {
    const test = await import("./../assets/svg/" + this.name + ".svg");
    if (test.default) {
      this.content = test.default;
    }
  }
};
</script>

<style lang="scss" module>
@import "../style/lib/mixins";
@import "../style/lib/colors";

.svg-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }

  &--fill-gray-light {
    fill: $color-gray-light;
  }

  &--fill-gray-dark {
    fill: $color-gray-dark;
  }
}
</style>
