import React from "react"
import styles from './index.module.css'

const Ecotrail = ({ image, title, description, username, index }) => {
    return (
        <div className={styles.container}>
            <img src={image} alt={description} className={styles.image}/> <br/>
            {title} <br/>
            {description} <br/>
            {username} <br/>
            {index}
        </div>
    )
}

export default Ecotrail