import React from "react"
import styles from './index.module.css'

const Ecoroute = ({ image, title, description, username }) => {
    return (
        <div className={styles.container}>
            <img src={image} alt={description} className={styles.image}/> <br/>
            {title} <br/>
            {description} <br/>
            {username}
        </div>
    )
}

export default Ecoroute