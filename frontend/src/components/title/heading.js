import React from 'react'
import styles from './heading.module.css'

const Title = ({ title, variant }) => {
    return(
        <h1 className={styles[variant]}>{title}</h1>
    )
}

export default Title