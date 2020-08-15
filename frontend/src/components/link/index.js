import React from "react"
import styles from "./index.module.css"
import {Link, NavLink} from "react-router-dom";

const LinkComponent = ({ href, title, type }) => {
    return (
        <div className={styles[`${type}-list-item`]}>
            <NavLink exact to={href} activeClassName={styles['active']} className={styles[`${type}-list-link`]}>
                {title}
            </NavLink>
        </div>
    )
}

export default LinkComponent