import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleBanner from './SingleBanner';
import axios from 'axios';

const BannerSection = () => {
    // const assignments = useLoaderData().slice(0, 6); 
    const [assignments,setAssignments] = useState([])

    useEffect(()=>{
        const getData = async() =>{
            const {data} = await axios (`https://assignment11-server-site-peach.vercel.app/allAssignments`)
            setAssignments(data.slice(0, 6))

        }
        getData()
    },[])


    return (
        <div className='mt-10 mb-10 m-auto'>
        <h1 className='text-5xl text-center font-serif font-bold my-10 text-orange-500 bg-gradient-to-r from-orange-700 via-blue-900 to-black text-transparent bg-clip-text animate-gradient bg-300% underline'>Feature Assignments</h1>
        <Tabs>
            <div className='flex mx-auto items-center justify-center'>
                <TabList>
                    <Tab>All Assignments</Tab>
                </TabList>
            </div>

            <TabPanel>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
                    {assignments.map(assignment => <SingleBanner key={assignment._id} assignments={assignment} />)}
                </div>
            </TabPanel>
        </Tabs>
       <Link to={'/assignments'}>
       <div><button className="btn btn-block bg-blue-900 text-white ">See More</button></div>
       </Link>
    </div>
    );
};

export default BannerSection;









// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import SingalCard from './SingalCard';

// const Assignments = () => {
//     const assignments = useLoaderData().slice(0, 6); // Load only the first 6 assignments
//     console.log(assignments);

//     return (
//         <div className='mt-10 mb-10 m-auto'>
//             <h1 className='text-5xl text-center font-serif font-bold my-10 text-orange-500 bg-gradient-to-r from-orange-700 via-blue-900 to-black text-transparent bg-clip-text animate-gradient bg-300% underline'>Enjoyable Assignments</h1>
//             <Tabs>
//                 <div className='flex mx-auto items-center justify-center'>
//                     <TabList>
//                         <Tab>All Assignments</Tab>
//                     </TabList>
//                 </div>

//                 <TabPanel>
//                     <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
//                         {assignments.map(assignment => <SingalCard key={assignment._id} assignments={assignment} />)}
//                     </div>
//                 </TabPanel>
//             </Tabs>
//         </div>
//     );
// };

// export default Assignments;
