import { useEffect, useState } from "react";


const AdminManageClass = () => {
    const [classesData, setClassesData] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/classes')
        .then(res =>res.json())
        .then(data => {
            setClassesData(data)
        })
    },[])

    const adminManageClass = ({e,classData}) => {
        const role= e.target.value
         classData.role=role
        fetch(`http://localhost:5000/classes/${classData._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) 
                console.log(role)
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
                                {classData.instructorEmail}
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
                                <select onChange={(e) =>{adminManageClass({e,classData})}}  className="input input-bordered" required >
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