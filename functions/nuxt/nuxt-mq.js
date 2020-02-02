import Vue from 'vue'
import VueMq from 'vue-mq'

export default async function () {
  let plugin = VueMq;
  if (process.server) {
    plugin = {
      install(Vue, options) {
        Vue.prototype.$mq = options.defaultBreakpoint
      }
    }
  }

  const moduleOptions = {"defaultBreakpoint":"default","breakpoints":{"md":1023,"lg":null}}
  Vue.use(plugin, moduleOptions)
}
