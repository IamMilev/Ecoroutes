import React from 'react'
import styles from './submit-button.module.css'

const SubmitButton = ({ title, type }) => {
    return(
        <button className={styles.submit} type={type} >{title}</button>
    )
}

export default SubmitButton