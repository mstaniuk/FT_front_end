import { USER_LIST } from "./state";

export const SET_USER_LIST = "SET_USER_LIST";

export default {
  [SET_USER_LIST]: (state, { list }) => (state[USER_LIST] = list)
};
