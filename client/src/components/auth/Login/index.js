import { login } from 'actions/userActions';
import AuthLayout from 'layouts/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './login.module.css';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;


    useEffect(() => {
        if (userInfo) {
            history.push('/');
        }
    }, [history, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <AuthLayout>
            <div className={styles.form}>
                <form onSubmit={submitHandler}>
                    <h1 className={styles.title}>Login with your account</h1>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        className={styles.input}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        className={styles.input}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className={styles.submit}>Submit</button>
                </form>
            </div>
        </AuthLayout>
    )
}

export default Login;
