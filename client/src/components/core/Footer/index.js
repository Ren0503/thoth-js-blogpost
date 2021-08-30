import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className={styles.footer}>
            <button onClick={scrollToTop} className={styles.backTop}></button>
            <div className="text-center">
                <a href="index.html">Nectaria Template</a> © 2016<br />
                Free HTML Template by <a href="https://wowthemes.net">WowThemes.net</a>
            </div>
        </footer>

    );
};

export default Footer;
