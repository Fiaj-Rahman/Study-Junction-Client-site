import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Components/Router/Router.jsx';
import FirebaseProvider from './Components/Authentication/FirebaseProvider.jsx';
import { ToastContainer } from 'react-toastify';



ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl m-auto'>
   <React.StrictMode >
   <FirebaseProvider>
     <RouterProvider router={router} />
     <ToastContainer />
   </FirebaseProvider>
  </React.StrictMode>
 </div>,
)
