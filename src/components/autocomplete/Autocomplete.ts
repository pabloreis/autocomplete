import { Component, Prop, Vue } from 'vue-property-decorator';

import { AutocompleteItemModel } from '@/models';

enum AutocompleteIcons {
  Search = 'search',
  NotFound = 'times',
}

@Component
export default class Autocomplete extends Vue {
  $refs!: {
    search: HTMLInputElement;
  };

  private static readonly DEFAULT_PLACEHOLDER_VALUE = 'Search';

  private static readonly MIN_SEARCH_START = 3;

  @Prop({ required: true, default: () => [] })
  private options!: AutocompleteItemModel[];

  @Prop({ default: false })
  private focus!: boolean;

  @Prop({ default: Autocomplete.DEFAULT_PLACEHOLDER_VALUE })
  public placeholder!: string;

  public search = '';

  public isInputFocused = false;

  public isAlertHovered = false;

  private created(): void {
    if (this.focus) {
      this.$nextTick(() => this.$refs.search.focus());
    }
  }

  private get searchIsEnabled(): boolean {
    return this.search.length >= Autocomplete.MIN_SEARCH_START;
  }

  public highLightMatchedLabel(label: string): string {
    return `<div>${label.toLowerCase().replace(this.search.toLowerCase(), `<span>${this.search}</span>`)}</div>`;
  }

  public toggleInputFocus(): void {
    this.isInputFocused = !this.isInputFocused;
  }

  public toggleMouseHover(): void {
    this.isAlertHovered = !this.isAlertHovered;
  }

  public get icon(): AutocompleteIcons {
    return this.isOptionListEmpty ? AutocompleteIcons.NotFound : AutocompleteIcons.Search;
  }

  public get autocompleteSearchOptions(): AutocompleteItemModel[] {
    return this.options.filter(({ key }) => {
      if (this.search.length >= Autocomplete.MIN_SEARCH_START) {
        return key.toLowerCase().match(this.search.toLowerCase());
      }

      return false;
    });
  }

  public get hasOptions(): boolean {
    return !!this.autocompleteSearchOptions.length;
  }

  public get isSearchDisabled(): boolean {
    return !!this.search.length && !this.searchIsEnabled;
  }

  public get isOptionListEmpty(): boolean {
    return this.searchIsEnabled && !this.hasOptions;
  }
}
