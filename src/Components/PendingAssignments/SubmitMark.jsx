import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/FirebaseProvider";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SubmitMark = () => {
  const { user } = useContext(AuthContext);
  const assignment = useLoaderData();
  const navigate = useNavigate()

  const {
    _id,title,assignment_mark,email,status,difficulty_level,pdfLinks,buyer_email,nodeTexts,ObtainedMark,assignmentFeedBack
  } = assignment || {}
 


  // const handleStatus = async (id, status, preStatus) => {
  //   console.log(id, status, preStatus);
  //   const { data } = await axios.patch(`https://assignment11-server-site-peach.vercel.app/pendingAssingments/${id}`,{ preStatus }
  //   );
  //   console.log(data);
  // };




  const handleFormCreate = async(e) =>{
    e.preventDefault()
    const form = e.target;

    const title = form.title.value;
    const assignment_mark = parseFloat(form.marks.value);
    const email = form.email.value;
    const status = form.status.value;
    const difficulty_level = form.difficulty_level.value;
    const pdfLinks = form.pdfLinks.value;
    const buyer_email = form.buyer_email.value;
    const nodeTexts = form.nodeTexts.value;
    const ObtainedMark = form.ObtainedMark.value;
    const assignmentFeedBack = form.assignmentFeedBack.value;
    const preStatus = "Complete";

    const updateAssignmentData = {
      title,assignment_mark,email,status,difficulty_level,pdfLinks,buyer_email,nodeTexts,ObtainedMark,assignmentFeedBack,preStatus
    }

    // console.log(updateAssignmentData)

    try{
      const{data} = await axios.put(`https://assignment11-server-site-peach.vercel.app/pendingAssingments/${_id}`,updateAssignmentData)
      // console.log(data)
      toast.success('Successfully submit assignment mark...')
      navigate('/pendingAssignments')
  }
  catch(err)
  {
      console.log(err)
      toast.success(`Failed submit assignment mark process.Try Again...`)
  }
   
  }




  return (
    <div>
      <div className="bg-gray-500 mt-10 mb-10 rounded-lg">
        <h1 className="text-4xl text-center font-bold pt-5 text-black">
          Submit Assignment Mark
        </h1>
        <form
        onSubmit={handleFormCreate}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Assignment Title
                </label>
                <input
                  id="firstname"
                  name="title"
                  disabled
                  required
                  defaultValue={title}
                  placeholder="Enter your assignment Title.."
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Total Assignment Mark
                </label>
                <input
                  id="lastname"
                  name="marks"
                  disabled
                  required
                  defaultValue={assignment_mark}
                  type="number"
                  placeholder="Enter your assignment mark"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  disabled
                  defaultValue={email}
                  name="email"
                  required
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Assignment Creator Email
                </label>
                <input
                  id="buyer_email"
                  disabled
                  defaultValue={buyer_email}
                  name="buyer_email"
                  required
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="text" className="text-sm">
                  Assignment-Status
                </label>
                <input
                  id="status"
                  disabled
                  defaultValue={status}
                  name="status"
                  required
                  type="text"
                  placeholder="Enter your email address"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="text" className="text-sm">
                  Difficulty-Level
                </label>
                <input
                  id="difficulty_level"
                  defaultValue={difficulty_level}
                  name="difficulty_level"
                  disabled
                  required
                  type="text"
                  placeholder="Enter your email address"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Assignment Pdf/Docx Link
                </label>
                <input
                  id="pdfLinks"
                  name="pdfLinks"
                  disabled
                  defaultValue={pdfLinks}
                  required
                  type="text"
                  placeholder="Enter your Assignment Description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  Short Node Text
                </label>
                <input
                  id="nodeTexts"
                  name="nodeTexts"
                  disabled
                  required
                  defaultValue={nodeTexts}
                  type="text"
                  placeholder="Give the thumbnail image url"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>


              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  Assignment Submitted Marks
                </label>
                <input
                  id="ObtainedMark"
                  name="ObtainedMark"
                  required
                  defaultValue={ObtainedMark}
                  type="text"
                  placeholder="Give the thumbnail image url"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>


              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  Assignment Feedback
                </label>
                <input
                  id="assignmentFeedBack"
                  name="assignmentFeedBack"
                  required
                  defaultValue={assignmentFeedBack}
                  type="text"
                  
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>


             
              

              
            </div>
          </fieldset>
          <button  type="submit" className="btn btn-primary btn-block text-xl">

          {/* onClick={()=>handleStatus(assignment._id,assignment.status,'Complete')}  */}
            Mark Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitMark;

{
  /* <div className="form-control mt-6">
          <button onClick={()=>handleStatus(assignment._id,assignment.status,'Complete')} className="btn btn-primary">Submit</button>
        </div> */
}
