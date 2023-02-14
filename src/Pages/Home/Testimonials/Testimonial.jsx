import React from 'react';

const Testimonial = ({ review }) => {
    const { name, location, img, reviewText } = review
    return (
        <div className='shadow-lg rounded-2xl px-5 py-8'>
            <p>{reviewText}</p>
            <div className='flex items-center mt-9 '>
                <div className="avatar">
                    <div className="w-16 mt- rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="people" />
                    </div>
                </div>
                <div className='ml-4 '>
                    <h2 className='text-xl font-[600]'>{name}</h2>
                    <h3>{location}</h3>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;