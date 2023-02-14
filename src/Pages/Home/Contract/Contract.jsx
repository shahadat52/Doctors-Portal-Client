import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import ButtonPrimary from "../../../Utillites/ButtonPrimary"

const Contract = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const subject = form.subject.value
        const message = form.message.value
        console.log(email, subject, message);
    }
    return (
        <div className='text-center text-white h-[580px]'
            style={
                {
                    background: `url(${appointment})`,
                    backgroundSize: "content"
                }
            }>
            <div className=''>
                <h2 className='font-bold text-xl text-secondary pt-14'>Contract Us</h2>
                <h1 className='text-4xl'>Stay Connected With Us</h1>

                <form action="" className='my-10'
                    onSubmit={handleSubmit}
                >
                    <div className=''>
                        <input name='email' type="email" placeholder="Your email" className="input input-bordered  w-1/3 mx-auto" required  />
                    </div>
                    <div className='mt-5'>
                        <input name='subject' type="text" placeholder="Subject" className="input input-bordered  w-1/3 mx-auto" required />
                    </div>
                    <div className='mt-5'>
                        <textarea name='message'  type="text" className=" text-black textarea w-1/3 h-[136px] mx-auto" placeholder="Your message" required></textarea>
                    </div>
                    <div className='mt-7'>
                        <button type="submit"><ButtonPrimary>Submit</ButtonPrimary></button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contract;