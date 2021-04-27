import Calendar from 'react-calendar'
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

export default function Home() {
    const [value, onChange] = useState(new Date());
    const getCalendarData = () => {
        // individual date month year extraction format dd-mm-yyyy
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(value);
        let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(value);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(value);
        console.log(`${da}-${mo}-${ye}`);

        // en-GB locale format dd/mm/yyyy
        let o = new Intl.DateTimeFormat("en-GB" , {
            dateStyle: "short"
        });
        console.log(o.format(value))

    }
    return (
        <div>
            <Calendar id = "calendar"
                onChange={onChange}
                value={value}
            />
            <button onClick={getCalendarData}>React Calendar</button>
        </div>
    );
}