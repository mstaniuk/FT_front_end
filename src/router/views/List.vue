<template>
  <MainTemplate title="User list">
    <Pane>
      <section>
        <header>
          Search
        </header>
        <main>
          list
        </main>
      </section>
    </Pane>
    <footer></footer>
  </MainTemplate>
</template>

<script>
import MainTemplate from "@/router/layout/main.vue";
import Pane from "@/components/Pane";

export default {
  name: "Home",
  components: {
    MainTemplate,
    Pane
  }
};
</script>

<style lang="scss" module>
.list-page {
  &__content {
    margin-bottom: 20px;
  }
}
</style>
