<template>
  <label
    for="input"
    :class="[
      $style['input'],
      $style['input--' + type],
      {
        [$style['input--has-icon']]: !!icon
      }
    ]"
  >
    <input
      id="input"
      :class="$style['input__field']"
      type="text"
      :placeholder="placeholder"
    />

    <div :class="$style['input__icon']" v-if="icon">
      <SvgIcon :name="icon" :size="[20, 20]" fill="gray-dark" />
    </div>
  </label>
</template>

<script>
import SvgIcon from "./SvgIcon";

export default {
  name: "Input",
  components: {
    SvgIcon
  },
  props: {
    type: {
      type: String,
      default: "fill"
    },
    placeholder: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" module>
@import "../style/lib/mixins";
@import "../style/lib/colors";

.input {
  $root: &;
  background-color: $color-teal;
  width: 100%;

  &--has-icon {
    display: flex;
    justify-content: center;
    align-items: center;

    &__field {
      width: calc(100% - 50px);
    }
  }

  &__field {
    flex: 1 1 auto;
    padding: 13px;
    width: 100%;
    border: none;
    background: transparent;
    font-weight: 700;
  }

  &__icon {
    flex: 0 0 auto;
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
