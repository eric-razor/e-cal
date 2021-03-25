import React from 'react'

function MonthName(){
    return(
        <thead className="month-name-header">
            <tr className="month-name-table-row">
                <td className="directional-span" id="left" align="left" onClick={previousMonth} ><span>{"<"}</span></td>
                <td className="month-name-table-data" colSpan="5" align="center">{currentMonth()}</td>
                <td className="directional-span" id="right" align="right" onClick={nextMonth}><span>{">"}</span></td>
            </tr>
            
        </thead>
    )
}

function currentMonth(){
    const data = new Date();
    let month = data.toLocaleString('default', { month: 'long' });
    return month;
}

function previousMonth(){
    console.log("previous month")
}

function nextMonth(){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let data = new Date();
    let currentMonth= data.getMonth()
    console.log(months[currentMonth + 1])
}

export default MonthName;