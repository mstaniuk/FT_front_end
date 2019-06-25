<template>
  <table :class="$style['user-table']">
    <tr>
      <th
        :class="[
          $style['user-table__header'],
          $style['user-table__header--avatar']
        ]"
      ></th>
      <th
        :class="[
          $style['user-table__header'],
          $style['user-table__header--name']
        ]"
      >
        Full Name
      </th>
      <th
        :class="[
          $style['user-table__header'],
          $style['user-table__header--actions']
        ]"
      >
        Action
      </th>
    </tr>
    <tr
      :class="[$style['user-table__row'], $style['user']]"
      v-for="user in users"
      :key="user.id"
    >
      <td :class="$style['user-table__cell']">
        <img :src="user.avatar" :class="$style['user__avatar']" />
      </td>
      <td :class="$style['user-table__cell']">
        {{ getFullNameById(user.id) }}
      </td>
      <td :class="$style['user-table__cell']">
        <Button
          type="none"
          :class="$style['user__action']"
          @click="onEditClick(user.id)"
        >
          <SvgIcon name="edit" fill="gray-dark" :size="[20, 20]" />
        </Button>
        <Button
          type="none"
          :class="$style['user__action']"
          @click="onDeleteClick(user.id)"
        >
          <SvgIcon name="delete" fill="gray-dark" :size="[20, 20]" />
        </Button>
      </td>
    </tr>
  </table>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import { SET_USER_REMOVE_ID } from "@/store/user/mutations";
import { GET_USER_FULL_NAME, GET_FILTERED_USERS } from "@/store/user/getters";

import SvgIcon from "./SvgIcon";
import Button from "./Button";

export default {
  name: "UserListTable",
  components: {
    SvgIcon,
    Button
  },
  computed: {
    ...mapGetters({
      getFullNameById: GET_USER_FULL_NAME,
      users: GET_FILTERED_USERS
    })
  },
  methods: {
    ...mapMutations({
      setRemoveId: SET_USER_REMOVE_ID
    }),
    onDeleteClick(id) {
      this.setRemoveId({ id });
    },
    onEditClick(id) {
      this.$router.push({ name: "user", params: { id: id } });
    }
  }
};
</script>

<style lang="scss" module>
@import "../style/lib/mixins";
@import "../style/lib/colors";

.user-table {
  $root: &;

  width: 100%;
  table-layout: fixed;

  &__header {
    font-weight: 700;
    text-align: left;
    padding: 20px 0;

    &--avatar {
      width: 120px;

      @include respond-to("x-small-max") {
        display: none;
      }
    }

    &--name {
      @include respond-to("x-small-max") {
        padding-left: 12px;
      }
    }

    &--actions {
      width: 124px;
    }
  }

  &__row {
    &:nth-child(even) {
      #{$root}__cell {
        background-color: $color-teal;
      }
    }
  }

  &__cell {
    padding: 12px 0;
    vertical-align: middle;

    &:first-child {
      padding-left: 12px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;

      @include respond-to("x-small-max") {
        display: none;
      }
    }

    &:nth-child(2) {
      @include respond-to("x-small-max") {
        padding-left: 12px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
    }

    &:last-child {
      padding-right: 12px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
}
.user {
  &__avatar {
    width: 45px;
    height: 45px;
    border-radius: 100%;
  }

  &__action {
    padding: 5px;
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
}
</style>
