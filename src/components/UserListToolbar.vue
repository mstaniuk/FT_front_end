<template>
  <div :style="$style['toolbar']">
    <div>
      <input type="text" />
    </div>
    <div>
      <Button
        @click="
          () => {
            log();
          }
        "
        :class="'test'"
        test="2"
      >
        add
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "UserListToolbar",
  methods: {
    log() {
      console.log("asd");
    }
  },
  components: {
    Button
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
}
</style>
