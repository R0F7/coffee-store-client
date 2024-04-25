import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-center items-center border-b">
            <ul className="space-x-10 py-7">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/signup'>Sign Up</NavLink>
                <NavLink to='/signin'>Sign In</NavLink>
            </ul>
        </div>
    );
};

export default Header;