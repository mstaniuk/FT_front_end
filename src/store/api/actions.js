import { SET_USER_LIST, SET_USER_CURRENT } from "../user/mutations";
import { SET_APP_PAGES_COUNT } from "../app/mutations";
import { GET_API_LIST_URL, GET_API_SINGLE_URL } from "./getters";
import {
  SET_API_LIST_REQUEST_IN_PROGRESS,
  SET_API_LIST_REQUEST_ERROR,
  SET_API_LIST_REQUEST_ERROR_MESSAGE,
  SET_API_USER_REQUEST_IN_PROGRESS,
  SET_API_USER_REQUEST_ERROR,
  SET_API_USER_REQUEST_ERROR_MESSAGE
} from "./mutations";

export const FETCH_API_LIST = "FETCH_API_LIST";
export const FETCH_USER_DATA = "FETCH_USER_DATA";

export default http => ({
  [FETCH_API_LIST]: ({ commit, getters }, { page }) =>
    new Promise(async (resolve, reject) => {
      commit(SET_API_LIST_REQUEST_IN_PROGRESS, { status: true });

      try {
        const endpoint = getters[GET_API_LIST_URL](page);
        const resp = await http.get(endpoint);
        commit(SET_API_LIST_REQUEST_IN_PROGRESS, { status: false });
        commit(SET_USER_LIST, { list: resp.data.data });
        commit(SET_APP_PAGES_COUNT, { count: resp.data.total_pages });
        resolve(resp);
      } catch (e) {
        commit(SET_API_LIST_REQUEST_IN_PROGRESS, { status: false });
        commit(SET_API_LIST_REQUEST_ERROR, { status: true });
        commit(SET_API_LIST_REQUEST_ERROR_MESSAGE, { message: e.message });
        reject(e);
      }
    }),
  [FETCH_USER_DATA]: ({ commit, getters }, { id }) =>
    new Promise(async (resolve, reject) => {
      commit(SET_API_USER_REQUEST_IN_PROGRESS, { status: true });

      try {
        const endpoint = getters[GET_API_SINGLE_URL](id);
        console.log(endpoint);
        const resp = await http.get(endpoint);

        commit(SET_API_USER_REQUEST_IN_PROGRESS, { status: false });
        commit(SET_USER_CURRENT, { user: resp.data.data });
        resolve(resp.data.data);
      } catch (e) {
        commit(SET_API_USER_REQUEST_IN_PROGRESS, { status: false });
        commit(SET_API_USER_REQUEST_ERROR, { status: true });
        commit(SET_API_USER_REQUEST_ERROR_MESSAGE, { message: e.message });
        reject(e);
      }
    })
});
