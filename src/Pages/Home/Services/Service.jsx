import React from 'react';

const Service = ({ service }) => {
    const { title, describe, icon } = service;
    return (
        <div>
            <div className="mx-auto card gap-4 shadow-lg max-w-[440px] max-h-[330px] mt-[70px] ">
                <div className="card-body flex-col justify-center items-center">
                    <div className='flex justify-center items-center'>
                        <img className='h-[115px] w-[110px] mt-8 mb-[16px] ' src={icon} alt="" />
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <p className=' text-justify'>{describe}</p>

                </div>
            </div>
        </div>
    );
};

export default Service;