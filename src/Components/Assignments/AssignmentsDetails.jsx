import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authentication/FirebaseProvider";

const AssignmentsDetails = () => {
  const {user} = useContext(AuthContext)
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

  const isBuyer = () => buyer_email === user?.email

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={thumbnail} className="w-3/4 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <p className="font-bold mt-2 mb-2">
              <span className="text-blue-900 text-2xl">Marks: </span>{" "}
              <span className="text-2xl">{marks}</span>
            </p>
            <p className="text-2xl font-bold mb-2">
              <span className="text-blue-900">Difficulty-Level:</span>{" "}
              <span>{difficulty_level}</span>
            </p>

            <p className="font-bold mb-3">Due-Date: {due_date}</p>
            {/* <Link to={`/takeSubmission/${_id}`}><button className="btn btn-primary">Take Assignment</button></Link> */}

            <Link to={isBuyer() ? '#' : `/takeSubmission/${_id}`}>
              <button className={`btn btn-primary ${isBuyer() ? 'cursor-not-allowed opacity-50' : ''}`} disabled={isBuyer()}>Take Assignment</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsDetails;
