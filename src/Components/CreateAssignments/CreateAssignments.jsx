import React, { useContext } from "react";
import { AuthContext } from "../Authentication/FirebaseProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateAssignments = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleFormCreate = async(e) =>{
    e.preventDefault()
    const form = e.target;

    const title = form.title.value;
    const description =form.description.value;
    const marks = parseFloat(form.marks.value);
    const thumbnail = form.image.value;
    const difficulty_level = form.difficulty.value;
    const due_date = form.date.value;
    const buyer_email = form.email.value;

    const createAssignmentData = {
        title,description,marks,thumbnail,difficulty_level,due_date,buyer_email
    }
   
    try{
        const{data} = await axios.post(`https://assignment11-server-site-peach.vercel.app/createassignment`,createAssignmentData)
        // console.log(data)
        toast.success('Successfully create a assignment...')
        navigate('/assignments')
    }
    catch(err)
    {
        console.log(err)
        toast.success(`Failed your create assignment process. Try Again...`)
    }
  }

  return (
    <div className="bg-gray-500 mt-10 mb-10 rounded-lg">
      <h1 className="text-4xl text-center font-bold pt-5 text-black">
        Create Your Assignment
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
                required
                type="text"
                placeholder="Enter your assignment Title.."
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Assignment Mark
              </label>
              <input
                id="lastname"
                name="marks"
                required
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
                defaultValue={user?.email}
                name="email"
                required
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Assignment Description
              </label>
              <input
                id="address"
                name="description"
                required
                type="text"
                placeholder="Enter your Assignment Description"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm">
                Thumbnail Image URL
              </label>
              <input
                id="city"
                name="image"
                required
                type="text"
                placeholder="Give the thumbnail image url"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">
              Difficulty Level
              </label>
              <select
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                name="difficulty"
                id="cars"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              {/* <input id="state"  placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" /> */}
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">
                Due-Date
              </label>
              <input
                id="zip"
                type="date"
                required
                name="date"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            
          </div>
        </fieldset>
         <button type="submit" className="btn btn-primary btn-block text-xl">Create Assignment</button>
      </form>
     
    </div>
  );
};

export default CreateAssignments;
