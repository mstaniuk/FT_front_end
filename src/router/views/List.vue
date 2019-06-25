<template>
  <MainTemplate title="User list">
    <Pane>
      <section>
        <header>
          <input type="text" />
          <button>add</button>
        </header>
        <main>
          list <span v-if="inProgress">Loading ...</span>
          <div v-for="user in userList" :key="user.id">
            {{ getFullName(user.id) }}
          </div>
        </main>
      </section>
    </Pane>
    <footer>
      <Pagination
        :pagesCount="pagesCount"
        :currentPage="currentPage"
        url="/list"
      />
    </footer>
  </MainTemplate>
</template>

<script>
import MainTemplate from "@/router/layout/main.vue";
import Pane from "@/components/Pane";
import Pagination from "@/components/Pagination";
import { GET_USER_FULL_NAME } from "@/store/user/getters";
import { APP_PAGES_COUNT } from "@/store/app/state";
import { USER_LIST } from "@/store/user/state";
import { mapState, mapGetters } from "vuex";
import { API_LIST_REQUEST_IN_PROGRESS } from "@/store/api/state";

export default {
  name: "List",
  components: {
    MainTemplate,
    Pane,
    Pagination
  },
  computed: {
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    ...mapState({
      pagesCount: APP_PAGES_COUNT,
      userList: USER_LIST,
      inProgress: API_LIST_REQUEST_IN_PROGRESS
    }),
    ...mapGetters({
      getFullName: GET_USER_FULL_NAME
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
