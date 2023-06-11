import { useQuery } from "@tanstack/react-query";
import UseAuth from "../UseAuth/UseAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const UseAdmin = () => {
  const {user} = UseAuth()
  const [axiosSecure] = useAxiosSecure();
  const {data: isAdmin, isLoading:isAdminLoading} = useQuery({
    queryKey:['isAdmin', user?.email],
    queryFn:async () =>{
const res = await axiosSecure.get(`/users/admin/${user?.email}`)
console.log('Is admin response', res)
        return res.data.admin
    }
  })
  return[isAdmin,isAdminLoading]
};

export default UseAdmin;