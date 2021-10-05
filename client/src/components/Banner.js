// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';

// import 'swiper/components/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";

function Banner() {
    return (

        <section class="home" id="home">
           
                <div class="home-slider">

                    <div class="wrapper">
                        
                            <div class="slide">
                                <div class="content">
                                    <span>our special dish</span>
                                    <h3>spicy noodles</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit natus dolor cumque?</p>
                                    <Link href="#" class="btn">order now</Link>
                                </div>
                                <div class="image">
                                    <img src="/images/home-img-1.png" alt="" />
                                </div>
                            </div>
                       
                        {/* <SwiperSlide>
                            <div class="slide">
                                <div class="content">
                                    <span>our special dish</span>
                                    <h3>spicy noodles</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit natus dolor cumque?</p>
                                    <Link href="#" class="btn">order now</Link>
                                </div>
                                <div class="image">
                                    <img src="/images/home-img-2.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div class="slide">
                                <div class="content">
                                    <span>our special dish</span>
                                    <h3>spicy noodles</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit natus dolor cumque?</p>
                                    <Link href="#" class="btn">order now</Link>
                                </div>
                                <div class="image">
                                    <img src="/images/home-img-3.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide> */}

                    </div>
                </div>
            
        </section>

    )
}

export default Banner
