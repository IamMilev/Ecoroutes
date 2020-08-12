import React from 'react'
import styles from './index.module.css'

const Input = ({ label, id, value, type, onChange, error }) => {
    return(
        <>
            <label htmlFor={id} className={styles['input-wrapper']}>
                <input id={id} value={value} type={type} onChange={onChange} className={styles.input} autoComplete="off"/>
                <span className={styles['input-label']}>{label}</span>
                <div className={styles['border-bottom']} />
                <span className={styles.error}>{error}</span>
            </label>
        </>
    )
}

export default Input