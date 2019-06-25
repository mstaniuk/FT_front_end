import { USER_LIST } from "./state";

export const GET_USER_FULL_NAME = "GET_USER_FULL_NAME";

export default {
  [GET_USER_FULL_NAME]: state => userId => {
    const user = state[USER_LIST].find(u => u.id === userId);
    if (user) {
      return user.first_name + " " + user.last_name;
    }

    return null;
  }
};
