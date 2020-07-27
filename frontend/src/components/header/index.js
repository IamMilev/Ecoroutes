import React from "react"
import styles from './index.module.css'
import Link from "../link";

const Header = (props) => {
    return (
        <header>
            <div className={styles.navigation}>
                <Link href="/" title="Logo" type="header"/>
                <Link href="/ecoroutes" title="Routes" type="header"/>
                <Link href="/signin" title="Sign in" type="header"/>
                <Link href="/signup" title="Sign up" type="header"/>
            </div>
        </header>
    )
}

export default Header