import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Error";
import Dashboard from "../Layout/Dashboard";
import AdminManageUsers from "../Pages/Dashboard/Admin/AdminManageUser/AdminManageUsers";
import AdminManageClass from "../Pages/Dashboard/Admin/AdminManageClasses/AdminManageClass";
import InstructorAddClass from "../Pages/Dashboard/Instructor/InstructorAddClass/InstructorAddClass";
import InstructorMyClass from "../Pages/Dashboard/Instructor/InstructorMyClasses/InstructorMyClass";
import StudentEnrolled from "../Pages/Dashboard/Student/StudentEnrolledClass/StudentEnrolled";
import StudentPayment from "../Pages/Dashboard/Student/StudentPaymentHistory/StudentPayment";
import StudentSelectedClass from "../Pages/Dashboard/Student/StudentSelectedClasses/StudentSelectedClass";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        }
        ,
        {
          path:'/login',
          element:<Login></Login>
        }
        ,
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/classes',
          element:<Classes></Classes>
        },
        {
          path:'instructors',
          element:<Instructors></Instructors>
        }

      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'adminManageUsers',
          element:<AdminManageUsers></AdminManageUsers>
        },
        {
          path:'adminManageClass',
          element:<AdminManageClass></AdminManageClass>
        },
        {
          path:'instructorAddClass',
          element:<InstructorAddClass></InstructorAddClass>
        },
        {
          path:'instructorMyClass',
          element:<InstructorMyClass></InstructorMyClass>
        },
        
        {
          path:'studentEnrolled',
          element:<StudentEnrolled></StudentEnrolled>
        },
        {
          path:'studentPayment',
          element:<StudentPayment></StudentPayment>
        },
        {
          path:'studentSelectedClass',
          element:<StudentSelectedClass></StudentSelectedClass>
        },
        

      ]
      
    }
  ]);