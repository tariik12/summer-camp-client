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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import ShowStudentEnrolledClass from "../Pages/Dashboard/Student/ShowStudentEnrolledClass/ShowStudentEnrolledClass";
import InstructorUpdateClass from "../Pages/Dashboard/Instructor/InstructorUpdateClass/InstructorUpdateClass";


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
          path:'/classes/:id',
          element:<InstructorUpdateClass></InstructorUpdateClass>,
        loader:({params})=> fetch(`https://summer-language-camp-server.vercel.app/classes/${params.id}`,{
            method:"GET",
            headers:{
              Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
          })
        },
        {
          path:'instructors',
          element:<Instructors></Instructors>
        }

      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'adminManageUsers',
          element:<AdminRoute><AdminManageUsers></AdminManageUsers></AdminRoute>
        },
        {
          path:'adminManageClass',
          element:<AdminRoute><AdminManageClass></AdminManageClass></AdminRoute>
        },
        {
          path:'instructorAddClass',
          element:<InstructorRoute><InstructorAddClass></InstructorAddClass></InstructorRoute>
        },
        {
          path:'instructorMyClass',
          element:<InstructorRoute><InstructorMyClass></InstructorMyClass></InstructorRoute>
        },
        
        {
          path:'studentEnrolled/:id',
          element:<StudentEnrolled></StudentEnrolled>,
        loader:({params})=> fetch(`https://summer-language-camp-server.vercel.app/studentClassById/${params.id}`,{
            method:"GET",
            headers:{
              Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
          })
        },
        {
          path:'studentPayment',
          element:<StudentPayment></StudentPayment>
        },
        {
          path:'studentSelectedClass',
          element:<StudentSelectedClass></StudentSelectedClass>
        },
        {
          path:'ShowStudentEnrolledClass',
          element:<ShowStudentEnrolledClass></ShowStudentEnrolledClass>
        },
        

      ]
      
    }
  ]);