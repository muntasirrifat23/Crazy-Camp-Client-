import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ClassesItem from './ClassesItem';

const Classes = () => {
    const [classes, setclasses] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-server-muntasirrifat23.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setclasses(data);
            })

    }, [])
    return (
        <div className='text-black bg-white'>
            <Helmet>
                <title>Crazy Camp | Classes</title>
            </Helmet>
            <div className='text-black bg-white'>
                <div className='text-center mx-auto  border-b-4 border-black md:w-3/12 sm:w-5/12 lg:w-3/12 uppercase text-4xl text-red-800 font-bold border-dotted mt-40'>
                    <div className=''>All classes</div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center mt-10 mb-10 text-black bg-white'>

                    {classes && classes.length > 0 ? (classes.map(classItem => (
                        <>
                            <ClassesItem key={classItem._id}
                            classItem={classItem}>

                            </ClassesItem>
                        </>
                    ))
                    ) : (
                        <p>No classes classes found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Classes;