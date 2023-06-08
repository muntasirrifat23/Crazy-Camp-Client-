import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './Home.css'
const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div>
           <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleMode} className='mt-20'>Toggle Mode</button>
      <div className="content">
        {/* Place your website content here */}
      </div>
    </div>
        </div>
    );
};

export default Home;