import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom';
import { FaBookmark, FaChalkboardTeacher, FaHome, FaRegBookmark, FaShoppingCart, FaWallet } from 'react-icons/fa';
// import UserJHome from './UserJHome';

const Dashboard = () => {
    // To do load data
    const isAdmin = false; 
    return (
        <div className='text-black bg-white'>
            <Helmet>
                <title>Crazy Camp | Dashboard</title>
            </Helmet>
            <div className="drawer drawer-mobile lg:drawer-open text-black bg-white ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" defaultChecked />
                <div className="drawer-content flex flex-col items-center justify-center text-black bg-white">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-40">Open drawer</label>

                </div>
                <div className="drawer-side text-black bg-white ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay">
                    </label>
                    <ul className="menu p-4 w-80 h-full bg-base-100 text-base-content bg-slate-300">
                        {/* Sidebar content here */}

                        {
                            isAdmin?
                             <>
                             <li className=' p-3 rounded-xl font-bold mt-10 text-4xl text-center text-white bg-red-700'> Admin</li>
                             <li className='font-semibold mt-2 '>
                            <Link to='/dashboard/manageUser' className='bg-black text-white'><FaBookmark></FaBookmark> Manage User</Link>
                            <Link to='/dashboard/manageClass' className='bg-black text-white mt-5'><FaShoppingCart></FaShoppingCart> Manage Class</Link> 
                        </li>
                            </>:
                            // Student
                            <>
                              <li className=' p-3 rounded-xl font-bold text-center text-black bg-white'> Student</li>
                             <li className='font-semibold mt-2'>
                             <Link to='/dashboard/selectedClass' className='bg-black text-white'><FaBookmark></FaBookmark> My Selected Classes</Link>
                            <Link to='/dashboard/enrollClass' className='bg-black text-white mt-2'><FaShoppingCart></FaShoppingCart> My Enrolled Classes</Link>
                            <Link to='/dashboard/history' className='bg-black text-white mt-2'><FaWallet></FaWallet>Payment history</Link>
                            <div className="divider"></div>
{/* admin */}
                            <li className='p-3 rounded-xl font-bold text-center text-black mb-2 bg-white'>Admin</li>
                            <Link to='/dashboard/manageUser' className='bg-black text-white'><FaBookmark></FaBookmark> Manage User</Link>
                            <Link to='/dashboard/manageClass' className='bg-black text-white mt-2'><FaShoppingCart></FaShoppingCart> Manage Class</Link> 
                        </li>
                        <div className="divider"></div>
                        {/* instructor */}
                        <li className=' p-3 rounded-xl font-bold text-center text-black mb-2 bg-white'> Instructor</li>
                        <li>
                              <Link to='/dashboard/addClass' className='bg-black text-white'><FaBookmark></FaBookmark> Add Class</Link></li>
                        <li>
                              <Link to='/dashboard/myClass' className='bg-black text-white mt-2'><FaBookmark></FaBookmark>My Classes</Link></li>
                        
                            </>
                        }

                        <div className="divider"></div>

                        {/* another */}
                        <li className=' font-semibold'>
                            <Link className='bg-black text-white' to='/'><FaHome></FaHome> Home</Link>
                            <Link className='bg-black text-white mt-2' to='/instructors'><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</Link>
                            <Link className='bg-black text-white mt-2' to='/classes'><FaRegBookmark></FaRegBookmark> Classes</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;