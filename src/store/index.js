import Vue  from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex);
// Create a new store instance.

  const state = {
      count: 10,
      users: [],
  }
  const mutations = {
    increment (state) {
      state.count++
    },
    SET_USERS (state, payload) {
      state.users = JSON.parse(payload);
    }
  }
  const getters = {
    users(state){
      return state.users;
    }
  }

  const   actions = {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get(
          "https://9e34429a-eba3-4e56-85f2-685706a08897.mock.pstmn.io/report/dau?dashboardUserId=abc123&periodFrom=1669852800&periodTo=1674063742&aggregateBy%5B0%5D=month&aggregateBy%5B1%5D=country"
        );
        commit("SET_USERS",  JSON.stringify(data.data));
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  }



export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
})