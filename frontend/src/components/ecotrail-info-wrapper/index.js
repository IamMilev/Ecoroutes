import React from 'react'
import styles from "./index.module.css";

const InfoWrapper = ({ title, children}) => {
    return(
        <>
            <h3 className={styles['info-heading']}>{title}:</h3>
            <div>{children}</div>
        </>
    )
}

export default InfoWrapper
