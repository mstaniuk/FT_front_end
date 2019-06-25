<template>
  <section :class="$style['user-list']">
    <header :class="$style['user-list__header']">
      <div>
        <input type="text" />
      </div>
      <div>
        <button>add</button>
      </div>
    </header>
    <main>
      <UserListTable />
    </main>
  </section>
</template>

<script>
import UserListTable from "./UserListTable";

export default {
  name: "UserList",
  components: {
    UserListTable
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

  &__actions {
  }
}
</style>
