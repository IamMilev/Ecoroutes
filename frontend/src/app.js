import React from 'react'
import styles from './app.module.css'
import Header from "./components/header";
import Ecoroutes from "./components/ecoroutes";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className={styles.container}>
          <Ecoroutes />
      </div>
    </div>
  );
}

export default App;
