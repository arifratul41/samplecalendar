import Calendar from 'react-calendar'
import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
    const [startDate, setStartDate] = useState(new Date());
    const getCalendarData = () => {
        // individual date month year extraction format dd-mm-yyyy
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(startDate);
        let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(startDate);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(startDate);
        console.log(`${da}-${mo}-${ye}`);

        // en-GB locale format dd/mm/yyyy
        let o = new Intl.DateTimeFormat("en-GB" , {
            dateStyle: "short"
        });
        console.log(o.format(startDate))

    }
    return (
        <div>
            <div>
                <DatePicker
                    dateFormat="dd-MM-yyyy"
                    placeholderText={"DD-MM-YYYY"}
                    selected={startDate}
                    onChange={date => setStartDate(date)} />
                <button onClick={getCalendarData}>React Calendar</button>
            </div>
        </div>
    );
}