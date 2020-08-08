import React from 'react'
import styles from './index.module.css'

const Form = ({ onSubmit, children }) => {
    return(
        <form className={styles['form-group']} onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form