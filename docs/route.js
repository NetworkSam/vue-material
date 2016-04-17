export function configRouter (router) {
  router.map({
    'components/button': {
      component: require('./components/components/button.vue'),
      subRoutes: {}
    },
    'components/calendar': {
      component: require('./components/components/calendar.vue'),
      subRoutes: {}
    },
    '*': {
      component: require('./components/not-found.vue')
    }
  })
}
