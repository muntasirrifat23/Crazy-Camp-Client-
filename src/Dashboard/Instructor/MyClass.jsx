import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrash } from 'react-icons/fa';

const MyClass = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/classes')
      .then(res => res.json())
      .then(data => {
        const classItem = data.filter(items => items.category === 'popular');
        setPopularClass(classItem);
      });
  }, []);

  const handleDelete = (item) => {
    fetch(`http://localhost:5000/classes/${item._id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          const updatedClasses = popularClass.filter(c => c._id !== item._id);
          setPopularClass(updatedClasses);
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Crazy Camp | MyClass</title>
      </Helmet>

      <div className="overflow-x-auto mt-10 b-black-10 border-2 border-slate">
        <table className="table b-black-10">
          <thead className="bg-slate-200 text-black">
            <tr className="text-xl">
              <th>#</th>
              <th>Name</th>
              <th>Sports</th>
              <th>Instructor Name</th>
              <th>Available Sit</th>
              <th>Price</th>
              <th>Action</th>
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
                          <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold text-center">{item.sportsName}</div>
                  </td>
                  <td>
                    <div className="font-bold text-center">{item.name}</div>
                  </td>
                  <td>
                    <div className="font-bold text-center">{item.available}</div>
                  </td>
                  <td>
                    <div className="font-bold text-center">${item.price}</div>
                  </td>
                  <th>
                    <button onClick={() => handleDelete(item)} className="btn btn-primary border-0 bg-red-800 text-white text-center">
                      <FaTrash />
                    </button>
                  </th>
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
