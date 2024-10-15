import React, { useState } from 'react';
import CalendarRows from './CalendarRows';

export default function Calendar() {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    const handleMonthChange = (event) => {
        const [year, month] = event.target.value.split('-');
        setSelectedMonth(parseInt(month) - 1);
        setSelectedYear(parseInt(year));
    };

    return <>
        <fieldset className="calendar-container">
            <legend><h1>Календарь!</h1> </legend>
            <div className="calendar-controls">
                <input
                    type="month"
                    value={`${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}`}
                    onChange={handleMonthChange}
                />
            </div>
            <table className="calendar">
                <thead>
                    <tr>
                        <th>Пн</th>
                        <th>Вт</th>
                        <th>Ср</th>
                        <th>Чт</th>
                        <th>Пт</th>
                        <th>Сб</th>
                        <th>Вс</th>
                    </tr>
                </thead>
                <tbody>
                    <CalendarRows
                        selectedMonth={selectedMonth}
                        selectedYear={selectedYear}
                    />
                </tbody>
            </table>
        </fieldset>
    </>;
};

