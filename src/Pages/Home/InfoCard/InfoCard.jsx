import React from 'react';

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card
  return (
    <div>
      <div className={`card w-96 ${bgClass}  text-white mx-auto w-[450px] h-[190px] `}>
        <div className=" flex justify-around items-center">
          <img className='w-[80px] h-[80px] text-white my-[52px] ' src={icon} alt="" />
          <div className='my-[28px]'>
            <h2 className="card-title text-[20px] mb-3 font-[700]">{name}</h2>
            <p className='text-[16px]'>{description}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InfoCard;