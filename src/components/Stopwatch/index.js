import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  start = () => {
    this.setState(prevState => ({time: prevState.time + 1}))
  }

  startTimer = () => {
    this.timerId = setInterval(this.start, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    this.setState({time: 0})
    clearInterval(this.timerId)
  }

  generatedTime = () => {
    const {time} = this.state
    const min = Math.floor(time / 60)
    const sec = Math.floor(time % 60)
    const strMin = min > 9 ? min : `0${min}`
    const strSec = sec > 9 ? sec : `0${sec}`
    return `${strMin}:${strSec}`
  }

  render() {
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="watch-container">
            <div className="watch-heading-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-img"
              />
              <p className="watch-heading">Timer</p>
            </div>
            <h1 className="timer">{this.generatedTime()}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="custom-button btn-1"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="custom-button btn-2"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="custom-button btn-3"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
