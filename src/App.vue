<template>
  <router-view />
</template>

<script>
import { FETCH_API_LIST } from "./store/api/actions";

export default {
  created() {
    this.$store.dispatch(FETCH_API_LIST);
  }
};
</script>

<style lang="scss">
@import "./style/global";
</style>
