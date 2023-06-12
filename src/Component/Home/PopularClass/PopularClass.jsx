import React, { useEffect, useState } from 'react';

const PopularClass = () => {
    const [popularClass, setPopularClass] = useState();
    useEffect(() => {
        fetch('https://assignment-12-server-muntasirrifat23.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                const classItem = data.filter(items =>
                    items.category === 'popular');
                setPopularClass(classItem);
            })

    }, [])
    return (
        <div  className='text-black'>
             <div className='text-center mx-auto border-b-4 border-black md:w-3/12 sm:w-3/12 lg:w-/12 uppercase text-4xl text-red-800 font-bold border-dotted mt-20 mb-10'>
                <div className=''>Popular classes</div>
                </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center mb-20 '>
                {popularClass && popularClass.length > 0 ? (
                    popularClass.map(classIte => (
                        <>
                            <div className="flex justify-center items-center ">
                                <div className="card w-96 bg-base-100 shadow-xl text-black bg-white">
                                    <figure className="px-10 pt-10">
                                        <img src={classIte.image} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body font-semibold">
                                        <h2 className="card-title font-bold text-2xl">Sports: {classIte.sportsName}</h2>
                                        <p>Instructor: {classIte.name}</p>
                                        <p>Class Taken: {classIte.sportsName}</p>
                                        <p>Sit Available: {classIte.available}</p>
                                        <p>Price: ${classIte.price}</p>
                                        <div className="card-actions">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    ))
                ) : (
                    <p>No popular instructors found.</p>
                )}
            </div>
        </div>
    );
};

export default PopularClass;