import React from 'react';

// styles
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <h1>3<sup><sup className={styles.logo}>m</sup></sup>Gram</h1>
            </div>
            <div className={styles.logout}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;