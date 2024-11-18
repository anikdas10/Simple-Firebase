import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="container mx-auto px-20 font-bold">
            <NavLink className='mr-4' to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Header;