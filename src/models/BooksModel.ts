export interface BookModel {
  title: string;
  author: string;
}

export type BooksState = {
  booksList: BookModel[]
}

export enum BooksMutationTypes {
  SET_BOOKS = 'SET_BOOKS',
}

export enum BooksActionTypes {
  GET_BOOKS = 'GET_BOOKS',
}

export enum BooksGetterTypes {
  FORMATTED_BOOKS = 'FORMATTED_BOOKS',
}
