import React, {Component} from 'react'
import styles from './index.module.css'
import PageLayout from "../../components/page-layout";
import Ecotrail from "../../components/ecotrail";
import Title from "../../components/title/heading";

class EcotrailListPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ecotrails : []
        }
    }

    getEcotrails = async () => {
        const promise = await fetch('http://localhost:5000/ecotrail/')
        const ecotrails = await promise.json()
        this.setState({
            ecotrails
        })
    }

    renderEcotrails() {
        const { ecotrails } = this.state
        return ecotrails.map((ecotrail, index) => {
            // console.log(ecotrail._id)
            return(
                <Ecotrail key={ecotrail._id} {...ecotrail} id={ecotrail._id} />
            )
        });
    }

    componentDidMount() {
        this.getEcotrails()
    }

    render() {
        return (
            <PageLayout>
                <div className={styles.container}>
                    <Title variant="title" title="Ecotrails" />
                    <div className={styles['ecotrails-wrapper']}>
                        {this.renderEcotrails()}
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default EcotrailListPage;