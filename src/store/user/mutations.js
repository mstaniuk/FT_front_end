import { USER_FILTER, USER_LIST } from "./state";

export const SET_USER_LIST = "SET_USER_LIST";
export const SET_USER_FILTER = "SET_USER_FILTER";

export default {
  [SET_USER_LIST]: (state, { list }) => (state[USER_LIST] = list),
  [SET_USER_FILTER]: (state, { filter }) => (state[USER_FILTER] = filter)
};
