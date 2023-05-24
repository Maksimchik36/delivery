import React from 'react';
import styles from './Footer.module.scss';


const Footer = () => {

    return (
        <>
            <footer className={styles.wrapper}>
                <h3 className={styles.copyright}>Copyright &copy; 2023 </h3>
            </footer>
        </>
    );
};


export default Footer;