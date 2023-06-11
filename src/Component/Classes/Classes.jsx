import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    const [classes, setclasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setclasses(data);
            })

    }, [])
    return (
        <div>
            <Helmet>
                <title>Crazy Camp | Classes</title>
            </Helmet>
            <div>
                <div className='text-center mx-auto  border-b-4 border-black md:w-3/12 sm:w-5/12 lg:w-3/12 uppercase text-4xl text-red-800 font-bold border-dotted mt-40'>
                <div className=''>All classess</div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center mt-10 mb-10'>

                    {classes && classes.length > 0 ? (
                        classes.map(classItem => (
                            <>
                                <div className="flex justify-center items-center">
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={classItem.image} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body font-semibold">
                                            <h2 className="card-title font-bold text-2xl">Sports: {classItem.sportsName}</h2>
                                            <p>Instructor: {classItem.name}</p>
                                            <p>Sit Available: {classItem.available}</p>
                                            <p>Price: ${classItem.price}</p>

                                            <button className='btn btn-primary w-1/3 bg-black font-bold '> Enroll</button>
                                            <div className="card-actions">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    ) : (
                        <p>No classes classess found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Classes;