import { BooksState, CitiesState } from '.';

export interface StoreStateModel {
  cities: CitiesState,
  books: BooksState,
}

export enum StoreNamespace {
  Cities = 'Cities',
  Books = 'Books',
}
