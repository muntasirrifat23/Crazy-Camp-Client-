import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.jpeg'


const Navbar = () => {

    // const { user, logOut } = useContext(AuthContest);
    // const [carts] =UseCart();

    // const handleOut = () => {
    //   logOut()
    //     .then(result =>
    //       console.log(result)
    //     )
    //     .catch(err =>
    //       console.log(err.message)
    //     )
    // }

    const navOption = <>
        <Link className='ml-3 mt-2' to='/'>Home</Link>
        <Link className='ml-3 mt-2' to='/instructors'>Instructors</Link>
        <Link className='ml-3 mt-2' to='/classes'>Classes</Link>
        <Link className='ml-3 mt-2' to='/dashboard'>Dashboard</Link>
        <Link className='ml-3 mt-2' to='/login'>Login</Link>
        <Link className='ml-3 mt-2' to='/register'>Registration</Link>
    </>


    return (
        <div className='text-black'>

<div className="navbar bg-base-100 p-5 fixed z-10 bg-opacity-30 bg-black text-white w-full">
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
                    <a className="btn">Button</a>
                </div>
                {/*  <div className="navbar-end rounded-lg	">
          {
            user ?
              (<button onClick={handleOut} className='bg-black p-3 rounded-xl font-semibold border border-indigo-600'>Log Out
              </button>) :
              (<Link to='/login' className='bg-white p-3 rounded-xl font-semibold border border-indigo-600 text-red-600'>Login</Link>)
          } */}
            </div>
        </div>
    );
};

export default Navbar;