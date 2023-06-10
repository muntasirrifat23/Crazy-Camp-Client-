import React from 'react';

const PopularItem = ({ popular }) => {
    const { name, image, email,classTaken,sportsName } = popular;
    return (
        <div>
             {/* <div className='flex mx-auto flex justify-center'>
            <div>
                <img src={image} className="w-[100px]" style={{borderRadius:'0px 200px 200px 200px'}}></img>
            </div>
            <div className='mr-3 ml-3 w-6/12'>
                <h2 className='text-2xl mb-3'>{name}------------</h2>
               
            </div>
            <p className='text-red-600 mr-0'>${email}</p>


        </div> */}

<div className="flex justify-center items-center ">
<div className="card w-96 bg-base-100 shadow-xl">
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