import React, { useState } from 'react';

import { DatePicker } from "antd";
import "antd/dist/antd.css";

export default function Home() {
    const [date, onChange] = useState(new Date());
    const getCalendarData = () => {
        // individual date month year extraction format dd-mm-yyyy
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        console.log(`${da}-${mo}-${ye}`);

        // en-GB locale format dd/mm/yyyy
        let o = new Intl.DateTimeFormat("en-GB" , {
            dateStyle: "short"
        });
        console.log(o.format(date))

    }
    return (
        <div>
            <div>
                <DatePicker
                    onChange={onChange}
                    placeholder={"DD-MM-YYYY"}
                    format={"DD-MM-YYYY"}
                />
                <button onClick={getCalendarData}>React Calendar</button>
            </div>

        </div>
    );
}