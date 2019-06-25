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
        i i
      </td>
    </tr>
  </table>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import { USER_LIST } from "@/store/user/state";
import { GET_USER_FULL_NAME } from "@/store/user/getters";

export default {
  name: "UserListTable",
  computed: {
    ...mapState({
      users: USER_LIST
    }),
    ...mapGetters({
      getFullNameById: GET_USER_FULL_NAME
    })
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
}
</style>
