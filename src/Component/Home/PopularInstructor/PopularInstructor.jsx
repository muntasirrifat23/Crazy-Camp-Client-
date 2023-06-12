import React, { useEffect, useState } from 'react';
import PopularItem from './PopularItem';

const PopularInstructor = () => {
    const [popularIns, setPopularInstructor] = useState();
    useEffect(() => {
        fetch('https://assignment-12-server-muntasirrifat23.vercel.app/instructor')
            .then(res => res.json()) 
            .then(data => {
                const polularItem = data.filter(items =>
                    items.category === 'popular');
                setPopularInstructor(polularItem);
            })

    }, [])
    return (
        <div className='text-black'>
            <div className='text-center mx-auto my-10 border-b-4 border-black md:w-3/12 sm:w-5/12 lg:w-3/12 mt-15 uppercase text-4xl text-red-800 font-bold border-dotted'>
                Popular Instructor
            </div>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center '>
                    {popularIns && popularIns.length > 0 ? (
                        popularIns.map(popular => (
                            <PopularItem
                                key={popular._id}
                                popular={popular}
                            />
                        ))
                    ) : (
                        <p>No popular instructors found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PopularInstructor;