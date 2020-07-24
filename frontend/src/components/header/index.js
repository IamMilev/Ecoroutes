import React from "react"
import styles from './index.module.css'
import Link from "../link";

const Header = (props) => {
    return (
        <header className={styles.navigation}>
            <ul>
                <Link href="main.js" title="Logo"/>
                <li className={styles.listItems}>Routes</li>
                <li className={styles.listItems}>Sign in</li>
                <li className={styles.listItems}>Sign up</li>
            </ul>
        </header>
    )
}

export default Header