import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Selamat Datang di CMS Pendidikan</h1>
                {/* Konten lainnya */}
            </main>
            <Footer />
        </div>
    );
};

export default App;
