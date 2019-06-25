import { APP_PAGES_COUNT } from "./state";

export const SET_APP_PAGES_COUNT = "SET_APP_PAGES_COUNT";

export default {
  [SET_APP_PAGES_COUNT]: (state, { count }) => (state[APP_PAGES_COUNT] = count)
};
