import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom';
import { FaBookmark, FaChalkboardTeacher, FaHome, FaRegBookmark, FaShoppingCart, FaWallet } from 'react-icons/fa';

const Dashboard = () => {
    // const isAdmin = true;
    return (
        <div>
            <Helmet>
                <title>Crazy Camp | Dashboard</title>
            </Helmet>
            <div className="drawer drawer-mobile lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" defaultChecked />
                <div className="drawer-content flex flex-col items-center justify-center">


                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        <li className='font-semibold mt-20 text-xl'>
                            <Link to='/dashboard/selectedClass' className='bg-black text-white'><FaBookmark></FaBookmark> My Selected Classes</Link>
                            <Link to='/dashboard/enrollClass' className='bg-black text-white mt-5'><FaShoppingCart></FaShoppingCart> My Enrolled Classes</Link>
                            <Link to='/dashboard/history' className='bg-black text-white mt-5'><FaWallet></FaWallet>Payment history</Link>
                        </li>


                        <div className="divider"></div>

                        {/* another */}
                        <li className='text-xl font-semibold'>
                            <Link className='bg-black text-white mt-5' to='/'><FaHome></FaHome> Home</Link>
                            <Link className='bg-black text-white mt-5' to='/instructors'><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</Link>
                            <Link className='bg-black text-white mt-5' to='/classes'><FaRegBookmark></FaRegBookmark> Classes</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;