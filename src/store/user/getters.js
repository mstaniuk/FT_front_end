import fuzzysearch from "fuzzysearch";

import { USER_FILTER, USER_LIST } from "./state";

export const GET_USER_FULL_NAME = "GET_USER_FULL_NAME";
export const GET_FILTERED_USERS = "GET_FILTERED_USERS";

const normalizeText = text => text.replace(/\s/g, "").toLowerCase();

export default {
  [GET_USER_FULL_NAME]: state => userId => {
    const user = state[USER_LIST].find(u => u.id === userId);
    if (user) {
      return user.first_name + " " + user.last_name;
    }

    return null;
  },
  [GET_FILTERED_USERS]: state => {
    if (!state[USER_FILTER]) {
      return state[USER_LIST];
    }

    return state[USER_LIST].filter(user =>
      fuzzysearch(
        normalizeText(state[USER_FILTER]),
        normalizeText(user.first_name + user.last_name)
      )
    );
  }
};
