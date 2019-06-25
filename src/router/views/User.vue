<template>
  <MainTemplate title="User list">
    <div :class="$style['user-page']">
      <div
        :class="[$style['user-page__pane'], $style['user-page__pane--main']]"
      >
        <Pane>
          <div :class="$style['user-edit']">
            <div :class="$style['user-edit__main']">
              <div :class="$style['user-edit__group']">
                <label :class="$style['user-edit__label']" for="firstName"
                  >First Name</label
                >
                <input
                  :class="$style['user-edit__input']"
                  v-model="firstName"
                  id="firstName"
                />
              </div>
              <div :class="$style['user-edit__group']">
                <label :class="$style['user-edit__label']" for="lastName"
                  >First Name</label
                >
                <input
                  :class="$style['user-edit__input']"
                  v-model="lastName"
                  id="lastName"
                />
              </div>
            </div>
            <div :class="$style['user-edit__actions']">
              <Button radius="small">
                Update Details
              </Button>
            </div>
          </div>
        </Pane>
      </div>
      <div
        :class="[$style['user-page__pane'], $style['user-page__pane--aside']]"
      >
        <Pane>
          <div :class="$style['image-edit']">
            <div :class="$style['image-edit__preview']">
              <img
                :class="$style['image-edit__avatar']"
                :src="avatar"
                alt="User avatar"
              />
            </div>
            <div :class="$style['image-edit__actions']">
              <ButtonToInput @keydown="avatarKeydown" :value="avatar">
                <SvgIcon
                  name="camera"
                  :size="[16, 16]"
                  fill="gray-dark"
                  :class="$style['image-edit__icon']"
                />
                Change Photo
              </ButtonToInput>
            </div>
          </div>
        </Pane>
      </div>
    </div>
  </MainTemplate>
</template>

<script>
import MainTemplate from "@/router/layout/main.vue";
import Pane from "@/components/Pane";
import Button from "@/components/Button";
import ButtonToInput from "@/components/ButtonToInput";
import SvgIcon from "@/components/SvgIcon";

import { FETCH_USER_DATA } from "@/store/api/actions";

export default {
  name: "User",
  data() {
    return {
      firstName: "",
      lastName: "",
      avatar: ""
    };
  },
  components: {
    MainTemplate,
    Pane,
    Button,
    ButtonToInput,
    SvgIcon
  },
  watch: {
    ["$route.params.id"]() {
      this.fetchUserData();
    }
  },
  methods: {
    onSave() {},
    avatarKeydown(value) {
      this.avatar = value;
    },
    async fetchUserData() {
      const userData = await this.$store.dispatch(FETCH_USER_DATA, {
        id: this.userId
      });
      this.firstName = userData.first_name;
      this.lastName = userData.last_name;
      this.avatar = userData.avatar;
    }
  },
  computed: {
    userId() {
      return parseInt(this.$route.params.id);
    }
  },
  created() {
    this.fetchUserData();
  }
};
</script>

<style lang="scss" module>
@import "../../style/lib/mixins";
@import "../../style/lib/colors";

.user-page {
  margin: -5px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap-reverse;

  @include respond-to("medium") {
    margin: -15px;
  }

  &__pane {
    padding: 5px;

    @include respond-to("medium") {
      padding: 15px;
    }

    &--main {
      width: 100%;

      @include respond-to("small") {
        width: 50%;
      }

      @include respond-to("medium") {
        width: 66.66%;
      }
    }

    &--aside {
      width: 100%;

      @include respond-to("small") {
        width: 50%;
      }

      @include respond-to("medium") {
        width: 33.33%;
      }
    }
  }
}

.user-edit {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__main {
    height: 100%;
    flex: 1 1 auto;
    margin: -10px;
    margin-bottom: 50px;

    @include respond-to("medium") {
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }

  &__group {
    padding: 10px;
    width: 100%;
    flex: 1 1 auto;
  }

  &__label {
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__input {
    display: block;
    width: 100%;
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid $color-border;
  }

  &__actions {
    flex: 0 0 auto;
  }
}

.image-edit {
  &__preview {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  &__avatar {
    max-width: 250px;
    height: auto;
    border-radius: 100%;
  }

  &__icon {
    margin-right: 10px;
  }
}
</style>
