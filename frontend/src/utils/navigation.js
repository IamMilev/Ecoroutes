const getNavigation = (_id) => {
    const links = [
        {
            title: 'Ecoroute',
            link: '/ecoroutes'
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