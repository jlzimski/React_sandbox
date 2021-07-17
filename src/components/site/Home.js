import React from 'react';
import FeatureCard from '../components/FeatureCard';
import ListGroups from '../components/ListGroups';
import Carousel from '../components/Carousel';
import Forms from '../components/Forms';

const Home = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1>Welcome</h1>
                <Forms />
                <FeatureCard />
                <ListGroups />
                <Carousel />
            </div>
        </div>
    );
};

export default Home;