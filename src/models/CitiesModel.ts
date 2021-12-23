export type CitiesState = {
  citiesList: string[]
}

export enum CitiesMutationTypes {
  SET_CITIES = 'SET_CITIES',
}

export enum CitiesActionTypes {
  GET_CITIES = 'GET_CITIES',
}

export enum CitiesGetterTypes {
  FORMATTED_CITIES = 'FORMATTED_CITIES',
}
