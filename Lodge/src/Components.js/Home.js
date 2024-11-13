import React from 'react'
import Slider from './Slider';
import AboutData from './AboutData';
import OurBrand from './OurBrand';
import OurClients from './OurClients';
import ContactData from './ContactData';

const Home = () => {
    return (
        <>
            {/* <!--=========== Slider Start ===========--> */}
            <Slider />
            {/* <!--=========== Slider End===========--> */}

            {/* <!--=========== About Start ===========--> */}
            <AboutData />
            {/* <!--=========== About End===========--> */}

            {/* <!--=========== OurBrands Start ===========--> */}
            <OurBrand />
            {/* <!--=========== OurBrands End===========--> */}

            {/* <!--=========== OurClients Start ===========--> */}
            <OurClients />
            {/* <!--=========== OurClients End===========--> */}

            {/* <!--=========== Contact Start ===========--> */}
            <ContactData />
            {/* <!--=========== Contact End===========--> */}

        </>
    )
}

export default Home;
