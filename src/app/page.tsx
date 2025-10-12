import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <main>
            {/* <p>This is the main page of your Next.js application.</p> */}
            <Main />
            <Footer columns={4} />
        </main>
    );
};

export default HomePage;