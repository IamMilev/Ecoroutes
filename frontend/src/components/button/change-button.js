import React from 'react'
import styles from './button.module.css'

const ChangeButton = ({title, onClick}) => {
    return(
        <button className={styles['btn-change']} onClick={onClick}>
            {title}
        </button>
    )
}

export default ChangeButton