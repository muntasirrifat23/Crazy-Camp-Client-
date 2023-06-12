import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ex1 from '../../../../public/Extra/ex.1.jpeg'
import ex2 from '../../../../public/Extra/ex2.jpeg'
import ex3 from '../../../../public/Extra/ex3.jpeg'
import ex4 from '../../../../public/Extra/ex4.jpeg'
import ex5 from '../../../../public/Extra/ex5.jpeg'
import ex6 from '../../../../public/Extra/ex6.jpeg'
import extra from '../../../../public/extra.webp'


const Popular = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration in milliseconds
            offset: 200, // Offset (in pixels) from the original trigger point to start the animation
            easing: 'ease-in-out', // Animation easing
            delay: 200, // Delay between animations
            once: true, // Whether to only animate elements once while scrolling
        });
        AOS.refresh();

    }, []);
    return (
        <div>
             <div className='text-center mx-auto my-10 border-b-4 border-black md:w-3/12 sm:w-5/12 lg:w-2/12 mt-15 uppercase text-4xl text-red-800 font-bold border-dotted'>
                Extra Section
            </div>
            <div className='mb-8 mx-auto ml-20 text-center mt-10'>
                <div className='text-green-800 font-semibold text-xl flex justify-center text-center '>
                    <div className='mr-2'>
                        <h1 data-aos="fade-up">
                            <img src={ex2} alt="" />
                        </h1>
                    </div>
                    <div>
                        <p data-aos="zoom-in" data-aos-delay="1000"> 
                        <img src={ex1} alt="" />
                    </p>
                    </div>
                    <div className='ml-2'>
                        <h1 data-aos="fade-up">
                            <img src={ex3} alt="" />
                        </h1>
                    </div>
                </div>
                <div className='text-green-800 font-semibold text-xl flex justify-center text-center mt-2'>
                    <div className='mr-2'>
                        <h1 data-aos="zoom-in">
                            <img src={ex4} alt="" />
                        </h1>
                    </div>
                    <div>
                        <p data-aos="flip-left" data-aos-delay="1000"> 
                        <img src={ex5} alt="" />
                    </p>
                    </div>
                    <div className='ml-2'>
                        <h1 data-aos="zoom-in">
                            <img src={ex6} alt="" />
                        </h1>
                    </div>
                </div>
            </div>


            {/* Extra */}
            <div className="hero bg-white text-black">
  <div className="hero-content flex-col lg:flex-row">
    <img src={extra} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Benefit of sports</h1>
      <p className="py-6">Clearly, sports can help you reach your fitness goals and maintain a healthy weight. However, they also encourage healthy decision-making such as not smoking and not drinking. Sports also have hidden health benefits such as lowering the chance of osteoporosis or breast cancer later in life.
</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Popular;