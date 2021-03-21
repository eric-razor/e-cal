import React from 'react'

function MonthName(){
    return(
        <thead className="month-name-header">
            <tr className="month-name-table-row">
                <td><span>{"<"}</span></td>
                <td className="month-name-table-data" colSpan="5" align="center">{currentMonth()}</td>
                <td align="right"><span>{">"}</span></td>
            </tr>
            
        </thead>
    )
}

function currentMonth(){
    const data = new Date();
    let month = data.toLocaleString('default', { month: 'long' });
    return month;
}

export default MonthName;