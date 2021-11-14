import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import BestSeller from '../BestSeller/BestSeller';
import FeaturesProduct from '../FeaturesProduct/FeaturesProduct';
import LatestArivelProduct from '../LatestArivalProduct/LatestArivelProduct';
import Testimonial from '../Testimonial/Testimonial';
import WatchGallery from '../WatchGallery/WatchGallery';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <LatestArivelProduct></LatestArivelProduct>
            <FeaturesProduct></FeaturesProduct>
            <BestSeller></BestSeller>
            <WatchGallery></WatchGallery>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;