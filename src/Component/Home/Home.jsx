import { useState } from 'react';
import './Home.css'
import { FaToggleOn } from 'react-icons/fa';
import TopSlide from './TopSlide/TopSlide';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div>
            <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
                <button onClick={toggleMode} className='mt-20 text-4xl'>
                    <div>
                    <div className='mt-10 ml-5 flex'><FaToggleOn></FaToggleOn>
                    </div>
                    </div>
                    
                     </button>
                <div className="content">
                    {/*  content  */}
                    <TopSlide></TopSlide>
                </div>
            </div>
        </div>
    );
};

export default Home;