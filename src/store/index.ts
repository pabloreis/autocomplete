import Vue from 'vue';
import Vuex from 'vuex';

import Cities from './modules/Cities';
import Books from './modules/Books';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Cities,
    Books,
  },
});
