import React from 'react';

class TimerStart extends React.Component {
    state = {
        timerCount: this.props.timerCount
    }

    render () {
        return (
            <div>
                <button className ="timer game-button" onClick = {this.props.handleStart}>Start</button>
                <button className ="timer game-button" onClick = {this.props.handleStop}>Stop</button>
                <button className="timer game-button" onClick = {this.props.handleReset}>Reset</button>
            </div>
        )
    }
}

export default TimerStart;