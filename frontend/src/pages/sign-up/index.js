import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import Axios from "axios";
import ErrorNotice from "../../components/misc/ErrorNotice";
import PageLayout from "../../components/page-layout";
import SubmitButton from "../../components/button/submit-button";
import Input from "../../components/input";
import Form from '../../components/form'
import Title from "../../components/title/heading";
import AuthLayout from "../../components/auth-layout";

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const newUser = { email, password, passwordCheck, displayName };
            await Axios.post("http://localhost:5000/users/register", newUser);
            const loginRes = await Axios.post("http://localhost:5000/users/login", {
                email,
                password,
            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
                loggedIn: true
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    return (
        <PageLayout>
            <AuthLayout>
                <Title variant='title' title='Sign up' />
                {error && (
                    <ErrorNotice message={error} clearError={() => setError(undefined)} />
                )}
                <Form onSubmit={submit}>
                    <Input type="email"
                           label="Email"
                           id="register-email"
                           onChange={(e) => setEmail(e.target.value)} />

                    <Input type="password"
                           label="Password"
                           id="register-password"
                           onChange={(e) => setPassword(e.target.value)} />

                    <Input type="password"
                           label="Verify Password"
                           id="register-repassword"
                           onChange={(e) => setPasswordCheck(e.target.value)} />

                    <Input type="text"
                           label="Display Name"
                           id="register-display-name"
                           onChange={(e) => setDisplayName(e.target.value)} />

                    <SubmitButton type="submit" title="Register"/>
                </Form>
                <div>Already have an account? <button onClick={() => {history.push('/signin')}}>Sign in now!</button></div>
            </AuthLayout>
        </PageLayout>
    );
}
