import { Link, NavLink } from "react-router-dom";
import { FaAccusoft, } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const Navbar = () => {
    
const {user,logOut} = useContext(AuthContext)

const handleLogout = () =>{
  logOut()
  .then(() =>{})
  .catch(error =>console.log(error.code))
}


    const navItems = <>
    <NavLink to='/' className="me-2">Home</NavLink>
    <NavLink to='/instructors' className="me-2">Instructors</NavLink>
    <NavLink to='/classes' className="me-2">Classes</NavLink>
    {user && <NavLink to='/dashboard' className="me-2">Dashboard</NavLink>}
</>
    return (
        <div className="navbar max-w-screen-xl  bg-[#2b25256e] z-10 text-white fixed">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
        {navItems}
      </ul>
    </div>
    <div className="flex flex-col items-center w-25 h-25   md:ms-5">

    <FaAccusoft className="w-16 h-16 hidden md:block text-cyan-300"/>
    </div>
    <Link className="text-xl md:ms-10 md:text-3xl font-bold text-cyan-300">Fr. Language Hub</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
        {navItems}
    </ul>
  </div>
  <div className="navbar-end me-5">
  {user ? <>
    <div className="avatar online me-2 md:me-5">
  <div className="w-8 md:w-16 rounded-full">
    <img src={user.photoURL} />
  </div>
</div>
  <li className="btn btn-info btn-outline btn-sm md:btn-md "><NavLink onClick={handleLogout
    } to='/' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }>Logout</NavLink></li>
    </>:
    <><li className="btn btn-info btn-outline btn-sm md:btn-md me-5"><NavLink to='/login' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Login</NavLink></li>
  <li className="btn btn-info btn-outline btn-sm md:btn-md"><NavLink to='/register' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Register</NavLink></li>
  </>}
  </div>
</div>
    );
};

export default Navbar;