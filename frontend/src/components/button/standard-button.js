import React from 'react'
import styles from './button.module.css'

const Button = ({ onClick, title }) => {
    return(
        <button className={styles.btn} onClick={onClick}>{title}</button>
    )
}

export default Button