import React, {Component} from "react"
import styles from './index.module.css'
import Ecoroute from "../ecoroute";

class Ecoroutes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ecoroutes : []
        }
    }

    getEcoroutes = async () => {
        const promise = await fetch('http://localhost:5500/ecoroutes/')
        const ecoroutes = await promise.json()
        this.setState({
            ecoroutes
        })
    }

    renderEcoroutes() {
        const { ecoroutes } = this.state

        return ecoroutes.map((ecoroute, index) => {
            return(
                <Ecoroute key={ecoroute._id} index={index+1} {...ecoroute} />
            )
        });
    }

    componentDidMount() {
        this.getEcoroutes()
    }

    render() {
        return (
            <div className={styles.container}>
                <h1>Ecoroutes</h1>
                <div>
                    {this.renderEcoroutes()}
                </div>
            </div>
        )
    }
}

export default Ecoroutes