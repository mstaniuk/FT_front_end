import {
  API_URL,
  API_ENDPOINT_LIST,
  API_ENDPOINT_SINGLE,
  API_ENDPOINT_CREATE,
  API_ENDPOINT_DELETE,
  API_ENDPOINT_UPDATE,
  API_ENTRIES_PER_PAGE
} from "./state";

export const GET_API_LIST_URL = "GET_API_LIST_URL";
export const GET_API_SINGLE_URL = "GET_API_SINGLE_URL";
export const GET_API_CREATE_URL = "GET_API_CREATE_URL";
export const GET_API_DELETE_URL = "GET_API_DELETE_URL";
export const GET_API_UPDATE_URL = "GET_API_UPDATE_URL";

export default {
  [GET_API_LIST_URL]: state => page =>
    state[API_URL] +
    state[API_ENDPOINT_LIST] +
    "?per_page=" +
    state[API_ENTRIES_PER_PAGE] +
    "&page=" +
    page,
  [GET_API_SINGLE_URL]: state => state[API_URL] + state[API_ENDPOINT_SINGLE],
  [GET_API_CREATE_URL]: state => state[API_URL] + state[API_ENDPOINT_CREATE],
  [GET_API_DELETE_URL]: state => state[API_URL] + state[API_ENDPOINT_DELETE],
  [GET_API_UPDATE_URL]: state => state[API_URL] + state[API_ENDPOINT_UPDATE]
};
