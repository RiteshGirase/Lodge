import React from 'react'
import carousel1 from '../images/banner.jpg'
import carousel2 from '../images/banner1.jpg'
import carousel3 from '../images/banner2.png'


const Slider = () => {
    return (
        <>
            {/*<--=============== slider_section start =================---> */}
            <section class="slider_section">
                <div id="myCarousel" class="carousel slide banner-main" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="first-slide  Slider-img"
                                src={carousel1} alt="First slide" />
                            <div class="container">
                                <div class="carousel-caption text-style relative">
                                    <span >All New Phones </span>
                                    <h1>up to 25% Flat Sale</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content
                                        <br /> of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                                    <a class="buynow" href="/">Buy Now</a>
                                    <ul class="social_icon pt-0 mt-0">
                                        <li> <a href="/"><i class="fa fa-facebook-f"></i></a></li>
                                        <li> <a href="/"><i class="fa fa-twitter"></i></a></li>
                                        <li> <a href="/"><i class="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="second-slide" src={carousel2} alt="Second slide Slider-img" />
                            <div class="container">
                                <div class="carousel-caption text-style relative">
                                    <span>All New Phones </span>
                                    <h1>up to 25% Flat Sale</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content
                                        <br /> of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                                    <a class="buynow" href="/">Buy Now</a>
                                    <ul class="social_icon pt-0 mt-0">
                                        <li> <a href="/"><i class="fa fa-facebook-f"></i></a></li>
                                        <li> <a href="/"><i class="fa fa-twitter"></i></a></li>
                                        <li> <a href="/"><i class="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="third-slide Slider-img" src={carousel3} alt="Third slide" />
                            <div class="container">
                                <div class="carousel-caption text-style relative">
                                    <span>All New Phones </span>
                                    <h1>up to 25% Flat Sale</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content
                                        <br /> of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                                    <a class="buynow" href="/">Buy Now</a>
                                    <ul class="social_icon pt-0 mt-0">
                                        <li> <a href="/"><i class="fa fa-facebook-f"></i></a></li>
                                        <li> <a href="/"><i class="fa fa-twitter"></i></a></li>
                                        <li> <a href="/"><i class="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <i class='fa fa-angle-left'></i>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <i class='fa fa-angle-right'></i>
                    </a>
                </div>
            </section>
            {/*<--=============== slider_section end =================---> */}

        </>
    )
}
export default Slider;
