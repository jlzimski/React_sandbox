import React from 'react';
import FeatureCard from '../components/FeatureCard';
import ListGroups from '../components/ListGroups';
import Carousel from '../components/Carousel';
import Forms from '../components/Forms';
import Jumbotron  from '../components/Jumbotron';
import Layout from '../components/Layout';
// import OtherButtons from '../components/OtherButtons';
import Popovers from '../components/Popovers';
import ResponsiveTable from '../components/ResponsiveTable';
import ViewContent from '../components/ViewContent'

const Home = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1>Welcome</h1>
                <Forms />
                <FeatureCard />
                <ListGroups />
                <Carousel />
                <Jumbotron />
                <Layout />
                {/* <OtherButtons /> */}
                <Popovers />
                <ResponsiveTable />
                <ViewContent />
            </div>
        </div>
    );
};

export default Home;