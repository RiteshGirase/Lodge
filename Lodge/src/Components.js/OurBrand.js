/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Img1 from '../images/1.jpg'
import Img2 from '../images/2.jpg'
import Img3 from '../images/3.jpg'
import Img4 from '../images/4.jpg'
import Img5 from '../images/5.jpg'
import Img6 from '../images/6.jpg'
import Star from '../images/star.png'

const OurBrand = () => {
    return (
        <>
            {/* <!-- brand --> */}
            <div class="brand_color">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <h2>Our Brand</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="brand-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                            <div class="brand_box">
                                <img src={Img1} alt="img" />
                                <h3>₹<strong class="red">10000</strong></h3>
                                <span>Mobile Phone</span>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                            <div class="brand_box">
                                <img src={Img2} alt="img" />
                                <h3>₹<strong class="red">10000</strong></h3>
                                <span>Mobile Phone</span>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                            <div class="brand_box">
                                <img src={Img3} alt="img" />
                                <h3>₹<strong class="red">10000</strong></h3>
                                <span>Mobile Phone</span>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div class="brand_box">
                                <img src={Img4} alt="img" />
                                <h3>₹<strong class="red">10000</strong></h3>
                                <span>Mobile Phone</span>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                            <div class="brand_box">
                                <img src={Img5} alt="img" />
                                <h3>₹<strong class="red">10000</strong></h3>
                                <span>Mobile Phone</span>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                            <div class="brand_box">
                                <img src={Img6} alt="img" />
                                <h3>₹<strong class="red">10000</strong></h3>
                                <span>Mobile Phone</span>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                                <i><img src={Star} /></i>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <a class="read-more">See More</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- end brand --> */ }
        </>
    )
}
export default OurBrand;
