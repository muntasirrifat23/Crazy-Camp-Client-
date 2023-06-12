import React, { useContext } from 'react';
import { AuthContest } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import UseEnroll from '../Main/UseEnroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ClassesItem = ({classItem}) => {
    const { name, image, available,price, sportsName,_id } = classItem;
    const {user} = useContext(AuthContest)
    const[, refetch]= UseEnroll();
    const [enrollmentStatus, setEnrollmentStatus] = useState('');
    const [isEnrolled, setIsEnrolled] = useState(false);

    const handleEnroll = (classItem) => {
        if (user && user.email) {
          const enrollItem = {
            enrollID: _id,
            image,
            sportsName,
            name,
            price,
            available,
            email: user.email
          };
      
          fetch('https://assignment-12-server-muntasirrifat23.vercel.app/enroll', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(enrollItem)
          })
          .then(response => response.json())
          .then(data => {
            if (data.insertedId) {
              setEnrollmentStatus('success');
              refetch();
              setIsEnrolled(true);
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Class Enroll',
                showConfirmButton: false,
                timer: 1500
              });
            } else {
              setEnrollmentStatus('failure');
            }
          })
          .catch(error => {
            setEnrollmentStatus('failure');
            console.error(error);
          });
        }
      };
      
   
    return (
        <div>
             <Helmet>
                <title>Crazy Camp | Classes Item</title>
            </Helmet>

            <div className="flex justify-center items-center">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={image} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body font-semibold">
                                        <h2 className="card-title font-bold text-2xl">Sports: {sportsName}</h2>
                                        <p>Instructor: {name}</p>
                                        <p>Sit Available: {available}</p>
                                        <p>Price: ${price}</p>
{/* button */}
             <button
              onClick={() => handleEnroll(classItem)}
              className="btn btn-primary w-1/3 bg-black font-bold"
              disabled={isEnrolled}>
              {isEnrolled ? 'Enrolled' : 'Enroll'}
            </button>
                                        <div className="card-actions">
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
    );
};

export default ClassesItem;