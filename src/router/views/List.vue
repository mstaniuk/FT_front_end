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
import { mapState } from "vuex";

import MainTemplate from "@/router/layout/main.vue";
import Pane from "@/components/Pane";
import Pagination from "@/components/Pagination";
import UserList from "@/components/UserList";

import { FETCH_API_LIST } from "@/store/api/actions";
import { APP_PAGES_COUNT } from "@/store/app/state";

export default {
  name: "List",
  components: {
    MainTemplate,
    Pane,
    Pagination,
    UserList
  },
  watch: {
    ["$route.params.page"]() {
      this.fetchListData();
    }
  },
  methods: {
    fetchListData() {
      this.$store.dispatch(FETCH_API_LIST, { page: this.currentPage });
    }
  },
  computed: {
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    ...mapState({
      pagesCount: APP_PAGES_COUNT
    })
  },
  created() {
    this.fetchListData();
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
