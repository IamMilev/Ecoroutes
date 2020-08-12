import React from "react";
import styles from './index.module.css'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.min.css'


const DatePick = ({ id, date, setDate}) => {
    // let dd = date.getDate()
    // let yyyy = date.getFullYear()
    //
    // if (dd < 10) {dd = '0' + dd}
    // let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // let month = months[date.getMonth()]

    // let today = month + ' ' + dd + ',' + yyyy

    // console.log(date)
    // console.log(today)

    return(
        <label className={styles['date-picker-wrapper']} htmlFor="date-picker">
            <span className={styles['date-picker-label']}>Pick a date</span>
            <DatePicker className={styles['date-picker']} id={id} selected={date} onChange={date => setDate(date)} dateFormat="MMMM d, yyyy" />
        </label>
    )
}
export default DatePick