import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrash } from 'react-icons/fa';

const MyClass = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    fetch('https://assignment-12-server-muntasirrifat23.vercel.app/add')
      .then(res => res.json())
      .then(data => {
        setPopularClass(data)
        // const classItem = data.filter(items => items.category === 'popular');
        // setPopularClass(classItem);
      });
  }, []);

  const handleDelete = (item) => {
    fetch(`https://assignment-12-server-muntasirrifat23.vercel.app/add/${item._id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // if (data.deletedCount > 0) {
        //   const updatedClasses = popularClass.filter(c => c._id !== item._id);
        //   setPopularClass(updatedClasses);
        // }
      });
  };

  return (
    <div className="w-full bd-white text-black">
      <Helmet>
        <title>Crazy Camp | My Class</title>
      </Helmet>

      <div className="overflow-x-auto mt-10 b-black-10 border-2 border-slate">
        <table className="table b-black-10">
          <thead className="bg-slate-200 text-black">
            <tr className="text-xl">
              <th>#</th>
              <th>Class Name</th>
              <th>Image</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Sit</th>
              <th>Price</th>

            </tr>
          </thead>

          <tbody>
            {popularClass.length > 0 ? (
              popularClass.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                          <img src={item.class} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold text-center">{item.img}</div>
                  </td>
                  <td>
                    <div className="font-bold text-center">{item.ins}</div>
                  </td>
                  <td>
                    <div className="font-bold text-center">{item.email}</div>
                  </td>
                  <td>
                    <div className="font-bold text-center">${item.sit}</div>
                  </td>
                  <td>
                    <div className="font-bold text-center">${item.price}</div>
                  </td>
                  {/* <th>
                    <button onClick={() => handleDelete(item)} className="btn btn-primary border-0 bg-red-800 text-white text-center">
                      <FaTrash />
                    </button>
                  </th> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No popular instructors found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
