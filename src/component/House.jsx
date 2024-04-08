import React from 'react';

const House = ({house}) => {

    const {relevant_image} = house;

    return (
        <>
            <section>
            <img src={relevant_image} alt="house" className="w-[50%] h-[50%]"/>
            </section>
        </>
    );
};

export default House;