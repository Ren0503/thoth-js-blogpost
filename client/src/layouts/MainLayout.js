import React from 'react';
import { Footer, Header } from 'components/core';
import { Container } from 'react-bootstrap';


const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <Container>
                <div className="py-3">{children}</div>
            </Container>
            <Footer />
        </div>
    )
}

export default MainLayout;
