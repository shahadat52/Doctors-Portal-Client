import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Testimonial from './Testimonial';


const Testimonials = () => {

    const ReviewInfo = [
        {
            _id: 1,
            name: "Winson Herry",
            location: "California",
            img: people1,
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 2,
            name: "Rayan dal",
            location: "Ladava",
            img: people2,
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 3,
            name: "Henry Bekrail",
            location: "San Franscisco",
            img: people3,
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]

    return (
        <section >
            
            <section className='flex justify-between mt-20 mx-14'>
            <div className=''>
                <h5 className='font-[600] text-secondary '>Testimonial</h5>
                <h2 className="text-4xl mt-4 mb-36"> What Our Patients Says</h2>
            </div>
            <div className=''>
                <img className='lg:w-[190px] w-[98px]' src={quote} alt="" />
            </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 text-black mx-20'>
                {
                    ReviewInfo.map(review => <Testimonial
                    key={review._id}
                    review={review}
                    >

                    </Testimonial> )
                }
            </section>
        </section>
    );
};

export default Testimonials;