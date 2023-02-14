import React from 'react';
import Banner from './Banner/Banner';
import Contract from './Contract/Contract';
import HeroSection from './HeroSection/HeroSection';
import InfoCards from './InfoCard/InfoCards';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCards />
            <Services/>
            <HeroSection/>
            <MakeAppointment/>
            <Testimonials/>
            <Contract/>


        </div>
    );
};

export default Home;