// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../Authentication/FirebaseProvider';
// import { TbHandClick } from 'react-icons/tb';
// import { Link } from 'react-router-dom';

// const PendingAssignments = () => {

//     const {user} = useContext(AuthContext)
//     const [pendingAssignment,setPendingAssignment] = useState([])

//     useEffect(()=>{

//         getData()
//     },[user])

//     const getData = async() =>{
//         const{data} = await axios(`https://assignment11-server-site-peach.vercel.app/pendingAssignment/${user?.email}`)
//         setPendingAssignment(data)
//     }

//    console.log(pendingAssignment)

//     return (
//         <div className="mt-10 mb-10">
//         <h1 className="text-4xl text-center font-bold">Pending Assignment</h1>

//         <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
//           <h2 className="mb-4 text-blue-800 text-xl font-semibold leading-tight">
//             Total Post : {pendingAssignment.length}
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-xs">
//               <colgroup>
//                 <col />
//                 <col />
//                 <col />
//                 <col />
//                 <col />
//                 <col className="w-24" />
//               </colgroup>
//               <thead className="dark:bg-gray-300">
//                 <tr className="text-left">
//                   <th className="p-3">Title</th>
//                   <th className="p-3">Email</th>
//                   <th className="p-3">Total-Marks</th>
//                   <th className="p-3">Get-Marks</th>
//                   <th className="p-3">Status</th>
//                   <th className="p-3">Action</th>

//                 </tr>
//               </thead>
//               <tbody>

//                   {pendingAssignment.map(pendingAssignment=>(
//                       <tr key={pendingAssignment._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
//                       <td className="p-3 font-bold">
//                         <p>{pendingAssignment.title}</p>
//                       </td>
//                       <td className="p-3 font-bold">
//                         <p>{pendingAssignment.email}</p>
//                       </td>
//                       <td className="p-3">
//                         <p>{pendingAssignment.assignment_mark}</p>
//                       </td>
//                       <td className="p-3">
//                         <p>{pendingAssignment.ObtainedMark}</p>
//                       </td>
//                       <td className="p-3">
//                         <p>{pendingAssignment.preStatus || pendingAssignment.status}</p>
//                       </td>

//                       <Link to={`/pendingAssignments/${pendingAssignment._id}`}>
//                       <td className="p-3">
//                         <p className='text-xl'><TbHandClick /></p>
//                       </td>
//                       </Link>

//                     </tr>
//                   ))}

//                 {/* <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
//                     <td className="p-3">
//                       <p>97412378923</p>
//                     </td>
//                     <td className="p-3">
//                       <p>Microsoft Corporation</p>
//                     </td>
//                     <td className="p-3">
//                       <p>14 Jan 2022</p>
//                       <p className="dark:text-gray-600">Friday</p>
//                     </td>
//                     <td className="p-3">
//                       <p>01 Feb 2022</p>
//                       <p className="dark:text-gray-600">Tuesday</p>
//                     </td>
//                     <td className="p-3 text-right">
//                       <p title="Delete" className="text-xl"><RiDeleteBinFill /></p>
//                     </td>
//                     <td className="p-3 text-right">
//                       <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
//                         <span title="Update" className="text-xl"><RxUpdate /></span>
//                       </span>
//                     </td>
//                   </tr>
//                   */}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default PendingAssignments;

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/FirebaseProvider";
import { TbHandClick } from "react-icons/tb";
import { Link } from "react-router-dom";
import { RxUpdate } from "react-icons/rx";
import { IoLockClosed } from "react-icons/io5";

const PendingAssignments = () => {
  const { user } = useContext(AuthContext);
  const [pendingAssignment, setPendingAssignment] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `https://assignment11-server-site-peach.vercel.app/pendingAssignment/${user?.email}`
    );
    setPendingAssignment(data);
  };

  return (
    <div className="mt-10 mb-10">
      <h1 className="text-4xl text-center font-bold">Pending Assignment</h1>

      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-blue-800 text-xl font-semibold leading-tight">
          Total Post : {pendingAssignment.length}
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
                <th className="p-3">Email</th>
                <th className="p-3">Total-Marks</th>
                <th className="p-3">Get-Marks</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingAssignment.map((pendingAssignment) => (
                <tr
                  key={pendingAssignment._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3 font-bold">
                    <p>{pendingAssignment.title}</p>
                  </td>
                  <td className="p-3 font-bold">
                    <p>{pendingAssignment.email}</p>
                  </td>
                  <td className="p-3">
                    <p>{pendingAssignment.assignment_mark}</p>
                  </td>
                  <td className="p-3">
                    <p>{pendingAssignment.ObtainedMark}</p>
                  </td>
                  <td className="p-3">
                    <p>
                      {pendingAssignment.preStatus || pendingAssignment.status}
                    </p>
                  </td>
                  <td className="p-3">
                    {pendingAssignment.preStatus === "Complete" ? (
                      <span className="text-xl">
                        <IoLockClosed />
                      </span>
                    ) : (
                      <Link
                        to={`/pendingAssignments/${pendingAssignment._id}`}
                        className="text-xl"
                      >
                        <TbHandClick />
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingAssignments;
