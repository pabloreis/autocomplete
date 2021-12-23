import { Component, Vue } from 'vue-property-decorator';
import { Inject } from 'inversify-props';

import Autocomplete from '@/components/autocomplete/Autocomplete.vue';

import { IContentService } from '@/services';
import {
  BookModel,
  CitiesActionTypes,
  BooksActionTypes,
  CitiesGetterTypes,
  BooksGetterTypes,
  StoreNamespace,
} from '@/models';

@Component({
  components: {
    Autocomplete,
  },
})
export default class App extends Vue {
  @Inject('contentService')
  private contentService!: IContentService;

  public loading = true;

  private created(): void {
    Promise.all([this.contentService.getCities(), this.contentService.getBooks()])
      .then(([{ data: cities }, { data: books }]) => {
        this.$store.dispatch(`${StoreNamespace.Cities}/${CitiesActionTypes.GET_CITIES}`, cities);
        this.$store.dispatch(`${StoreNamespace.Books}/${BooksActionTypes.GET_BOOKS}`, books);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.loading = false;
      });
  }

  public get cities(): string[] {
    return this.$store.getters[`${StoreNamespace.Cities}/${CitiesGetterTypes.FORMATTED_CITIES}`];
  }

  public get books(): BookModel[] {
    return this.$store.getters[`${StoreNamespace.Books}/${BooksGetterTypes.FORMATTED_BOOKS}`];
  }
}
