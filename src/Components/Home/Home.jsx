
import React from 'react';
import Carousels from './Carousel';
import BannerSection from './BannerSection';
import Faqs from './Faqs';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Carousels/>
            <BannerSection></BannerSection>
            <Faqs></Faqs>
            
        </div>
    );
};

export default Home;