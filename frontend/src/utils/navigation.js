const getNavigation = (_id) => {
    const links = [
        {
            title: 'Ecoroute',
            link: '/ecoroutes'
        },
        {
            title: 'Add Ecoroute',
            link: '/addecoroute'
        },
        {
            title: 'Profile',
            link: `/profile/${_id}`
        },
        {
            title: 'Sign In',
            link: '/signin'
        },
        {
            title: 'Sign Up',
            link: '/signup'
        },
    ]

    return links
}

export default getNavigation