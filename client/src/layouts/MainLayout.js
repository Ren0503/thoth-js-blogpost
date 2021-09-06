import React, { useState, useEffect } from 'react';
import { Footer, Header } from 'components/core';
import { Container, Button } from 'react-bootstrap';

const MainLayout = ({ children }) => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div>
            <Header />
            <Container>
                <div className="py-3">{children}</div>
            </Container>
            <div className="scroll-to-top">
                {visible &&
                    <Button className='btn-dark' onClick={scrollToTop}>
                        <i className="fas fa-angle-up"></i>
                    </Button>
                }
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;
