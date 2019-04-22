import React from 'react'; 


class TimerOnScreen extends React.Component {
    state = {}
      

    render () {
        return (
            <div className="digits timing">
            <br/>
                <div className = "">{this.props.timerCount}</div>
                
                <div className="digit" id="tensMinute">{this.props.tensMinute}</div>
                <div className="digit" id="singleMinute">{this.props.singleMinute}</div>
                <div className="digit" id="colon">:</div>
                <div className="digit" id="secondTens">{this.props.secondTens}</div>
                <div className="digit" id="secondOnes">{this.props.secondOnes}</div>
            </div>
            
        );
    }
}

export default TimerOnScreen; 