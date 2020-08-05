import React, { useContext} from 'react'
import PageLayout from "../../components/page-layout";
import UserContext from "../../context/userContext";
import { useHistory } from "react-router-dom";


const ProfilePage = () => {
    const { setUserData } = useContext(UserContext);
    const { loggedIn, user } = useContext(UserContext).userData


    const history = useHistory();

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
            loggedIn: false
        });
        localStorage.setItem("auth-token", "");
        history.push("/ecotrail")
    };


    return(
            <PageLayout>
                <h1>Welcome, <span>{ loggedIn ? user.displayName : 'Guest' }</span></h1>
                <button onClick={logout}>Log out</button>
            </PageLayout>
        )
}

export default ProfilePage