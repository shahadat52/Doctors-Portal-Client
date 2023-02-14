import React from 'react';

const ButtonPrimary = ({ children, classes, handler }) => {
    return (
        <button
        onClick={handler}
        className={`hover:text-gray-100 rounded-lg px-[25px] py-[10px] bg-gradient-to-r from-secondary to-primary text-white ${classes}`}
      >
        {children}
      </button>
    );
};

export default ButtonPrimary;