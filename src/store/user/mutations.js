import { USER_FILTER, USER_LIST, USER_REMOVE_ID, USER_CURRENT } from "./state";

export const SET_USER_LIST = "SET_USER_LIST";
export const SET_USER_FILTER = "SET_USER_FILTER";
export const SET_USER_REMOVE_ID = "USER_REMOVE_ID";
export const REMOVE_USER_BY_ID = "REMOVE_USER_BY_ID";
export const SET_USER_CURRENT = "SET_USER_CURRENT";

export default {
  [SET_USER_LIST]: (state, { list }) => (state[USER_LIST] = list),
  [SET_USER_FILTER]: (state, { filter }) => (state[USER_FILTER] = filter),
  [SET_USER_REMOVE_ID]: (state, { id }) => (state[USER_REMOVE_ID] = id),
  [REMOVE_USER_BY_ID]: (state, { id }) =>
    (state[USER_LIST] = state[USER_LIST].filter(u => u.id !== id)),
  [SET_USER_CURRENT]: (state, { user }) => (state[USER_CURRENT] = user)
};
