import React from "react"
import Link from "../link"
import styles from './index.module.css'
import logo from "../../images/Razhodi.se.svg"
import getNavigation  from "../../utils/navigation"

const Footer = () => {
    const links = getNavigation()

    return (
        <footer className={styles.footer}>
            <div className={styles['footer-wrapper']}>
                <img src={logo} alt="Logo" className={styles.logo}/>
                {
                    links.map(nav => {
                        return (
                            <Link key={nav.title} href={nav.link} title={nav.title} type="footer"/>
                        )
                    })
                }
            </div>
        </footer>
    )
}

export default Footer