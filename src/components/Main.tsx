import React from 'react';
import '../styles/Main.css';
import Header from './Header';

const Main: React.FC = () => {
    return (
        <main className="Main">
            <Header />
            {/* main content goes here */}
        </main>
    );
};

export default Main;