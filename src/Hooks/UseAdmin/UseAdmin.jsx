import { useQuery } from "@tanstack/react-query";
import UseAuth from "../UseAuth/UseAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const UseAdmin = () => {
  const {user,loading} = UseAuth()
  const [axiosSecure] = useAxiosSecure();
  const {data: isAdmin, isLoading:isAdminLoading} = useQuery({
    queryKey:['isAdmin', user?.email],
    enabled:!loading && !!user?.email,
    queryFn:async () =>{
const res = await axiosSecure.get(`/users/admin/${user?.email}`)
console.log('Is admin response', res)
        return res.data.admin
    }
  })
  console.log(isAdmin,isAdminLoading)
  return[isAdmin,isAdminLoading]
};

export default UseAdmin;