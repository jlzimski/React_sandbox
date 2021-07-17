import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';

import FeatureCard from '../components/FeatureCard';
import ListGroups from '../components/ListGroups';
import Carousel from '../components/Carousel';
import Forms from '../components/Forms';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list-styling'>
                    <h1>User Name</h1>
                    <h4>other info</h4>
                    <h4>other info</h4>
                    <li><Link to='/FeatureCard'>FeatureCard</Link></li>
                    <li><Link to='/ListGroups'>ListGroups</Link></li>
                    <li><Link to='/Carousel'>Carousel</Link></li>
                    <li><Link to='/Forms'>Forms</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/FeatureCard'><FeatureCard /></Route>
                    <Route exact path='/ListGroups'><ListGroups /></Route>
                    <Route exact path='/Carousel'><Carousel /></Route>
                    <Route exact path='/Forms'><Forms /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;