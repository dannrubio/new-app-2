import React from 'react';
import '../styles/Main.module.scss';
import Header from './Header';
import RangeField from './RangeField';

const Main: React.FC = () => {
    return (
        <main className="Main">
            {/* <Header /> */}
            {/* main content goes here */}
            <div id="leftHandNav" className='leftHandNav' />
            <div id="mainBody" className='mainBody'>
                <RangeField min={2} max={10} />
            </div>

        </main>
    );
};

export default Main;