import { Link } from "react-router-dom";
import { Home } from './Home';
export const Navbar = () => {
    const nav = [
        {title: "Home", to:'/'},
        {title: "Login", to:'/login'},

    ];

    return (
        <div>
         {nav.map((e,i) => (
                <Link key={i} to={e.to}>
                    {e.title}
                </Link>
            ))}
      </div>
    )
}