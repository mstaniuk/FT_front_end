<template>
  <section :class="$style['user-list']">
    <header :class="$style['user-list__header']">
      <UserListToolbar />
    </header>
    <main :class="$style['user-list__content']">
      <UserListTable />
    </main>
  </section>
</template>

<script>
import UserListTable from "./UserListTable";
import UserListToolbar from "./UserListToolbar";

export default {
  name: "UserList",
  components: {
    UserListTable,
    UserListToolbar
  }
};
</script>

<style lang="scss" module>
@import "../style/lib/mixins";
@import "../style/lib/colors";

.user-list {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
  }
}
</style>
