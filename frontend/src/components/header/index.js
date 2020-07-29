import React from "react"
import styles from './index.module.css'
import Link from "../link"
import logo from "../../images/Razhodi.se.svg"
import getNavigation from "../../utils/navigation"

const Header = (props) => {
    const links = getNavigation()

    return (
        <header>
            <div className={styles.navigation}>
                <img src={logo} alt="Logo" className={styles.logo}/>
                {
                    links.map(nav => {
                        return (
                            <Link href={nav.link} title={nav.title} type="header"/>
                        )
                    })
                }
            </div>
        </header>
    )
}

export default Header