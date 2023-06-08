import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
const AdminManageUsers = () => {
    
    const [users, setUsers] = useState([])
console.log(users)
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    const handleAdminInstructor = ({e,user}) => {
        const role= e.target.value
         user.role=role
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) 
                console.log(role)
            })
        console.log(user)
  
    }
   
    return (
        <div>
            <h1>AdminManageUsers : {users.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Photo</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr key={index}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask border w-12 h-12">
                                        <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <button>{user?.role}</button>
                            </td>
                            <td>
                            <div className="form-control ">
                                <select onChange={(e) =>{handleAdminInstructor({e,user})}}  className="input input-bordered" required >
                                    <option >up<FaEdit className="w-8"/></option>
                                    <option value='student'>student</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Instructor">Instructor</option>
                                </select>
                            </div>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminManageUsers;