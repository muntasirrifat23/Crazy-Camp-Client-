import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.jpeg'
import { AuthContest } from '../AuthProvider/AuthProvider';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContest);
    const handlelogOut = () => {
        logOut()
            .then(result =>
                console.log(result)
            )
            .catch(error =>
                console.log(error.message)
            )
    }

    const navOption = <>
        {user ? <>
            <Link className='ml-3 mt-2' to='/'>Home</Link>
            <Link className='ml-3 mt-2' to='/instructors'>Instructors</Link>
            <Link className='ml-3 mt-2' to='/classes'>Classes</Link>
            <Link className='ml-3 mt-2' to='/dashboard'> Dashboard</Link>
            
            <Link className='ml-3 mt-2' to='/login'>Login</Link>
            <Link className='ml-3 mt-2' to='/register'>Registration</Link>
        </> :
            <>
                <Link className='ml-3 mt-2' to='/'>Home</Link>
                <Link className='ml-3 mt-2' to='/instructors'>Instructors</Link>
                <Link className='ml-3 mt-2' to='/classes'>Classes</Link>
                <Link className='ml-3 mt-2' to='/login'>Login</Link>
                <Link className='ml-3 mt-2' to='/register'>Registration</Link>
            </>}

    </>


    return (
        <div>

            <div className="navbar bg-base-100 p-5 fixed mb-15 z-10 w-full bg-opacity-40 bg-black text-white top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 font-semibold text-black">
                            {navOption}
                        </ul>
                    </div>

                    {/* Logo name */}
                    <div className='font-bold text-3xl ml-2' style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
                        Camp Crazy
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl text-white ">
                        {navOption}
                    </ul>
                </div>


                <div className="navbar-end">
                    {
                        user ?
                            (<button onClick={handlelogOut} className='bg-black p-3 rounded-xl font-semibold border border-indigo-600'> <div className='flex justify-center items-center'>
                                <div>
                                    <img className='rounded-full w-1/2 justify-end' src={user?.photoURL} />
                                </div>
                                <div className='p-3'>Log Out</div>
                            </div>
                            </button>) :
                            (<Link to='/login' className='bg-white p-3 rounded-xl font-semibold border border-indigo-600 text-red-600'>Login</Link>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Navbar;