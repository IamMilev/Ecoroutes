import React from "react"
import Link from "../link"
import styles from './index.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-wrapper']}>
                <Link href="/" title="Razhodi.se" type="footer"/>
                <Link href="/ecoroutes" title="Routes" type="footer"/>
                <Link href="/signin" title="Sign in" type="footer"/>
                <Link href="/signup" title="Sign up" type="footer"/>
            </div>
        </footer>
    )
}

export default Footer