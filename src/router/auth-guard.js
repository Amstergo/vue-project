import store from "../store";

export default function(to, from, next) {
  if (store.state.user.user) {
    next();
  } else {
    next("/login?loginError=true");
  }
}
