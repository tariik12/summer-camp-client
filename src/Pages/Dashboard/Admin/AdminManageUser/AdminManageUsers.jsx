// import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import { useState } from 'react';
const AdminManageUsers = () => {
    const [active,setActive] = useState(false)
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
                const res = await axiosSecure.get('/users')
                console.log(res.data)
                return res.data;
        },
    })
    

    const handleAdminInstructor = ({e,user}) => {
        setActive(true)
        const role= e.target.value;
         user.role=role
        fetch(`https://summer-language-camp-server.vercel.app/users/manageAdminUsers/${user._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                if (data.acknowledged) 
                console.log(data)
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
                                <select  onClick={active} onChange={(e) =>{handleAdminInstructor({e,user})}}  className="input input-bordered" required >
                                    <option>Update</option>
                                    <option value='student'>Student</option>
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