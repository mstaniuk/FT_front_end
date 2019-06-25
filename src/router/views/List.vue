<template>
  <MainTemplate title="User list">
    <Pane>
      <UserList />
    </Pane>
    <footer>
      <Pagination :pagesCount="pagesCount" :currentPage="currentPage" />
    </footer>
  </MainTemplate>
</template>

<script>
import MainTemplate from "@/router/layout/main.vue";
import Pane from "@/components/Pane";
import Pagination from "@/components/Pagination";
import UserList from "@/components/UserList";

import { APP_PAGES_COUNT } from "@/store/app/state";
import { mapState } from "vuex";

export default {
  name: "List",
  components: {
    MainTemplate,
    Pane,
    Pagination,
    UserList
  },
  computed: {
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    ...mapState({
      pagesCount: APP_PAGES_COUNT
    })
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
