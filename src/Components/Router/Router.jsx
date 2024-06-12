import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import ErroPage from "../ErrorPage/ErroPage";
import Home from "../Home/Home";
import Assignments from "../Assignments/Assignments";
import CreateAssignments from "../CreateAssignments/CreateAssignments";
import PendingAssignments from "../PendingAssignments/PendingAssignments";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import MyAssignments from "../MyAssignments/MyAssignments";
import PrivateRoute from "../Authentication/PrivateRoute";
import AssignmentsDetails from "../Assignments/AssignmentsDetails";
import TakeSubmission from "../Assignments/TakeSubmission";
import MyPostedAssignment from "../MyPostedAssignment/MyPostedAssignment";
import UpdatePage from "../UpdatePage/UpdatePage";
import SubmitMark from "../PendingAssignments/SubmitMark";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErroPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/assignments",
          element: <Assignments />,
          
        },
        {
          path: "/createAssignments",
          element: <PrivateRoute>
            <CreateAssignments />
          </PrivateRoute>,
        },
        {
          path: "/myPostedAssignment",
          element: <PrivateRoute>
            <MyPostedAssignment />
          </PrivateRoute>,
        },
        {
          path: "/update/:id",
          element: <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>,
           loader:({params}) => fetch(`https://assignment11-server-site-peach.vercel.app/assignment/${params.id}`)
        },
        {
          path: "/pendingAssignments",
          element: <PrivateRoute>
            <PendingAssignments />
          </PrivateRoute>,
        },
        {
          path: "/pendingAssignments/:id",
          element: <PrivateRoute>
            <SubmitMark />
          </PrivateRoute>,
          loader:({params}) => fetch(`https://assignment11-server-site-peach.vercel.app/pendingAssignments/${params.id}`)
        },
        {
          path: "/myAssignments",
          element: <PrivateRoute>
            <MyAssignments />
          </PrivateRoute>,
        },

        {
          path: "/assignmentDetails/:id",
          element: <PrivateRoute>
            <AssignmentsDetails />
          </PrivateRoute>,
          loader:({params}) => fetch(`https://assignment11-server-site-peach.vercel.app/assignment/${params.id}`)
        },


        {
          path: "/takeSubmission/:id",
          element: <PrivateRoute>
           <TakeSubmission></TakeSubmission>
          </PrivateRoute>,
          loader:({params}) => fetch(`https://assignment11-server-site-peach.vercel.app/takeSubmission/${params.id}`)
        },
        
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  export default router;