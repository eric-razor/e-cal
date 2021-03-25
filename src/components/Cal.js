import React from 'react';
import '../styles/Cal.css'
import Weekdays from './Weekdays'
import MonthName from './MonthName'
import MonthDays from './MonthDays'

class Cal extends React.Component { 
    render(){
        return(
            <div className='calendar-div'>
                <table className='Calendar-div' width="1120" border='1' cellPadding='1'>
                    <MonthName/>
                    <Weekdays/>
                    <MonthDays/>
                </table>
            </div>
        )
    }
}

export default Cal;