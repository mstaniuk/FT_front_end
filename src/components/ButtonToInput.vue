<template>
  <button
    :class="[$style['b2i'], $style['b2i--button']]"
    v-if="!activated"
    @click="toggle"
  >
    <slot />
  </button>
  <div :class="[$style['b2i'], $style['b2i--active']]" v-else>
    <input
      :class="$style['b2i__input']"
      type="text"
      :value="value"
      @keydown="onKeydown"
      ref="input"
    />
    <button @click="toggle" :class="$style['b2i__cancel']">x</button>
  </div>
</template>

<script>
export default {
  name: "ButtonToInput",
  data() {
    return {
      activated: false,
      oldValue: ""
    };
  },
  props: {
    value: {
      type: String
    }
  },
  methods: {
    onKeydown(e) {
      this.$emit("keydown", e.target.value);
    },
    toggle() {
      this.activated = !this.activated;

      if (this.activated) {
        this.oldValue = this.value;

        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      } else {
        this.$emit("keydown", this.oldValue);
        this.oldValue = "";
      }
    }
  }
};
</script>

<style lang="scss" module>
@import "../style/lib/mixins";
@import "../style/lib/colors";

.b2i {
  display: block;
  width: 100%;

  &--button {
    padding: 16px;
    border: 1px solid $color-gray-dark;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &--active {
    display: flex;
  }

  &__input {
    flex: 1 1 auto;
    width: 100%;
    padding: 14px;
    border: 1px solid $color-gray-dark;
  }

  &__cancel {
    flex: 0 0 auto;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: 1px solid $color-gray-dark;
    border-left: none;
  }
}
</style>
