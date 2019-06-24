<template>
  <div :class="$style['main']">
    <Container>
      <header :class="$style['main__header']">
        <h1 :class="$style['main__title']">
          {{ title }}
        </h1>
      </header>
      <slot />
    </Container>
  </div>
</template>
<script>
import Container from "@/components/Container.vue";

export default {
  name: "Main",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    Container
  }
};
</script>
<style lang="scss" module>
.main {
  margin-top: 100px;

  &__header {
    margin-bottom: 40px;
  }

  &__title {
    margin: 0;
    font-size: 24px;
  }
}
</style>
