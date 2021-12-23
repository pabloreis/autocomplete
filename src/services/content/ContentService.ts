import { injectable } from 'inversify-props';

import api from '../api';

import { BookModel } from '@/models/BooksModel';

type CitiesResponse = {
  data: string[];
}

type BooksResponse = {
  data: BookModel[];
}

export interface IContentService {
  getCities(): Promise<CitiesResponse>;
  getBooks(): Promise<BooksResponse>;
}

@injectable()
export class ContentService implements IContentService {
  public getCities(): Promise<CitiesResponse> {
    return api.get('cities');
  }

  public getBooks(): Promise<BooksResponse> {
    return api.get('books');
  }
}
