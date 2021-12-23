import { Store } from 'vuex';

import { StoreStateModel } from '../src/models';

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<StoreStateModel>
  }
}
