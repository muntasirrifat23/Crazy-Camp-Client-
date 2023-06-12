import React from 'react';

const PopularItem = ({ popular }) => {
  const { name, image, email, classTaken, sportsName } = popular;
  return (
    <div>


      <div className="flex justify-center items-center ">
        <div className="card w-96 bg-base-100 shadow-xl text-black bg-white">
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body font-semibold">
            <h2 className="card-title font-bold text-2xl text-red-700">Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Class Taken: {sportsName}</p>
            <p>Sit Available: {classTaken}</p>
            <div className="card-actions">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularItem;