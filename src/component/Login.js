import React from 'react';

// icons
import google from "../assets/google.svg";

// styles
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to 3Gram!</h2>
                
                <div className={styles.button}>
                    <img src={google} alt="google svg" />Sign In with Google
                </div>
            </div>
        </div>
    );
};

export default Login;