import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../Authentication/FirebaseProvider";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TakeSubmission = () => {
  const { user } = useContext(AuthContext);
  const assignment = useLoaderData();

  const {
    _id,
    title,
    description,
    marks,
    thumbnail,
    difficulty_level,
    due_date,
    buyer_email,
  } = assignment || {};

  const handleFormSubmission = async(e)=>{
    e.preventDefault()
    const form = e.target
    const assignmentId = _id
    const assignment_mark = marks;
    const pdfLinks = form.fileLink.value;
    const nodeTexts = form.noteText.value;
    const email = form.email.value;
    const ObtainedMark = "";
    const assignmentFeedBack = "N/A"
    // const buyer_emails = buyer_email;
    const status = 'Pending'

    const submitAssignment = {
      assignmentId,
      assignment_mark,
      pdfLinks,
      nodeTexts,
      email,
      buyer_email,
      status,
      title,
      difficulty_level,
      ObtainedMark,
      assignmentFeedBack

    }
    // console.log(submitAssignment)
   
    try{
      const {data} =await axios.post('https://assignment11-server-site-peach.vercel.app/submittedAssignments',submitAssignment)
      // console.log(data)
      if(data)
        {
          toast.success("Successfully Submit your assignment..");
        }
      
    }
    catch (err)
    {
      console.log(err)
    }
  }

  return (
    <div>
      <Card
        className="mt-10 mb-10 text-center items-center"
        color="transparent"
        shadow={false}
      >
        <Typography variant="h4" color="blue-gray">
          Assignment Submission
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Here submit your assignment.
        </Typography>


        <form onSubmit={handleFormSubmission} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              type="email"
              name="email"
              required
              size="lg"
              defaultValue={user?.email}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 font-bold focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Pdf/Docx Link
            </Typography>
            <Input
              size="lg"
              name="fileLink"
              required
              placeholder="This input fillup with your submitted pdf or docx."
              className=" !border-t-blue-gray-500 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Quick Note Text
            </Typography>
            <Input
              size="lg"
              name="noteText"
              required
              placeholder="Type your short note text..."
              className=" !border-t-blue-gray-500 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            Submitted
          </Button>
        </form>


      </Card>
    </div>
  );
};

export default TakeSubmission;








// import React from 'react';

// const TakeSubmission = () => {
//   return (
//     <div>
//       <h1>nehal</h1>
//     </div>
//   );
// };

// export default TakeSubmission;