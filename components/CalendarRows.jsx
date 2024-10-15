import React from 'react';

export default function CalendarRows({ selectedMonth, selectedYear }) {
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

    const rows = [];
    let currentDay = 1;
    let startDay = (firstDayOfMonth - 1 + 7) % 7;
    let endDay = (startDay + daysInMonth - 1) % 7;

    for (let i = 0; i < 6; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < startDay) || (i === 5 && j > endDay)) {
                week.push(<td key={`пустой-${j}`}></td>);
            } else if (currentDay > daysInMonth) {
                week.push(<td key={`пустой-${j}`}></td>);
            } else {
                week.push(<td key={currentDay}>{currentDay}</td>);
                currentDay++;
            }
        }
        rows.push(<tr key={i}>{week}</tr>);
    }

    return rows;
};
