import React from "react";
import styles from './index.module.css'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.min.css'

const DatePick = ({date, setDate}) => {
    return(
        <label className={styles['date-picker-wrapper']} htmlFor="date-picker">
            <span className={styles['date-picker-label']}>Pick a date</span>
            <DatePicker className={styles['date-picker']} selected={date} onChange={date => setDate(date)} />
        </label>
    )
}
export default DatePick