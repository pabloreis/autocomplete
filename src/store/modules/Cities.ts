import { ActionContext } from 'vuex';

import {
  AutocompleteItemModel,
  CitiesActionTypes,
  CitiesMutationTypes,
  CitiesGetterTypes,
  CitiesState,
  StoreStateModel,
} from '@/models';

export default {
  namespaced: true,
  state: {
    citiesList: [],
  },
  getters: {
    [CitiesGetterTypes.FORMATTED_CITIES]({ citiesList }: CitiesState): AutocompleteItemModel[] {
      return citiesList.map((city) => ({ key: city, label: city }));
    },
  },
  mutations: {
    [CitiesMutationTypes.SET_CITIES]({ citiesList }: CitiesState, payload: string[]): void {
      citiesList.push(...payload);
    },
  },
  actions: {
    [CitiesActionTypes.GET_CITIES](
      { commit }: ActionContext<CitiesState, StoreStateModel>,
      payload: string[],
    ): void {
      commit(CitiesMutationTypes.SET_CITIES, payload);
    },
  },
};
