import React from "react"
import styles from './error-notice.module.css'

const ErrorNotice = (props) => {
  return (
    <div className={styles['error-notice']}>
      <span>{props.message}</span>
      <button onClick={props.clearError}>X</button>
    </div>
  );
}

export default ErrorNotice
