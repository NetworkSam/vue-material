import Vue from 'vue'
import jss from '../util/jss'
const RULE_REG = /[^{]+\{|}/g
let {warn} = Vue.util
Vue.directive('style', {
  deep: true,
  update (value) {
    let el = this.el
    if (typeof value === 'string') {
      el.style.cssText = value
    } else if (typeof value === 'object') {
      el.style.cssText = jss.createRule(value).toString().replace(RULE_REG, '')
    } else if (process.env.NODE_ENV !== 'production') {
      warn(`style 类型不正确,要求 string|object,现在为${typeof value}`)
    }
  }
})
