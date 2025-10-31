import React from 'react';
import './styles/App.module.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            {/* <Header /> */}
            <Main />
            {/* <Footer columns={3} /> */}
        </div>
    );
};

export default App;