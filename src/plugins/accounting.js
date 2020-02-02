import VueCurrencyFilter from 'vue-currency-filter'
import Vue from 'vue'
Vue.use(VueCurrencyFilter, {
    symbol: '£',
    thousandsSeparator: ',',
    fractionCount: 0,
    fractionSeparator: '.',
    symbolPosition: 'front',
    symbolSpacing: true
})
