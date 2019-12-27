const getters = {
  token: state => state.user.token,
  permission_routes: state => state.permission.routes,
  roles: state => state.user.roles
}
export default getters
