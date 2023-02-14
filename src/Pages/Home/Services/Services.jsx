import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const ServicesInfo = [
        {
            id: 1,
            title: "Fluoride Treatment",
            describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, explicabo",
            icon: fluride,
        },
        {
            id: 2,
            title: "Cavity Filling",
            describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, explicabo",
            icon: cavity,
        },
        {
            id: 3,
            title: "Teeth Whitening",
            describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, explicabo",
            icon: whitening,
        },
    ]
    return (
        <div className='mt-[180px] mx-auto '>
            <section className='text-center'>
                <h2 className='uppercase text-[#19D3AE] font-bold'>Our Services</h2>
                <h2 className='text-[36px] '>Services We Provided</h2>
            </section>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[34px]  '>
                {
                    ServicesInfo.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;