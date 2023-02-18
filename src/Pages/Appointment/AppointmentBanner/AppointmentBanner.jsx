import React, { useState } from 'react';
import chair from "../../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';
import bg from "../../../assets/images/bg.png"
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const AppointmentBanner = ({selected, setSelectedDate}) => {
    const footer = <p></p>

    return (
        <header>
            <div style={
                {
                    background: `url(${bg})`,
                    backgroundSize: "contain"
                }
            } className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='Dentist Chair' className=" rounded-lg shadow-2xl max-w-sm " />
                    <div className='mx-[75px] '>
                        <DayPicker
                            mode='single'
                            selected={selected}
                            onSelect={setSelectedDate}
                            footer={footer}
                        >
                        </DayPicker>

                    </div>
                </div>
            </div>
            
        </header>
    );
};

export default AppointmentBanner;