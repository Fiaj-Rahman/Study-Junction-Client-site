import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/FirebaseProvider";
import axios from "axios";

const MyAssignments = () => {

    const {user} = useContext(AuthContext)
    const [myAssignment,setMyAssignment] = useState([])

    useEffect(()=>{
        
        getData()
    },[user])

    const getData = async() =>{
        const{data} = await axios(`https://assignment11-server-site-peach.vercel.app/submittedAssignment/${user?.email}`)
        setMyAssignment(data)
    }


  //  console.log(myAssignment)



  return (
    <div className="mt-10 mb-10">
      <h1 className="text-4xl text-center font-bold">My Assignment</h1>

      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-blue-800 text-xl font-semibold leading-tight">
          Total Post : {myAssignment.length}
        </h2>
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
                <th className="p-3">Status</th>
                <th className="p-3">Obtained Marks</th>
                <th className="p-3 text-right">FeedBack</th>
                
              </tr>
            </thead>
            <tbody>

                {myAssignment.map(myAssignment=>(
                    <tr key={myAssignment._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <td className="p-3 font-bold">
                      <p>{myAssignment.title}</p>
                    </td>
                    <td className="p-3">
                      <p>{myAssignment.assignment_mark}</p>
                    </td>
                    <td className="p-3">
                      <p>{myAssignment.preStatus || myAssignment.status}</p>
                    </td>
                    <td className="p-3">
                    <p>{myAssignment.ObtainedMark}</p>
                    </td>
                    
                    <td className="p-3">
                      <p className="text-center">{myAssignment?.assignmentFeedBack}</p>
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

export default MyAssignments;
