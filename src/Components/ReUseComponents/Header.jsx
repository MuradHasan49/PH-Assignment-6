import React from 'react';

const Header = ({ title, description, description2 }) => {
    return (
        <>
            <div className="text-center mb-12">
                <h1 className='font-extrabold text-5xl text-[#101727]'>{title}</h1>
                <p className='mt-6 text-[#627382]'>{description}</p>
                <p className='text-[#627382]'>{description2}</p>
            </div>
        </>
    );
};

export default Header;