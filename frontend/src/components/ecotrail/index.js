import React from "react"
import styles from './index.module.css'
import Title from "../title";

const Ecotrail = ({ image, title, description, author, date }) => {
    return (
        <div className={styles.container}>
            <img src={image} alt={description} className={styles.image}/> <br/>
            <Title title={title}/> <br/>
            {description} <br/>
            {date} <br/>
            {author} <br/>
        </div>
    )
}

export default Ecotrail