import { useEffect, useState } from "react";



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
                            <div className="form-control ">
                                <select onChange={(e) =>{console.log(e.target.value)}} className="input input-bordered" required >
                                    <option value={user.role}>Student</option>
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