import { ActionContext } from 'vuex';

import {
  AutocompleteItemModel,
  BookModel,
  BooksActionTypes,
  BooksMutationTypes,
  BooksGetterTypes,
  BooksState,
  StoreStateModel,
} from '@/models';

export default {
  namespaced: true,
  state: {
    booksList: [],
  },
  getters: {
    [BooksGetterTypes.FORMATTED_BOOKS]({ booksList }: BooksState): AutocompleteItemModel[] {
      return booksList.map(({ title, author }) => ({ key: title, label: `${title}, <span>by ${author}</span>` }));
    },
  },
  mutations: {
    [BooksMutationTypes.SET_BOOKS]({ booksList }: BooksState, payload: BookModel[]): void {
      booksList.push(...payload);
    },
  },
  actions: {
    [BooksActionTypes.GET_BOOKS](
      { commit }: ActionContext<BooksState, StoreStateModel>,
      payload: BookModel[],
    ): void {
      commit(BooksMutationTypes.SET_BOOKS, payload);
    },
  },
};
