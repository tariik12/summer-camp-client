import { FaCalendarAlt, FaHome, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin/UseAdmin";
import UseInstructor from "../Hooks/UseInstructor/UseInstructor";



const Dashboard = () => {

  // const isAdmin = true;
  const [isAdmin] = UseAdmin()
  const [isInstructor] = UseInstructor();
  // const isInstructor = false;
    return (
        <div>
            <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
     
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-cyan-700 text-white">
      {
        isAdmin?<>
        <li><NavLink to='/dashboard/adminManageUsers'><FaCalendarAlt/>Manage Users</NavLink></li>
        <li><NavLink to='/dashboard/adminManageClass'><FaHome/>Manage Classes</NavLink></li>
        </>
        :isInstructor?
        <>
        <li><NavLink to='/dashboard/instructorAddClass'><FaHome/>Add a Class</NavLink></li>
        <li><NavLink to='/dashboard/instructorMyClass'><FaCalendarAlt/>My Classes</NavLink></li>
        </>
        :
        <>
        <li><NavLink to='/dashboard/studentSelectedClass'><FaHome/>My Selected Classes</NavLink></li>
        <li><NavLink to='/dashboard/studentEnrolled'><FaCalendarAlt/>My Enrolled Classes</NavLink></li>
        <li><NavLink to='/dashboard/studentPayment'><FaWallet/> Payment History</NavLink></li>
        </>
      }
      <div className="divider"></div>
      <li><NavLink to='/'><FaHome/> Home</NavLink></li>
      <li><NavLink to='/instructors'><FaCalendarAlt/>Instructors</NavLink></li>
      <li><NavLink to='/classes'><FaWallet/>Classes</NavLink></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;