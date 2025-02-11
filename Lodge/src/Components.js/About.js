import React from 'react'
import AboutData from './AboutData';
import Img2 from '../images/about-1.png'


const About = () => {
    return (
        <>

            <div class="brand_color">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <h2>About</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Component */}
            <AboutData />
            {/* Component */}
            <div class="about mt-0 pt-0">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-7 col-lg-7 col-md-7 co-sm-l2">
                            <div class="about_box">
                                <h3>About Us</h3>
                                <span>Our Mobile Shop</span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the </p>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
                            <div class="about_img">
                                <figure><img src={Img2} alt="img" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default About;
