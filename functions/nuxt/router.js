import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _e5caa2dc = () => interopDefault(import('../../src/pages/contactus/index.vue' /* webpackChunkName: "pages/contactus/index" */))
const _5b9e3b2a = () => interopDefault(import('../../src/pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _830298d0 = () => interopDefault(import('../../src/pages/aboutus/hale/index.vue' /* webpackChunkName: "pages/aboutus/hale/index" */))
const _32d72d29 = () => interopDefault(import('../../src/pages/aboutus/legal/index.vue' /* webpackChunkName: "pages/aboutus/legal/index" */))
const _376bc527 = () => interopDefault(import('../../src/pages/developments/_development/index.vue' /* webpackChunkName: "pages/developments/_development/index" */))
const _63a09379 = () => interopDefault(import('../../src/pages/developments/_development/_houseType/index.vue' /* webpackChunkName: "pages/developments/_development/_houseType/index" */))
const _20b5d7e3 = () => interopDefault(import('../../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/contactus",
      component: _e5caa2dc,
      name: "contactus"
    }, {
      path: "/search",
      component: _5b9e3b2a,
      name: "search"
    }, {
      path: "/aboutus/hale",
      component: _830298d0,
      name: "aboutus-hale"
    }, {
      path: "/aboutus/legal",
      component: _32d72d29,
      name: "aboutus-legal"
    }, {
      path: "/developments/:development?",
      component: _376bc527,
      name: "developments-development"
    }, {
      path: "/developments/:development?/:houseType",
      component: _63a09379,
      name: "developments-development-houseType"
    }, {
      path: "/",
      component: _20b5d7e3,
      name: "index"
    }],

    fallback: false
  })
}
