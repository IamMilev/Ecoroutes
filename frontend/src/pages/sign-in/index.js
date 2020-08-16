import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import Axios from "axios";
import ErrorNotice from "../../components/misc/ErrorNotice";
import PageLayout from "../../components/page-layout";
import Title from "../../components/title/heading"
import Input from "../../components/input";
import SubmitButton from "../../components/button/submit-button";
import Form from "../../components/form";
import HalfLayout from "../../components/half-layout";
import ChangeButton from "../../components/button/change-button";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();


    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = { email, password };
            const loginRes = await Axios.post(
                "http://localhost:5000/users/login",
                loginUser
            );
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
                loggedIn: true
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push(`/profile/${loginRes.data.user.id}`);
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    return (
        <PageLayout>
            <HalfLayout>
                <Title variant='title' title="Sign In" />
                {error && (
                    <ErrorNotice message={error} clearError={() => setError(undefined)} />
                )}
                <Form onSubmit={submit} >
                    <Input
                        label="Email"
                        id="login-email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)} />

                    <Input
                        id="login-password"
                        type="password"
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <SubmitButton type="submit" title="Sign In" />
                </Form>
                <div>
                    Don't have an account?
                    <ChangeButton title='Join us now!' onClick={() => {history.push('/signup')}} />
                </div>
            </HalfLayout>
        </PageLayout>
    );
}

export default Login