import actionsFactory from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

export default ({ http }) => ({
  actions: actionsFactory(http),
  getters,
  mutations,
  state
});
