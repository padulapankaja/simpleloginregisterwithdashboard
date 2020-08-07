
import Dashboard from '../components/App';

// import Login
import Login from '../views/Admin/Login'
import Register from '../views/Admin/Register'


let ProtectedindexRoutes = [
    {
        path: "/",
        name: "Login",
        exact: true,
        component: Login,
      },
    {
        path: "/register",
        name: "Register",
        exact: true,
        component: Register,
      },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        exact: true,
    },


];

export default ProtectedindexRoutes;