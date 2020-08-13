import React from "react";
import styles from './index.module.css'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.min.css'


const DatePick = ({ id, date, setDate, setDateError}) => {

    const onChange = (date) => {
        if (date === null) {
            setDate(date)
            setDateError(true)
        } else {
            setDate(date)
            setDateError(false)
        }
    }

    return(
        <label className={styles['date-picker-wrapper']} htmlFor="date-picker">
            <span className={styles['date-picker-label']}>Pick a date</span>
            <DatePicker className={styles['date-picker']} id={id} selected={date} onChange={onChange} dateFormat="MMMM d, yyyy" />
        </label>
    )
}
export default DatePick