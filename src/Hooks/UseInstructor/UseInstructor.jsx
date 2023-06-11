import { useQuery } from "@tanstack/react-query";
import UseAuth from "../UseAuth/UseAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const UseInstructor = () => {
  const {user} = UseAuth()
  const [axiosSecure] = useAxiosSecure();
  const {data: isInstructor, isLoading : isInstructorLoading} = useQuery({
    queryKey:['isInstructor', user?.email],
    queryFn:async () =>{
const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
console.log('Is Instructor response', res)
        return res.data.instructor;
    }
  })
  return[isInstructor,isInstructorLoading]
};

export default UseInstructor;