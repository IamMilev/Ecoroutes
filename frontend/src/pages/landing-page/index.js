import React from 'react'
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";


const LandingPage = () => {
    // const { loggedIn, user } = useContext(UserContext).userData
    // const displayName = user.displayName || 'Guest'


    return (
        <PageLayout>
            <Title title="Welcome to Razhodi.se" />
        </PageLayout>
    )
}

export default LandingPage