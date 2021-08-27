import Footer from 'components/core/Footer';
import Header from 'components/core/Header';
import React from 'react';

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout