// @ts-expect-error It's troublesome to get types for useStore; see below for more details.
import {createStore} from 'vuex'

import authModule from '@/store/modules/auth'
import layoutModule from '@/store/modules/layout'

// Unfortunately, typed Vuex stores are painful to use, especially with multiple modules. We'll continue using any for
// now. Now that we do not use a Vuex module for authentication, we can migrate to Pinia.

const store = createStore({
  state: {
    routeProps: {},
  },
  mutations: {
    setRouteProps(state: any, props: any) {
      state.routeProps = props;
    },
  },
  actions: {
  },
  modules: {
    auth: authModule,
    layout: layoutModule
  }
})

export default store