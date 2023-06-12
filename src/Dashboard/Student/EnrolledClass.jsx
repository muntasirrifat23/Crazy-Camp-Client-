import React from 'react';
import UseEnroll from '../../Component/Main/UseEnroll';
import { Helmet } from 'react-helmet-async';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const EnrolledClass = () => {
    const [enrolled, refetch] = UseEnroll();
    const total = enrolled.reduce((sum, item) => item.price + sum, 0)

    const handleDelete=(items)=>{
        Swal.fire({
            title: 'Delete Selected Class?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          .then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-12-server-muntasirrifat23.vercel.app/enroll/${items._id}`,{
                    method:'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    //   body: JSON.stringify(items)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount> 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your class has been deleted.',
                            'success'
                          )
                    }     
                })
            }
          })
    }


    return (
        <div className='w-full'>
            <Helmet>
                <title>Crazy Camp | Enrolled Class</title>
            </Helmet>

            <div className='flex font-semibold text-2xl mt-10 justify-evenly items center'>
                <div>Total Select Class: {enrolled.length} </div>
                <div >Total Price: ${total} </div>
                
            </div>

{/* Table */}
            <div className="overflow-x-auto mt-10 b-black-10 border-2 border-slate">
  <table className="table b-black-10">
    {/* head */}
    <thead className='bg-slate-200 text-black'>
      <tr className='text-xl'>
        <th>#</th>
        <th>Name</th>
        <th>Sports</th>
        <th>Instructor Name</th>
        <th>Available Sit</th>
        <th>Price</th>
        <th> Action</th>
        <th> Payment</th>
      </tr>
    </thead>


    <tbody>
        {
            enrolled.map((items, index)=> <tr key={items._id}>
                <th>
                 {index+1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16">
                        <img src={items.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                         
                  </div>
                </td>
                <td>
                <div className="font-bold text-center">{items.sportsName}</div>
                </td>
                <td>
                <div className="font-bold text-center">{items.name}</div>
                </td>
                <td>
                <div className="font-bold text-center">{items.available}</div>
                </td>
                <td>
                <div className="font-bold text-center">${items.price}</div>
                </td>
                <th>
                  <button onClick={()=>handleDelete(items)} className="btn btn-primary border-0 bg-red-800 text-white text-center"><FaTrash></FaTrash></button>
                </th>
                <td>
                <Link to='/dashboard/payment'> 
                <button className="btn btn-error btn-sm">Pay</button>
                </Link>
                </td>
              </tr>)
        }
     
     </tbody>
    
  </table>
</div>

        </div>
    );
};

export default EnrolledClass;