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
    <footer>
      <Pagination :pagesCount="4" :currentPage="2" url="/list" />
    </footer>
  </MainTemplate>
</template>

<script>
import MainTemplate from "@/router/layout/main.vue";
import Pane from "@/components/Pane";
import Pagination from "@/components/Pagination";

export default {
  name: "Home",
  components: {
    MainTemplate,
    Pane,
    Pagination
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
