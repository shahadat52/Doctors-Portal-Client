import React from 'react';
import banner from "../../../assets/images/chair.png"
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero  px-5 banner-bg pb-[150px] pt-[100px] ">

      <div className="hero-content flex-col lg:flex-row-reverse bg-gradient-to- from-secondary">
        <img className='w-1/2 h-[355px]' src={banner} alt="" />
        <div>
          <h1 className="text-5xl font-[Open Sans] font-[700]  text-[48px] text-[#3A4256]">Your New Smile Starts <br /> Here</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary ">Get Started</button>
        </div>

      </div>

    </div>
  );
};

export default Banner;