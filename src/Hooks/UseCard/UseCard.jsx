import { useQuery } from '@tanstack/react-query'
// import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const useCard = () => {
const {user,loading} = useContext(AuthContext)
// const token = localStorage.getItem('access-token')
// const [axiosSecure] = useAxiosSecure()

const { refetch, data: cart =[]  } = useQuery({
    queryKey: ['cards', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () =>{
        if(!loading && user?.email){
          const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`
        //   ,{headers:{
        //     authorization: `bearer ${token}`
        //   }}
          )
        return res.json();
        }
    },
    // queryFn: async () =>{
    //     if(!loading && user?.email){
    //       const res = await axiosSecure(`/carts?email=${user?.email}`)
    //       console.log('axiosSecure',res)
    //     return res.data;
    //     } 
    // },
  })

return [cart, refetch]
};

export default useCard;
