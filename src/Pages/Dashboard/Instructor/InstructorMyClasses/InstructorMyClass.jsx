import GetClasses from "../../../../Hooks/GetClasses/GetClasses";


const InstructorMyClass = () => {
    const [classes] = GetClasses();

    console.log(classes)
    return (
        <div>
        <h1>AdminManageUsers : {classes.length}</h1>
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
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default InstructorMyClass;