const getNavigation = (userData) => {

    const authLinks = [
        {
            title: "Homepage",
            link: "/"
        },
        {
            title: "Ecotrails",
            link: "/ecotrail"
        },
        {
            title: "Add Ecotrail",
            link: "/addecotrail"
        },
        {
            title: "Profile",
            link: `/profile/${userData && userData.id}`
        }
    ]

    const guestLinks = [
        {
            title: "Homepage",
            link: "/"
        },
        {
            title: "Ecotrails",
            link: "/ecotrail"
        },
        {
            title: "Sign Up",
            link: "/signup"
        },
        {
            title: "Sign In",
            link: "/signin"
        }
    ]
    const loggedIn = userData && userData.loggedIn
    return loggedIn ? authLinks : guestLinks
}

export default getNavigation