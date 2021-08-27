import React, { useEffect, useState } from 'react';
import { register } from 'actions/userActions';
import AuthLayout from 'layouts/auth';
import { useDispatch, useSelector } from 'react-redux';
import styles from './register.module.css';

const Register = ({ history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            history.push('/');
        }
    }, [history, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Password do not match');
        } else {
            dispatch(register(name, email, password));
        }
    }

    return (
        <AuthLayout>
            <div className={styles.form}>
                <form onSubmit={submitHandler}>
                    <h1 className={styles.title}>Register new account</h1>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        className={styles.input}
                        onChange={(e) => setName(e.target.value)}
                    />
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

                    <input
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        className={styles.input}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit" className={styles.submit}>Submit</button>
                </form>
            </div>
        </AuthLayout>
    )
}

export default Register;
