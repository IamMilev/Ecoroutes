import React from 'react'
import Header from "../../components/header";
import styles from "./index.module.css";
import Footer from "../../components/footer";

const PageLayout = (props) => {
    return(
        <div className={styles.main}>
            <Header />
            <div className={styles.container}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout