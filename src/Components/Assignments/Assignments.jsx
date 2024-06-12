
// // import { useLoaderData } from 'react-router-dom';
// import { useEffect, useState } from 'react'; // Import useState hook
// import SingalCard from './SingalCard';
// import axios from 'axios';

// const Assignments = () => {
//     // const assignments = useLoaderData();

//     const [assignments,setAssignments] = useState([])

//     useEffect(()=>{
//         const getData = async() =>{
//             const {data} = await axios (`https://assignment11-server-site-peach.vercel.app/allAssignments`)
//             setAssignments(data)

//         }
//         getData()
//     },[])

// // console.log(assignments)
//     const [selectedDifficulty, setSelectedDifficulty] = useState('All'); // State to track selected difficulty

//     const handleChange = (event) => {
//         setSelectedDifficulty(event.target.value); // Update selected difficulty when dropdown value changes
//     };

//     return (
//         <div className='mt-10 mb-10 m-auto'>
//             <h1 className='text-5xl text-center font-serif font-bold my-10 text-orange-500 bg-gradient-to-r from-orange-700 via-blue-900 to-black text-transparent bg-clip-text animate-gradient bg-300% underline'>Enjoyable Assignments</h1>
            
//             {/* Dropdown button for selecting difficulty */}
//             <div className='flex justify-center mb-6'>
//                 <select value={selectedDifficulty} onChange={handleChange} className='px-4 py-2 border border-gray-300 rounded-md bg-black text-white font-bold'>
//                     <option value='All'>All Assignments</option>
//                     <option value='easy'>Easy Assignments</option>
//                     <option value='medium'>Medium Assignments</option>
//                     <option value='hard'>Hard Assignments</option>
//                 </select>
//             </div>

//             {/* Filter assignments based on selected difficulty */}
//             <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
//                 {selectedDifficulty === 'All' ? (
//                     assignments.map(assignments => <SingalCard key={assignments._id} assignments={assignments} />)
//                 ) : (
//                     assignments.filter(j => j.difficulty_level === selectedDifficulty).map(assignments => <SingalCard key={assignments._id} assignments={assignments} />)
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Assignments;




import { useEffect, useState } from 'react';
import SingalCard from './SingalCard';
import axios from 'axios';

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get('https://assignment11-server-site-peach.vercel.app/allAssignments');
                setAssignments(data);
            } catch (error) {
                console.error('Error fetching assignments:', error);
            }
        };
        getData();
    }, []);

    const handleChange = (event) => {
        setSelectedDifficulty(event.target.value);
    };

    return (
        <div className='mt-10 mb-10 m-auto'>
            <h1 className='text-5xl text-center font-serif font-bold my-10 text-orange-500 bg-gradient-to-r from-orange-700 via-blue-900 to-black text-transparent bg-clip-text animate-gradient bg-300% underline'>Enjoyable Assignments</h1>
            
            <div className='flex justify-center mb-6'>
                <select value={selectedDifficulty} onChange={handleChange} className='px-4 py-2 border border-gray-300 rounded-md bg-black text-white font-bold'>
                    <option value='All'>All Assignments</option>
                    <option value='easy'>Easy Assignments</option>
                    <option value='medium'>Medium Assignments</option>
                    <option value='hard'>Hard Assignments</option>
                </select>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {selectedDifficulty === 'All' ? (
                    assignments.map(assignment => <SingalCard key={assignment._id} assignments={assignment} />)
                ) : (
                    assignments.filter(assignment => assignment.difficulty_level === selectedDifficulty).map(assignment => <SingalCard key={assignment._id} assignments={assignment} />)
                )}
            </div>
        </div>
    );
};

export default Assignments;
