import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import UseAuth from "../../../../Hooks/UseAuth/UseAuth";


const ShowStudentEnrolledClass = () => {
    const {user} = UseAuth()
    const [axiosSecure] = useAxiosSecure();
    const {  data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
                const res = await axiosSecure.get(`/payments/${user.email}`)
                console.log(res.data)
                return res.data;
        },
    })
    return (
        <div>
        <h1>My Enrolled : {users.length}</h1>
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
                            {user.seats}
                        </td>
                        <td>
                            {user.studentEmail}
                        </td>
                        <td>
                            {user.instructorName
}
                        </td>
                        <td>
                            {user.instructorEmail
}
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
                        {/* <div className="form-control ">
                            <select  onClick={active} onChange={(e) =>{handleAdminInstructor({e,user})}}  className="input input-bordered" required >
                                <option>Update</option>
                                <option value='student'>Student</option>
                                <option value="Admin">Admin</option>
                                <option value="Instructor">Instructor</option>
                            </select>
                        </div> */}
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ShowStudentEnrolledClass;