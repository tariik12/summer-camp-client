import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import UseAuth from "../../../../Hooks/UseAuth/UseAuth";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const StudentSelectedClass = () => {
const {user} =UseAuth()
    const [axiosSecure] = useAxiosSecure()
    const { data: selectedClasses = [], refetch } = useQuery(['selected'], async () => {
        const res = await axiosSecure.get(`/studentClass/${user.email}`)
        console.log(res.data)
        return res.data;
      })
      const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`https://summer-language-camp-server.vercel.app/studentClass/${_id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        refetch()
                Swal.fire(
                'Deleted!',
                'Your Class has been deleted.',
                'success'
              )
        
                    }
                })
           
            }
          })
        console.log(_id)
      
    }
    return (
        <div>
        <h1>AdminManageClass {selectedClasses.length}</h1>
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>instructorName</th>
                        <th>instructorEmail</th>
                        <th>languageName</th>
                        <th>price</th>
                        <th>seats</th>
                        <th>image</th>
                        <th>role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedClasses.map((selectedClasses, index) => <tr key={index}>
                        <td>
                            {index + 1}
                        </td>
                        <td>
                            {selectedClasses.instructorName}
                        </td>
                        <td>
                            {selectedClasses.instructorEmail}
                        </td>
                       
                        <td>
                            <button>{selectedClasses.languageName}</button>
                        </td>
                        <td>
                            <button>{selectedClasses.price}</button>
                        </td>
                        <td>
                            <button>{selectedClasses.seats}</button>
                        </td>
                        <td>
                            <button>{selectedClasses.seatBooking}</button>
                        </td>
                        <td>
                            <div className="avatar">
                                <div className="mask border w-12 h-12">
                                    <img src={selectedClasses.photo} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </td>
                        <td>
                            <button>{selectedClasses?.role}</button>
                            
                        </td>
                        <td>
                        {/* <div className="form-control ">
                            <select onClick={active} onChange={(e) =>{adminManageClass({e,selectedClasses})}}  className="input input-bordered" required >
                                <option>Update</option>
                                <option value='approved'>approved</option>
                                <option value="pending">pending</option>
                                <option value="decd">decd</option>
                            </select>
                        </div> */}
<Link  to={`/dashboard/studentEnrolled/${selectedClasses._id}`} ><button className="btn"
  >pay</button></Link>
                        <button onClick={()=>handleDelete(selectedClasses._id)} className="btn">delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default StudentSelectedClass;