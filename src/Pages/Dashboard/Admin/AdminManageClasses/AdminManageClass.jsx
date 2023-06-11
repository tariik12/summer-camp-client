// import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import { useState } from 'react';

const AdminManageClass = () => {
const [active,setActive] = useState(false)
    const [axiosSecure] = useAxiosSecure()
const { data: classesData = [], refetch : dataReface  } = useQuery({
    queryKey: ['cl'],
    queryFn: async () => {
            const res = await axiosSecure.get('/adminManageClasses')
            console.log(res.data)
            return res.data;
    
    },
})

// useEffect(() =>{
//     setClassesData(classesData)
// },[classesData])

    const adminManageClass = ({e,classData}) => {
        setActive(true)
        const role= e.target.value
         classData.role=role
        fetch(`http://localhost:5000/adminManageClasses/${classData._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify(classData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0){
                    dataReface()
                    console.log(classData)
                    toast.success('update success')
                }
              
            })
        console.log(classData)
  
    }
    return (
        <div>
            <h1>AdminManageClass {classesData.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>instructorName</th>
                            <th>instructorEmail</th>
                            <th>languageName</th>
                            <th>price</th>
                            <th>seats</th>
                            <th>image</th>
                            <th>role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classesData.map((classData, index) => <tr key={index}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {classData.instructorName}
                            </td>
                            <td>
                                {classData.email}
                            </td>
                           
                            <td>
                                <button>{classData.languageName}</button>
                            </td>
                            <td>
                                <button>{classData.price}</button>
                            </td>
                            <td>
                                <button>{classData.seats}</button>
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask border w-12 h-12">
                                        <img src={classData.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <button>{classData?.role}</button>
                            </td>
                            <td>
                            <div className="form-control ">
                                <select onClick={active} onChange={(e) =>{adminManageClass({e,classData})}}  className="input input-bordered" required >
                                    <option>Update</option>
                                    <option value='approved'>approved</option>
                                    <option value="pending">pending</option>
                                    <option value="decd">decd</option>
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

export default AdminManageClass;