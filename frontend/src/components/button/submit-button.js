import React from 'react'
import styles from './button.module.css'

const SubmitButton = ({ title, type }) => {
    return(
        <button className={styles.btn} type={type} >{title}</button>
    )
}

export default SubmitButton