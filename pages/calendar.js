import React, { useState } from 'react';
import { DatePicker } from "antd";
import "antd/dist/antd.css";

function formatDate(dateRaw) {
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateRaw);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(dateRaw);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dateRaw);
    return `${da}-${mo}-${ye}`;

    /*
    * // en-GB locale format dd/mm/yyyy
        let o = new Intl.DateTimeFormat("en-GB" , {
            dateStyle: "short"
        });
    * */
}

export default function Home() {
    const [date, onChange] = useState(new Date());
    const callJsonServer = () => {
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({date: formatDate(date)})
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }
    return (
        <div>
            <div>
                <DatePicker
                    onChange={onChange}
                    placeholder={"DD-MM-YYYY"}
                    format={"DD-MM-YYYY"}
                />
                <button onClick={callJsonServer}>React Calendar</button>
            </div>

        </div>
    );
}