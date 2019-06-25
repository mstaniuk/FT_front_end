<template>
  <section :class="$style['user-list']">
    <header :class="$style['user-list__header']">
      <UserListToolbar />
    </header>
    <main :class="$style['user-list__content']">
      <UserListTable />
    </main>
    <Modal
      v-if="removeId !== null"
      title="Remove Intern"
      @onCancel="onCancel"
      @onAccept="onAccept"
    >
      Are you sure you want to remove intern
      <strong>{{ getFullNameById(removeId) }}</strong
      >?
    </Modal>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

import { SET_USER_REMOVE_ID, REMOVE_USER_BY_ID } from "@/store/user/mutations";
import { USER_REMOVE_ID } from "@/store/user/state";
import { GET_USER_FULL_NAME } from "@/store/user/getters";

import UserListTable from "./UserListTable";
import UserListToolbar from "./UserListToolbar";
import Modal from "./Modal";

export default {
  name: "UserList",
  components: {
    UserListTable,
    UserListToolbar,
    Modal
  },
  computed: {
    ...mapGetters({
      getFullNameById: GET_USER_FULL_NAME
    }),
    ...mapState({
      removeId: USER_REMOVE_ID
    })
  },
  methods: {
    ...mapMutations({
      setRemoveId: SET_USER_REMOVE_ID,
      removeUserById: REMOVE_USER_BY_ID
    }),
    onCancel() {
      this.setRemoveId({ id: null });
    },
    onAccept() {
      this.removeUserById({ id: this.removeId });
      this.setRemoveId({ id: null });
    }
  }
};
</script>

<style lang="scss" module>
@import "../style/lib/mixins";
@import "../style/lib/colors";

.user-list {
  &__header {
  }

  &__content {
  }
}
</style>
