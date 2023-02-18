import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const Appointments = () => {
    const [selected, setSelectedDate] = useState(new Date())

    return (
        <div>
            <AppointmentBanner
            selected ={selected}
            setSelectedDate = {setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointments
            selected= {selected}
            ></AvailableAppointments>
        </div>
    );
};

export default Appointments;