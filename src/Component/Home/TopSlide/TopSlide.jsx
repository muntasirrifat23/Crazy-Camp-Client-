import './TopSlide.css'

import top1 from '../../../../public/TopSlider/top1.webp'
import top2 from '../../../../public/TopSlider/top2.webp'
import top3 from '../../../../public/TopSlider/top3.webp'
import top4 from '../../../../public/TopSlider/top4.webp'
import top5 from '../../../../public/TopSlider/top5.jpg'
import top6 from '../../../../public/TopSlider/top6.jpeg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


const TopSlide = () => {
    return (
        <>

        <div className='mb-20 text-center'>
            <Carousel>
            <div className="carousel-item">   
                    <img src={top1} />
                    <div>
                    <p className="carousel-text"><span className='font-bold text-2xl'>-- Football --</span> 
                    <p>Football is a popular sport played worldwide.</p>
                    <p>Message: Kick, pass, and score! Experience the thrill of football and showcase your skills on the field.</p>
                    </p>
                    </div>       
                </div>

                <div>
                    <img src={top2} />
                    <p className="carousel-text"><span className='font-bold text-2xl'>-- Basketball --</span> 
                    <p> Basketball is a team sport played with two teams of five players each.</p>
                    <p>Message: Dribble, shoot, and dunk your way to victory! Join the basketball court and feel the adrenaline rush.</p>
                    </p>
                </div>

                <div>
                    <img src={top3} />
                    <p className="carousel-text"><span className='font-bold text-2xl'>-- Girls Football Training --</span> 
                    <p>Also girls football is a popular sport played worldwide.</p>
                    <p>Message: Kick, pass, and score! Experience the thrill of football and showcase your skills on the field.</p>
                    </p>
                </div>

                <div>
                    <img src={top4} />
                    <p className="carousel-text"><span className='font-bold text-2xl'>-- Chess --</span> 
                    <p> Chess is a strategic board game played between two players.</p>
                    <p>Message: It is played on a checkered board with 64 squares and involves moving different pieces with the goal of checkmating the opponents king.</p>
                    </p>
                </div>

                <div>
                    <img src={top5} />
                    <p className="carousel-text"><span className='font-bold text-2xl'>-- Swimming --</span> 
                    <p>Swimming is a water-based activity that involves moving through water using various strokes.</p>
                    <p>Message: Dive into the refreshing waters and experience the joy of swimming. Whether for fitness or leisure, let the water embrace you.</p>
                    </p>
                </div>

                <div>
                    <img src={top6} />
                    <p className="carousel-text"><span className='font-bold text-2xl'>-- Cricket --</span> 
                    <p>Cricket is a bat-and-ball game played between two teams.</p>
                    <p>Message: Get ready to play the gentleman game! Grab your bat, bowl with precision, and field like a pro in the thrilling game of cricket.</p>
                    </p>
                </div>
            </Carousel>
        </div>

        </>
    );
};

export default TopSlide;