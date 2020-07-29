import React from 'react'
import styles from './App.module.css'
import Header from "./components/header";
import Ecoroutes from "./components/ecoroutes";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
        <Header />
        <div className={styles.container}>
          <Ecoroutes />
        </div>
        <Footer />
    </div>
  );
}

export default App;
