import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../Hooks/UseAuth/UseAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import moment from "moment/moment";


const StudentPayment = () => {

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
        <h1>My Total Payment History : {users.length}</h1>
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>TransactionId:</th>
                        <th>Price</th>
                        <th>status</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => <tr key={index}>
                        <td>
                            {index + 1}
                        </td>
                        <td>
                            {user.transactionId}
                        </td>
                        <td>
                            {user.price
}
                        </td>
                        <td>
                            {user.status}
                        </td>
                        <td>
                       { moment(user.date).format('MMMM Do YYYY, h:mm:ss a')}
                        </td>

                    </tr>)}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default StudentPayment;