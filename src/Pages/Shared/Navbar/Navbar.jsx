import { Link, NavLink } from "react-router-dom";
import { FaAccusoft, } from "react-icons/fa";


const Navbar = () => {
    
const user = null
    const handleLogout =() =>{

    }

    const navItems = <>
    <li><NavLink to='/' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }>Home</NavLink></li>

    {user ? <><li><NavLink onClick={handleLogout
    } to='/login' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }>Logout</NavLink></li>
    </>:
    <><li><NavLink to='/login' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Login</NavLink></li>
  <li><NavLink to='/register' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Register</NavLink></li>
  </>}
</>
    return (
        <div className="navbar max-w-screen-xl  bg-[#2b25256e] z-10 text-white fixed">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <div className="flex flex-col items-center w-25 h-25   md:ms-5">
    <img className="w-[80px] h-25 hidden md:block" src="https://r67.cooltext.com/rendered/cooltext437101050175045.png" alt="" />
    <FaAccusoft className="w-16 h-16 hidden md:block text-cyan-700"/>
    </div>
    <Link className="text-xl md:ms-10 md:text-3xl font-bold text-cyan-700">Fr. Language Hub</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;