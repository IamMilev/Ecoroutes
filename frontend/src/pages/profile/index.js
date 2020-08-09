import React, { useContext} from 'react'
import PageLayout from "../../components/page-layout";
import UserContext from "../../context/userContext";
import { useHistory } from "react-router-dom";
import Button from "../../components/button/standard-button";


const ProfilePage = () => {
    const { setUserData } = useContext(UserContext);
    const { user } = useContext(UserContext).userData


    const history = useHistory();

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
            loggedIn: false
        });
        localStorage.setItem("auth-token", "");
        history.push("/signin")
    };


    return(
            <PageLayout>
                <h1>Welcome, {user.displayName} </h1>
                <Button onClick={logout} title="Log Out" />
            </PageLayout>
        )
}

export default ProfilePage