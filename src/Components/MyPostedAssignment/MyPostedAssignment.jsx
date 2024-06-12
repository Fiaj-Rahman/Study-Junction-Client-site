import { useContext, useEffect, useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { AuthContext } from "../Authentication/FirebaseProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyPostedAssignment = () => {

    const {user} = useContext(AuthContext)
    const [assignment,setAssignment] = useState([])

    useEffect(()=>{
        
        getData()
    },[user])

    const getData = async() =>{
        const{data} = await axios(`https://assignment11-server-site-peach.vercel.app/myposted/${user?.email}`)
        setAssignment(data)
    }


  //  console.log(assignment)

   const handleDelete = async(id) =>{
    try{
        const{data} = await axios.delete(`https://assignment11-server-site-peach.vercel.app/mypostDelete/${id}`)
        // console.log(data)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
          toast.success('Successfully Delete your posted assignment')

        //   refresh auto ui 
          getData();
    }
    catch(err){
        console.log(err.message)
        toast.success('Failed Delete your posted assignment')
    }
   }



  return (
    <div className="mt-10 mb-10">
      <h1 className="text-4xl text-center font-bold">My Posted Assignment</h1>
      

      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-blue-800 text-xl font-semibold leading-tight">Total Post : {assignment.length}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Title</th>
                <th className="p-3">Marks</th>
                <th className="p-3">Difficulty-Level</th>
                <th className="p-3">Due-Date</th>
                <th className="p-3 text-right"></th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>

                {assignment.map(assignment=> (
                    <tr key={assignment._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <td className="p-3 font-bold">
                      <p>{assignment.title}</p>
                    </td>
                    <td className="p-3">
                      <p>{assignment.marks}</p>
                    </td>
                    <td className="p-3">
                      <p>{assignment.difficulty_level}</p>
                      
                    </td>
                    <td className="p-3">
                      <p>{assignment.due_date}</p>
                      
                    </td>
                    <td className="p-3 text-right">
                      <Link>
                      <button onClick={()=>handleDelete(assignment._id)}><p title="Delete" className="text-xl"><RiDeleteBinFill /></p></button>
                      </Link>
                    </td>
                    <td className="p-3 text-right">
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                       <Link to={`/update/${assignment._id}`}>
                       <button> <span title="Update" className="text-xl"><RxUpdate /></span></button>
                       </Link>
                      </span>
                    </td>
                  </tr>
                ))}

              {/* <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Microsoft Corporation</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="dark:text-gray-600">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="dark:text-gray-600">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p title="Delete" className="text-xl"><RiDeleteBinFill /></p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <span title="Update" className="text-xl"><RxUpdate /></span>
                  </span>
                </td>
              </tr>
              */}
            </tbody>
          </table>
        </div>
      </div>



    </div>
  );
};

export default MyPostedAssignment;
