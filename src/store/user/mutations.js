import { USER_FILTER, USER_LIST, USER_REMOVE_ID } from "./state";

export const SET_USER_LIST = "SET_USER_LIST";
export const SET_USER_FILTER = "SET_USER_FILTER";
export const SET_USER_REMOVE_ID = "USER_REMOVE_ID";
export const REMOVE_USER_BY_ID = "REMOVE_USER_BY_ID";

export default {
  [SET_USER_LIST]: (state, { list }) => (state[USER_LIST] = list),
  [SET_USER_FILTER]: (state, { filter }) => (state[USER_FILTER] = filter),
  [SET_USER_REMOVE_ID]: (state, { id }) => (state[USER_REMOVE_ID] = id),
  [REMOVE_USER_BY_ID]: (state, { id }) =>
    (state[USER_LIST] = state[USER_LIST].filter(u => u.id !== id))
};
