import React from 'react'
import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit-button";

const AddEcoroutePage = () => {
    return(
        <PageLayout>
            <br/>
            <br/>
            <br/>
            <Title title="Add Ecoroute" />
            <div className={styles.form}>
                <input type="text"/>
                <SubmitButton title="Submit" />
            </div>
        </PageLayout>
    )
}

export default AddEcoroutePage