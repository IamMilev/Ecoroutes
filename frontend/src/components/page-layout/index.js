import React from 'react'
import Header from "../../components/header";
import styles from "./index.module.css";
import Footer from "../../components/footer";

const PageLayout = (props) => {
    return(
        <>
            <Header />
            <div className={styles.container}>
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default PageLayout