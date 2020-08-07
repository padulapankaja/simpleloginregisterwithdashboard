
import Dashboard from '../components/App';

// import Login
import Login from '../views/Admin/Login'
import Register from '../views/Admin/Register'
import Side from '../views/Sidebar'

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
        path: "/side",
        name: "Side",
        component: Side,
        exact: true,
    },


];

export default ProtectedindexRoutes;