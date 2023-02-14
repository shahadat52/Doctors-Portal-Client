import React from 'react';
import treatment from "../../../assets/images/treatment.png"
import ButtonPrimary from '../../../Utillites/ButtonPrimary';

const HeroSection = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12  mt-[150px] ">
                <div className='w-[458px] h-[576px] '>
                    <img className='rounded-lg' src={treatment} alt="Album" />
                </div>
                <div className=" flex-row justify-center items-center my-auto  text-justify ">
                    <h2 className="card-title text-5xl font-bold  ">Exceptional Dental  <br /> Care, on Your Terms</h2>
                    <p className='text-4 mt-6 max-w-[492px] h-[132px]   '>
                        <span className=''>
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal
                            distribution of letters,as opposed to using 'Content here, content here', making it look like
                            readable English. Many desktop publishing packages and web page
                        </span>
                    </p>
                    <div className="card-actions  justify-start mt-10">
                        <ButtonPrimary >GET STARTED</ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;