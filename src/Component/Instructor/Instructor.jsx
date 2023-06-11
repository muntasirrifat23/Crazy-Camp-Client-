import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Instructor = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructor(data);
            })

    }, [])

    return (

        <div className='mb-10'>
            <div className=''>

            </div>
            <Helmet>
                <title>Crazy Camp | Instructor</title>
            </Helmet>

            <div>
                <div className='text-center mx-auto  border-b-4 border-black md:w-3/12 sm:w-5/12 lg:w-3/12 uppercase text-4xl text-red-800 font-bold border-dotted mt-40'>
                    <div className=''>All Instructors</div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center mt-10'>

                    {instructor && instructor.length > 0 ? (
                        instructor.map(inst => (
                            <>
                                <div className="flex justify-center items-center">
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={inst.image} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body font-semibold">
                                            <h2 className="card-title font-bold text-2xl text-red-700">Name: {inst.name}</h2>
                                            <p>Email: {inst.email}</p>
                                            <p>Class Taken: {inst.sportsName}</p>
                                            <p>Sit Available: {inst.classTaken}</p>
                                            <div className="card-actions">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    ) : (
                        <p>No instructor instructors found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Instructor;