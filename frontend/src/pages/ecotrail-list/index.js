import React, {Component} from 'react'
import styles from './index.module.css'
import PageLayout from "../../components/page-layout";
// import Ecoroute from "../../components/ecoroute";
import Title from "../../components/title";

class EcotrailListPage extends Component {
    // constructor(props) {
    //     super(props)
    //
    //     this.state = {
    //         ecoroutes : []
    //     }
    // }
    //
    // getEcoroutes = async () => {
    //     const promise = await fetch('http://localhost:5500/ecoroutes/')
    //     const ecoroutes = await promise.json()
    //     this.setState({
    //         ecoroutes
    //     })
    // }
    //
    // renderEcoroutes() {
    //     const { ecoroutes } = this.state
    //
    //     return ecoroutes.map((ecoroute, index) => {
    //         return(
    //             <Ecoroute key={ecoroute._id} index={index+1} {...ecoroute} />
    //         )
    //     });
    // }
    //
    // componentDidMount() {
    //     this.getEcoroutes()
    // }

    render() {
        return (
            <PageLayout>
                <div className={styles.container}>
                    <Title title="Ecotrails" />
                    <div className={styles['ecotrails-wrapper']}>
                        {/*{this.renderEcoroutes()}*/}
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default EcotrailListPage;