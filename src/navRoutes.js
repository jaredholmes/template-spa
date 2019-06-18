// Navigation Routes
// Set meta.nav to true for a route in router.js for it to be added to the navigation routes
import router from '@/router'

const routes = router.options.routes
const navRoutesList = []
let navRoutes = {}

routes.forEach(route => {
  if (route.meta.nav) {
    navRoutesList.push(route)
  }
})

navRoutes = navRoutesList

export default navRoutes
