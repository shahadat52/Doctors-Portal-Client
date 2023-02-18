import React from 'react';
import { format } from 'date-fns';


const AvailableAppointments = ({ selected }) => {
    return (
        <div className='text-center mt-[257px] text-2xl font-[400] text-secondary '>
            {
                selected ? <p>Available Appointments on {format(selected, "PP")} </p> : <p>Please Pick a date</p>
            }
        </div>
    );
};

export default AvailableAppointments;