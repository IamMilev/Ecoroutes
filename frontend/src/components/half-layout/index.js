import React from 'react'
import styles from "./index.module.css";


const HalfLayout = ({ children }) => {
    return(
        <div className={styles.container}>
            <div className={`${styles.half} ${styles.illustration}`}>
                <span>Razhodi.se</span>
                <span className={styles.desc}>Discover the world's best ecotrails</span>
            </div>
            <div className={styles.half}>
                {children}
            </div>
        </div>
    )
}

export default HalfLayout