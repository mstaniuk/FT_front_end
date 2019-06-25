<template>
  <div :class="$style['toolbar']">
    <div :class="$style['toolbar__filter']">
      <Input placeholder="Search for users..." icon="search" />
    </div>
    <div :class="$style['toolbar__actions']">
      <Button @click="addUser()">
        <SvgIcon name="plus" :class="$style['toolbar__button-icon']" />
        add
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import SvgIcon from "./SvgIcon";
import Input from "./Input";

export default {
  name: "UserListToolbar",
  components: {
    Button,
    SvgIcon,
    Input
  },
  methods: {
    addUser() {}
  }
};
</script>

<style lang="scss" module>
@import "../style/lib/mixins";
@import "../style/lib/colors";

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__filter {
    width: 500px;
  }

  &__actions {
  }

  &__button-icon {
    margin-right: 12px;
  }
}
</style>
