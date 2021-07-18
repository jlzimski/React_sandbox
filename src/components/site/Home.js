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
import Sandbox from '../components/EmptySandbox'

const Home = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1>Welcome</h1>
                <Sandbox />
                <br/>
                <Carousel />
                <br/>
                <Forms />
                <br/>
                <FeatureCard />
                <br/>
                <ListGroups />
                <br/>
                <Jumbotron />
                <br/>
                <Layout />
                <br/>
                {/* <OtherButtons /> */}
                <Popovers />
                <br/>
                <ResponsiveTable />
                <br/>
                <ViewContent />
            </div>
        </div>
    );
};

export default Home;