import React from 'react';
import im404 from '../../../public/image404.webp'
const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center uppercase h-screen">
            <div className='font-bold text-4xl mb-3'>-- OPPS! Wrong Content --</div>
            <div>
            <img src={im404} alt="404 Image" className="w-full max-w-screen-xl sm:w-auto sm:max-w-none" />
            </div>
      
        </div>
    );
};

export default NotFound;