import { SET_USER_LIST, SET_USER_CURRENT } from "../user/mutations";
import { SET_APP_PAGES_COUNT } from "../app/mutations";
import {
  GET_API_LIST_URL,
  GET_API_SINGLE_URL,
  GET_API_UPDATE_URL,
  GET_API_CREATE_URL
} from "./getters";
import {
  SET_API_LIST_REQUEST_IN_PROGRESS,
  SET_API_LIST_REQUEST_ERROR,
  SET_API_LIST_REQUEST_ERROR_MESSAGE,
  SET_API_USER_REQUEST_IN_PROGRESS,
  SET_API_USER_REQUEST_ERROR,
  SET_API_USER_REQUEST_ERROR_MESSAGE,
  SET_API_USER_UPDATE_REQUEST_IN_PROGRESS,
  SET_API_USER_UPDATE_REQUEST_ERROR,
  SET_API_USER_UPDATE_REQUEST_ERROR_MESSAGE,
  SET_API_USER_CREATE_REQUEST_IN_PROGRESS,
  SET_API_USER_CREATE_REQUEST_ERROR,
  SET_API_USER_CREATE_REQUEST_ERROR_MESSAGE
} from "./mutations";

export const FETCH_API_LIST = "FETCH_API_LIST";
export const FETCH_USER_DATA = "FETCH_USER_DATA";
export const UPDATE_USER_DATA = "UPDATE_USER_DATA";
export const CREATE_USER_DATA = "CREATE_USER_DATA";

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
    }),
  [UPDATE_USER_DATA]: (
    { commit, getters },
    { id, firstName, lastName, avatar }
  ) =>
    new Promise(async (resolve, reject) => {
      commit(SET_API_USER_UPDATE_REQUEST_IN_PROGRESS, { status: true });

      try {
        const endpoint = getters[GET_API_UPDATE_URL](id);
        const resp = await http.put(endpoint, {
          first_name: firstName,
          last_name: lastName,
          avatar
        });
        commit(SET_API_USER_UPDATE_REQUEST_IN_PROGRESS, { status: false });
        resolve(resp.data.data);
      } catch (e) {
        commit(SET_API_USER_UPDATE_REQUEST_IN_PROGRESS, { status: false });
        commit(SET_API_USER_UPDATE_REQUEST_ERROR, { status: true });
        commit(SET_API_USER_UPDATE_REQUEST_ERROR_MESSAGE, {
          message: e.message
        });
        reject(e);
      }
    }),
  [CREATE_USER_DATA]: ({ commit, getters }, { firstName, lastName, avatar }) =>
    new Promise(async (resolve, reject) => {
      commit(SET_API_USER_CREATE_REQUEST_IN_PROGRESS, { status: true });

      try {
        const endpoint = getters[GET_API_CREATE_URL];
        const resp = await http.post(endpoint, {
          first_name: firstName,
          last_name: lastName,
          avatar
        });
        commit(SET_API_USER_CREATE_REQUEST_IN_PROGRESS, { status: false });
        resolve(resp.data.data);
      } catch (e) {
        commit(SET_API_USER_CREATE_REQUEST_IN_PROGRESS, { status: false });
        commit(SET_API_USER_CREATE_REQUEST_ERROR, { status: true });
        commit(SET_API_USER_CREATE_REQUEST_ERROR_MESSAGE, {
          message: e.message
        });
        reject(e);
      }
    })
});
