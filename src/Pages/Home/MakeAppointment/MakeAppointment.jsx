import React from 'react';
import doctor from "../../../assets/images/doctor-small.png"
import ButtonPrimary from '../../../Utillites/ButtonPrimary';
import appointment from '../../../assets/images/appointment.png'
import "./MakeAppointment.css"

const MakeAppointment = () => {
    return (
        <section className=' text-white h-[533px] mt-[272px] '
        style={{
            background: `url(${appointment})`
        }}
        >
            
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='hidden lg:block md:block'>
                    <img className='w-[636px] h-[606px] mt-[-73px]' src={doctor} alt="" />
                </div>
                <div className='flex  mx-[28px] my-auto  '>
                    <div className='' >
                        <h1 className='text-secondary mb-5 font-[700] mt-8'>Appointment</h1>
                        <h1 className='mb-5 text-[36px] font-[600]  '>Make an appointment Today</h1>
                        <p className='mb-5 max-w-[533px]  text-justify text-[16px]  '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonPrimary>Get started</ButtonPrimary>
                    </div>  
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;