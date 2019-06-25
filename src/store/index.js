import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import apiStoreFactory from "./api";
import userStoreFactory from "./user";
import appStoreFactory from "./app";

Vue.use(Vuex);

const {
  state: apiState,
  mutations: apiMutations,
  actions: apiActions,
  getters: apiGetters
} = apiStoreFactory({ http: axios });

const {
  state: userState,
  mutations: userMutations,
  actions: userActions,
  getters: userGetters
} = userStoreFactory({ http: axios });

const {
  state: appState,
  mutations: appMutations,
  actions: appActions,
  getters: appGetters
} = appStoreFactory({ http: axios });

export default new Vuex.Store({
  state: {
    ...apiState,
    ...userState,
    ...appState
  },
  mutations: {
    ...apiMutations,
    ...userMutations,
    ...appMutations
  },
  actions: {
    ...apiActions,
    ...userActions,
    ...appActions
  },
  getters: {
    ...apiGetters,
    ...userGetters,
    ...appGetters
  }
});
