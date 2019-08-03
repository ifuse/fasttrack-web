import {store} from '../store'

export default (to, from, next) => {
  if ("store.app") {
    next()
  }
   else {
    next("/auth/login")
   }
}
