import React from "react"
import styles from './index.module.css'
import Title from "../title/heading";

const Ecotrail = ({ image, title, description, author, date }) => {
    return (
        <div className={styles.container}>
            <div className={styles['img-wrapper']}>
                <img src={image} alt={description} className={styles.img} />
            </div>
            <div className={styles['info-wrapper']}>
                <Title variant='ecotrail-title' title={title}/>
                <p className={styles['ecotrail-desc']}>{description}</p>
                <div className={styles['ecotrail-author']}>{author}</div>
                <div className={styles['ecotrail-date']}>{date.slice(0, 10)}</div>
            </div>
        </div>
    )
}

export default Ecotrail