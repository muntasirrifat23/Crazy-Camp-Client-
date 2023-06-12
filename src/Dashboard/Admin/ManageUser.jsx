import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaGraduationCap, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseEnroll from '../../Component/Main/UseEnroll';

const ManageUser = () => {
    const { data: user=[], refetch } = useQuery(['user'], async () => {
        const res = await fetch('https://assignment-12-server-muntasirrifat23.vercel.app/user');
        return res.json();
    });

    // Admin
    const handleAdmin = (item) => {
        fetch(`https://assignment-12-server-muntasirrifat23.vercel.app/user/admin/${item._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You are now an admin',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };
    const handleInstructor = (item) => {
        fetch(`https://assignment-12-server-muntasirrifat23.vercel.app/user/instructor/${item._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You are now an Instructor',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };
    //   delete

    // const handleDelete = (item) => {
    //     Swal.fire({
    //         title: 'Delete Selected Class?',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     })
    //         .then((result) => {
    //             if (result.isConfirmed) {
    //                 const url = item.role === 'admin'
    //                     ? `https://assignment-12-server-muntasirrifat23.vercel.app/admin/${item._id}`
    //                     : `https://assignment-12-server-muntasirrifat23.vercel.app/instructor/${item._id}`;

    //                 fetch(url, {
    //                     method: 'DELETE',
    //                     headers: {
    //                         'Content-Type': 'application/json'
    //                     },
    //                     //   body: JSON.stringify(items)
    //                 })
    //                     .then(res => res.json())
    //                     .then(data => {
    //                         if (data.deletedCount > 0) {
    //                             refetch();
    //                             Swal.fire(
    //                                 'Deleted!',
    //                                 'Your class has been deleted.',
    //                                 'success'
    //                             )
    //                         }
    //                     })
    //             }
    //         })
    // }

    return (
        <div>
            <Helmet>
                <title>Crazy Camp | Manage User</title>
            </Helmet>
            <div className='text-4xl font-bold text-center mt-10'>Total User: {user.length}</div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>

                                    {item.role === 'admin' ? 'admin' :
                                        <button onClick={() => handleAdmin(item)} className="btn btn-primary border-0 bg-blue-800 text-white text-center mt-2">Admin</button>
                                    }
                                </td>
                                <td>

                                    {item.role === 'instructor' ? 'instructor' :
                                        <button onClick={() => handleInstructor(item)} className="btn btn-primary border-0 bg-green-800 text-white text-center mt-2">Instructor</button>
                                    }
                                </td>
                                {/* <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-primary border-0 bg-red-800 text-white text-center mt-2">
                                        <FaTrash></FaTrash>
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;
