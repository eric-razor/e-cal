// try to use a framework for now and come back to vanilla js if not happy with it

import React from 'react';
import Weekdays from './Weekdays'
import Month from './Month'
class Cal extends React.Component{
    render(){
        return(
            <div className='calendar-div'>
                <table className='Calendar-div'>
                    <Month/>
                    <Weekdays/>
                </table>
            </div>
        )
    }
}

export default Cal;