<template>
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
</template>

<script>
export default {
  name: "UserList",
  props: {
    inProgress: {
      type: Boolean,
      default: false
    },
    userList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" module>
@import "../style/lib/mixins";
@import "../style/lib/colors";

.pane {
  background-color: $color-gray-light;
  border-radius: 5px;
  box-shadow: 0 4px 6px -5px rgba(0, 0, 0, 0.15);
  padding: 40px 20px;
}
</style>
