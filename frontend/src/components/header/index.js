import React, { Component } from "react"
import styles from './index.module.css'
import Link from "../link"
import logo from "../../images/Razhodi.se.svg"
import getNavigation from "../../utils/navigation"
import UserContext from '../../context/userContext'

class Header extends Component {

    static contextType = UserContext

    render() {
        const {
            userData
        } = this.context

        const links = getNavigation(userData)

        return (
            <header>
                <div className={styles.navigation}>
                    <img alt="logo" className={styles.logo} src={logo} />
                    {
                        links.map(navElement => {
                            return (
                                <Link
                                    key={navElement.title}
                                    href={navElement.link}
                                    title={navElement.title}
                                    type="header"
                                />
                            )
                        })
                    }
                </div>
            </header>
        )
    }
}

export default Header