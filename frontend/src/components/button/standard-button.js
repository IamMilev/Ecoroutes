import React from 'react'
import styles from './button.module.css'

const Button = ({ onClick, title, type }) => {
    return(
        <button className={styles.btn} onClick={onClick} type={type}>{title}</button>
    )
}

export default Button