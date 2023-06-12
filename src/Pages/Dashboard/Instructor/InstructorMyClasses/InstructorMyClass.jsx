import { Link } from "react-router-dom";
import GetClasses from "../../../../Hooks/GetClasses/GetClasses";


const InstructorMyClass = () => {
    const [classes] = GetClasses();
    const total = classes.reduce((sum, item) => sum + item.seatBooking, 0);
    console.log(classes)
    return (
        <div>
        <h1>AdminManageUsers : {classes.length}</h1>
        <h1>Total Enrolled Student : {total}</h1>
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
                        <th>Seat booking</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((user, index) => <tr key={index}>
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
                                    <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </td>
                        <td>
                            <button>{user?.role}</button>
                        </td>
                        <td>
                       {user.seatBooking}
                        </td>
                        <td>
                      <Link to={`/classes/${user._id}`}> <button>update</button></Link>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default InstructorMyClass;