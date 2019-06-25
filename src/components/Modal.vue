<template>
  <div :class="$style['modal']">
    <section :class="$style['modal__inner']">
      <Pane>
        <header :class="$style['modal__header']">
          <h2 :class="$style['modal__title']">
            {{ title }}
          </h2>
        </header>
        <div :class="$style['modal__content']">
          <slot />
        </div>
        <footer :class="$style['modal__footer']">
          <Button type="none" @click="cancelClick">Cancel</Button>
          <Button @click="acceptClick">Remove</Button>
        </footer>
      </Pane>
    </section>
  </div>
</template>

<script>
import Pane from "./Pane";
import Button from "./Button";

export default {
  name: "Modal",
  components: {
    Pane,
    Button
  },
  props: {
    title: {
      type: String
    }
  },
  methods: {
    cancelClick() {
      this.$emit("onCancel");
    },
    acceptClick() {
      this.$emit("onAccept");
    }
  }
};
</script>

<style lang="scss" module>
@import "../style/lib/mixins";
@import "../style/lib/colors";

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: rgba($color-gray-dark, 0.8);
  justify-content: center;
  align-items: center;

  &__inner {
    min-width: 320px;
  }

  &__header {
    margin-bottom: 40px;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
  }

  &__content {
    margin-bottom: 40px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
