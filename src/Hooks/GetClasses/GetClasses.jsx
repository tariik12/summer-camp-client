import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import UseAuth from "../UseAuth/UseAuth";

const GetClasses = () => {
    const { user, loading } = UseAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: classes = [], } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (!loading && !!user?.email) {
                const res = await axiosSecure(`/classes?email=${user?.email}`,)
                console.log(res.data)
                return res.data;
            }
        },
    })
    console.log(classes)
    return [classes, refetch]
};

export default GetClasses;