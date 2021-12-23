import 'reflect-metadata';
import Vue from 'vue';
import { container } from 'inversify-props';

import App from './App.vue';
import store from './store';
import { ContentService, IContentService } from './services';

Vue.config.productionTip = false;

class AppBootstrap {
  constructor() {
    container.addSingleton<IContentService>(ContentService, 'contentService');
    this.loadVueApp();
  }

  private loadVueApp(): void {
    new Vue({
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
}

new AppBootstrap();
