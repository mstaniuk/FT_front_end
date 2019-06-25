<template>
  <nav :class="$style['pagination']" v-if="pagesCount > 1">
    <ul :class="$style['pagination__list']">
      <li
        v-for="item in items"
        :key="item.content"
        :class="item.attributes.class"
      >
        <component
          :is="item.tag"
          v-html="item.content"
          :class="$style['pagination__element']"
          :to="item.attributes.to"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  computed: {
    items: function() {
      const linkElement = "router-link";
      const textElement = "span";

      let items = [];

      const prevItem = {
        tag: this.currentPage > 1 ? linkElement : textElement,

        content: "&laquo;",
        attributes: {
          to:
            this.currentPage > 1
              ? {
                  name: "list",
                  params: { page: this.currentPage - 1 }
                }
              : null,
          class: [
            this.$style["pagination__item"],
            {
              [this.$style["pagination__item--disabled"]]: this.currentPage <= 1
            }
          ]
        }
      };

      const nextItem = {
        tag: this.currentPage < this.pagesCount ? linkElement : textElement,
        content: "&raquo;",
        attributes: {
          to:
            this.currentPage < this.pagesCount
              ? {
                  name: "list",
                  params: { page: this.currentPage + 1 }
                }
              : null,
          class: [
            this.$style["pagination__item"],
            {
              [this.$style["pagination__item--disabled"]]:
                this.currentPage >= this.pagesCount
            }
          ]
        }
      };

      items.push(prevItem);

      for (let i = 1; i <= this.pagesCount; i++) {
        const item = {
          tag: i !== this.currentPage ? linkElement : textElement,
          content: i,
          attributes: {
            to:
              i !== this.currentPage
                ? {
                    name: "list",
                    params: { page: i }
                  }
                : null,
            class: [
              this.$style["pagination__item"],
              {
                [this.$style["pagination__item--active"]]:
                  i === this.currentPage
              }
            ]
          }
        };

        items.push(item);
      }

      items.push(nextItem);

      return items;
    }
  },
  props: {
    pagesCount: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" module>
@import "../style/lib/mixins";
@import "../style/lib/colors";

.pagination {
  $root: &;

  border: 1px solid $color-border;
  border-radius: 5px;
  display: inline-block;

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
  }

  &__item {
    background-color: $color-gray-light;
    border-right: 1px solid $color-border;

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      border: none;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    &--active {
      #{$root}__element {
        color: $color-gray-light;
        background-color: $color-green;
      }
    }

    &--disabled {
      #{$root}__element {
        color: $color-gray-dark;
      }
    }
  }

  &__element {
    transition: background-color 250ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    font-weight: 700;
    padding-left: 12px;
    padding-right: 12px;
    text-decoration: none;
    color: $color-green;
  }
}
</style>
