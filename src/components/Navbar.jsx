import { Link } from "react-router-dom";
import { Home } from './Home';
export const Navbar = () => {
    // const nav = [
    //     {title: "Home", to:'/'},
    //     {title: "Login", to:'/login'},
    //     {title: "Logout", to:'logout'}
    // ];

    return (
        <div>
            <Link className="nav-home" to="/">
                <Home />
            </Link>
            {/* Show either login or logout below */}
            <Link className="nav-logout" to="/logout">
            Logout
            </Link>
            <Link className="nav-login" to="/login">
            Login
            </Link>

            {/* {nav.map((e,i) => (
                <Link key={i} to={e.to}>
                    {e.title}
                </Link>
            ))} */}
      </div>
    )
}