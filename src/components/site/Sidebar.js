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
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
// import OtherButtons from '../components/OtherButtons';
import Popovers from '../components/Popovers';
import ResponsiveTable from '../components/ResponsiveTable';
import ViewContent from '../components/ViewContent';
import Sandbox from '../components/EmptySandbox';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list-styling'>
                    <h1>User Name</h1>
                    <h4>other info</h4>
                    <h4>other info</h4>
                    <div className='sidebar-link'>
                    <li><Link to='/Sandbox'>Sandbox</Link></li>
                    <li><Link to='/FeatureCard'>FeatureCard</Link></li>
                    <li><Link to='/ListGroups'>ListGroups</Link></li>
                    <li><Link to='/Carousel'>Carousel</Link></li>
                    <li><Link to='/Forms'>Forms</Link></li>
                    <li><Link to='/Jumbotron'>Jumbotron</Link></li>
                    <li><Link to='/Layout'>Layout</Link></li>
                    {/* <li><Link to='/OtherButtons'>Other Buttons</Link></li> */}
                    <li><Link to='/Popovers'>Popovers</Link></li>
                    <li><Link to='/ResponsiveTable'>Responsive Table</Link></li>
                    <li><Link to='/ViewContent'>ViewContent</Link></li>
                    </div>

                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/Sandbox'><Sandbox /></Route>
                    <Route exact path='/FeatureCard'><FeatureCard /></Route>
                    <Route exact path='/ListGroups'><ListGroups /></Route>
                    <Route exact path='/Carousel'><Carousel /></Route>
                    <Route exact path='/Forms'><Forms /></Route>
                    <Route exact path='/Jumbotron'><Jumbotron /></Route>
                    <Route exact path='/Layout'><Layout /></Route>
                    <Route exact path='/Popovers'><Popovers /></Route>
                    <Route exact path='/ResponsiveTable'><ResponsiveTable /></Route>
                    <Route exact path='/ViewContent'><ViewContent /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;