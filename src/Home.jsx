import React from 'react';
import Slider from './Slider';
import Houses from './component/Houses';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home</title>
        </Helmet>
          <Slider></Slider> 
          <div><Houses></Houses></div>
        </>
    );
};

export default Home;